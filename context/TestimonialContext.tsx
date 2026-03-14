import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../lib/supabaseClient';

export interface Testimonial {
    id: string;
    text: string;
    author: string;
    role: string;
}

interface TestimonialContextType {
    testimonials: Testimonial[];
    loading: boolean;
    addTestimonial: (t: Omit<Testimonial, 'id'>) => Promise<void>;
    updateTestimonial: (id: string, updates: Partial<Testimonial>) => Promise<void>;
    deleteTestimonial: (id: string) => Promise<void>;
}

const defaultTestimonials: Testimonial[] = [
    { id: uuidv4(), text: "La rénovation de notre lobby a été métamorphosée par l'expertise de Filali. Une fusion parfaite entre l'âme traditionnelle marocaine et une élégance contemporaine absolue.", author: "Directeur, Hôtel Royal Mansour", role: "Hôtellerie de Luxe" },
    { id: uuidv4(), text: "Redonner vie à ce Riad historique demandait une sensibilité unique. Le travail du bois de cèdre et des tissus brodés main est tout simplement exceptionnel.", author: "Jean-Pierre L.", role: "Restauration de Riad" },
    { id: uuidv4(), text: "J'ai trouvé chez Filali Design une écoute rare. Mes pièces de collection sont sublimées par leur travail sur mesure. Un véritable partenaire artistique.", author: "Sarah B.", role: "Collectionneuse d'Art" },
];

const isSupabaseConfigured = () =>
    !!import.meta.env.VITE_SUPABASE_URL &&
    import.meta.env.VITE_SUPABASE_URL !== 'https://placeholder.supabase.co';

const TestimonialContext = createContext<TestimonialContextType | undefined>(undefined);

export const TestimonialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const online = isSupabaseConfigured();

    const fetchTestimonials = useCallback(async () => {
        if (!online) {
            try {
                const saved = localStorage.getItem('filali_testimonials');
                setTestimonials(saved ? JSON.parse(saved) : defaultTestimonials);
            } catch { setTestimonials(defaultTestimonials); }
            setLoading(false);
            return;
        }
        const { data } = await supabase
            .from('testimonials')
            .select('*')
            .order('created_at', { ascending: true });
        if (data) {
            setTestimonials(data.map((row: any) => ({ id: row.id, text: row.text, author: row.author, role: row.role || '' })));
        }
        setLoading(false);
    }, [online]);

    useEffect(() => {
        fetchTestimonials();
        if (!online) return;

        const channel = supabase
            .channel('testimonials-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'testimonials' }, fetchTestimonials)
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    }, [fetchTestimonials, online]);

    useEffect(() => {
        if (!online && testimonials.length > 0) {
            localStorage.setItem('filali_testimonials', JSON.stringify(testimonials));
        }
    }, [testimonials, online]);

    const addTestimonial = async (t: Omit<Testimonial, 'id'>) => {
        if (!online) {
            setTestimonials(prev => [...prev, { ...t, id: uuidv4() }]);
            return;
        }
        await supabase.from('testimonials').insert({ text: t.text, author: t.author, role: t.role });
    };

    const updateTestimonial = async (id: string, updates: Partial<Testimonial>) => {
        if (!online) {
            setTestimonials(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
            return;
        }
        await supabase.from('testimonials').update(updates).eq('id', id);
    };

    const deleteTestimonial = async (id: string) => {
        if (!online) {
            setTestimonials(prev => prev.filter(t => t.id !== id));
            return;
        }
        await supabase.from('testimonials').delete().eq('id', id);
    };

    return (
        <TestimonialContext.Provider value={{ testimonials, loading, addTestimonial, updateTestimonial, deleteTestimonial }}>
            {children}
        </TestimonialContext.Provider>
    );
};

export const useTestimonials = () => {
    const ctx = useContext(TestimonialContext);
    if (!ctx) throw new Error('useTestimonials must be used within a TestimonialProvider');
    return ctx;
};
