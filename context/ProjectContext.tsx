import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import imagesData from '../images.json';
import { supabase } from '../lib/supabaseClient';

// --- Types ---
export type Category = 'salons' | 'beds' | 'curtains' | 'gallery' | 'cuisines' | 'wood_meubles';

export interface Image {
    id: string;
    src: string;
    caption?: string;
}

export interface Album {
    id: string;
    title: string;
    category: Category;
    description: string;
    coverImage: string;
    images: Image[];
    createdAt: number;
}

interface ProjectContextType {
    albums: Album[];
    loading: boolean;
    addAlbum: (album: Omit<Album, 'id' | 'createdAt'>) => Promise<void>;
    updateAlbum: (id: string, updates: Partial<Album>) => Promise<void>;
    deleteAlbum: (id: string) => Promise<void>;
    getAlbum: (id: string) => Album | undefined;
}

// --- Offline seed (used when Supabase is not configured) ---
const seedData = (): Album[] => {
    const albums: Album[] = [];
    (imagesData as any).capitone.salons.forEach((item: any) => {
        albums.push({ id: item.id || uuidv4(), title: item.title, category: 'salons', description: item.description, coverImage: item.image, images: [{ id: uuidv4(), src: item.image, caption: item.subtitle }], createdAt: Date.now() });
    });
    (imagesData as any).beds.models.forEach((item: any) => {
        albums.push({ id: uuidv4(), title: item.title, category: 'beds', description: item.desc, coverImage: item.image, images: [{ id: uuidv4(), src: item.image, caption: item.style }], createdAt: Date.now() });
    });
    (imagesData as any).curtains.blinds.forEach((item: any) => {
        albums.push({ id: uuidv4(), title: item.title, category: 'curtains', description: item.desc, coverImage: item.image, images: [{ id: uuidv4(), src: item.image, caption: item.subtitle }], createdAt: Date.now() });
    });
    const galleryImages = (imagesData as any).gallery.images.map((img: any) => ({ id: uuidv4(), src: img.src, caption: img.title + ' - ' + img.subtitle }));
    albums.push({ id: 'main-gallery', title: 'Atelier & Savoir-Faire', category: 'gallery', description: "Plongée au cœur de nos ateliers où la magie opère.", coverImage: galleryImages[0]?.src || '', images: galleryImages, createdAt: Date.now() });
    return albums;
};

const isSupabaseConfigured = () =>
    !!import.meta.env.VITE_SUPABASE_URL &&
    import.meta.env.VITE_SUPABASE_URL !== 'https://placeholder.supabase.co';

const rowToAlbum = (row: any, images: any[]): Album => ({
    id: row.id,
    title: row.title,
    category: row.category as Category,
    description: row.description || '',
    coverImage: row.cover_image || '',
    images: images
        .filter((img: any) => img.album_id === row.id)
        .sort((a: any, b: any) => a.position - b.position)
        .map((img: any) => ({ id: img.id, src: img.src, caption: img.caption || '' })),
    createdAt: new Date(row.created_at).getTime(),
});

// --- Context ---
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);
    const online = isSupabaseConfigured();

    const fetchAlbums = useCallback(async () => {
        if (!online) {
            try {
                const saved = localStorage.getItem('filali_portfolio_albums');
                setAlbums(saved ? JSON.parse(saved) : seedData());
            } catch { setAlbums(seedData()); }
            setLoading(false);
            return;
        }
        const [{ data: albumRows }, { data: imageRows }] = await Promise.all([
            supabase.from('albums').select('*').order('created_at', { ascending: false }),
            supabase.from('album_images').select('*'),
        ]);
        if (albumRows) {
            setAlbums(albumRows.map((row) => rowToAlbum(row, imageRows || [])));
        }
        setLoading(false);
    }, [online]);

    useEffect(() => {
        fetchAlbums();
        if (!online) return;

        const channel = supabase
            .channel('portfolio-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'albums' }, fetchAlbums)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'album_images' }, fetchAlbums)
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    }, [fetchAlbums, online]);

    useEffect(() => {
        if (!online && albums.length > 0) {
            localStorage.setItem('filali_portfolio_albums', JSON.stringify(albums));
        }
    }, [albums, online]);

    const addAlbum = async (newAlbum: Omit<Album, 'id' | 'createdAt'>) => {
        if (!online) {
            setAlbums(prev => [{ ...newAlbum, id: uuidv4(), createdAt: Date.now() }, ...prev]);
            return;
        }
        const { data: row, error } = await supabase
            .from('albums')
            .insert({ title: newAlbum.title, category: newAlbum.category, description: newAlbum.description, cover_image: newAlbum.coverImage })
            .select().single();
        if (error || !row) return;
        if (newAlbum.images.length > 0) {
            await supabase.from('album_images').insert(
                newAlbum.images.map((img, i) => ({ album_id: row.id, src: img.src, caption: img.caption, position: i }))
            );
        }
    };

    const updateAlbum = async (id: string, updates: Partial<Album>) => {
        if (!online) {
            setAlbums(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));
            return;
        }
        const dbUpdate: Record<string, any> = {};
        if (updates.title !== undefined) dbUpdate.title = updates.title;
        if (updates.category !== undefined) dbUpdate.category = updates.category;
        if (updates.description !== undefined) dbUpdate.description = updates.description;
        if (updates.coverImage !== undefined) dbUpdate.cover_image = updates.coverImage;
        if (Object.keys(dbUpdate).length > 0) {
            await supabase.from('albums').update(dbUpdate).eq('id', id);
        }
        if (updates.images) {
            await supabase.from('album_images').delete().eq('album_id', id);
            if (updates.images.length > 0) {
                await supabase.from('album_images').insert(
                    updates.images.map((img, i) => ({ album_id: id, src: img.src, caption: img.caption, position: i }))
                );
            }
        }
    };

    const deleteAlbum = async (id: string) => {
        if (!online) {
            setAlbums(prev => prev.filter(a => a.id !== id));
            return;
        }
        await supabase.from('albums').delete().eq('id', id);
    };

    const getAlbum = (id: string) => albums.find(a => a.id === id);

    return (
        <ProjectContext.Provider value={{ albums, loading, addAlbum, updateAlbum, deleteAlbum, getAlbum }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProject = () => {
    const ctx = useContext(ProjectContext);
    if (!ctx) throw new Error('useProject must be used within a ProjectProvider');
    return ctx;
};
