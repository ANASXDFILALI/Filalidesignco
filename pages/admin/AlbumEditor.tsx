import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProject, Category, Album } from '../../context/ProjectContext';
import { Save, ArrowLeft, Image as ImageIcon, Trash, Plus, Upload, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

const isSupabaseConfigured = () =>
    !!import.meta.env.VITE_SUPABASE_URL &&
    import.meta.env.VITE_SUPABASE_URL !== 'https://placeholder.supabase.co';

const uploadImage = async (file: File): Promise<string | null> => {
    const ext = file.name.split('.').pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from('portfolio-images').upload(path, file, { upsert: false });
    if (error) { console.error('Upload error', error); return null; }
    const { data } = supabase.storage.from('portfolio-images').getPublicUrl(path);
    return data.publicUrl;
};

const AlbumEditor: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getAlbum, addAlbum, updateAlbum } = useProject();
    const coverInputRef = useRef<HTMLInputElement>(null);
    const galleryInputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const canUpload = isSupabaseConfigured();

    const isEditing = !!id && id !== 'new';

    const [formData, setFormData] = useState<Partial<Album>>({
        title: '',
        category: 'salons',
        description: '',
        coverImage: '',
        images: []
    });

    useEffect(() => {
        if (isEditing) {
            const album = getAlbum(id);
            if (album) {
                setFormData(album);
            } else {
                navigate('/admin');
            }
        }
    }, [id, getAlbum, navigate, isEditing]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.coverImage) {
            alert('Veuillez remplir le titre et l\'image de couverture');
            return;
        }

        if (isEditing && id) {
            await updateAlbum(id, formData);
        } else {
            await addAlbum(formData as Omit<Album, 'id' | 'createdAt'>);
        }
        navigate('/admin');
    };

    const addImageSlot = () => {
        const newImage = { id: Date.now().toString(), src: '', caption: '' };
        setFormData(prev => ({
            ...prev,
            images: [...(prev.images || []), newImage]
        }));
    };

    const updateImageField = (index: number, field: 'src' | 'caption', value: string) => {
        const newImages = [...(formData.images || [])];
        newImages[index] = { ...newImages[index], [field]: value };
        setFormData(prev => ({ ...prev, images: newImages }));
    };

    const removeImage = (index: number) => {
        const newImages = [...(formData.images || [])];
        newImages.splice(index, 1);
        setFormData(prev => ({ ...prev, images: newImages }));
    };

    const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        const url = await uploadImage(file);
        if (url) setFormData(prev => ({ ...prev, coverImage: url }));
        setUploading(false);
    };

    const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        setUploading(true);
        const uploads = await Promise.all(files.map(uploadImage));
        const newImages = uploads
            .filter(Boolean)
            .map(url => ({ id: Date.now().toString() + Math.random(), src: url as string, caption: '' }));
        setFormData(prev => ({ ...prev, images: [...(prev.images || []), ...newImages] }));
        setUploading(false);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={() => navigate('/admin')}
                className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
            >
                <ArrowLeft size={16} /> Retour
            </button>

            <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-3xl font-royal text-white mb-2">
                            {isEditing ? 'Éditer le Projet' : 'Nouveau Projet'}
                        </h1>
                        <p className="text-gray-400">Configurez les détails et les médias de votre collection.</p>
                    </div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-riad-gold text-riad-blue px-8 py-3 rounded font-bold hover:bg-white transition-colors shadow-gold"
                    >
                        <Save size={20} />
                        Enregistrer
                    </button>
                </div>

                <div className="grid gap-8">
                    {/* Main Info Card */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-lg space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-riad-gold uppercase tracking-wider">Titre du Projet</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none"
                                    placeholder="Ex: Salon Beldi Prestige"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-riad-gold uppercase tracking-wider">Catégorie</label>
                                <select
                                    value={formData.category} // Fixed: Use value instead of defaultValue
                                    onChange={e => setFormData({ ...formData, category: e.target.value as Category })}
                                    className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none appearance-none"
                                >
                                    <option value="salons">Salons Marocains</option>
                                    <option value="beds">Lits & Têtes de Lit</option>
                                    <option value="curtains">Rideaux & Stores</option>
                                    <option value="cuisines">Cuisines Modernes</option>
                                    <option value="wood_meubles">Bois & Ameublement</option>
                                    <option value="gallery">Galerie Atelier</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-riad-gold uppercase tracking-wider">Description</label>
                            <textarea
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none resize-none"
                                placeholder="Description détaillée du projet..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-riad-gold uppercase tracking-wider">Image de Couverture</label>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={formData.coverImage}
                                    onChange={e => setFormData({ ...formData, coverImage: e.target.value })}
                                    className="flex-1 bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none font-mono text-sm"
                                    placeholder="https://... ou cliquez Uploader"
                                />
                                {canUpload && (
                                    <>
                                        <input ref={coverInputRef} type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
                                        <button type="button" onClick={() => coverInputRef.current?.click()} disabled={uploading}
                                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 rounded transition-colors text-sm disabled:opacity-50">
                                            {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                                            Uploader
                                        </button>
                                    </>
                                )}
                                <div className="w-12 h-12 bg-black/40 rounded border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                    {formData.coverImage ? (
                                        <img src={formData.coverImage} alt="Cover" className="w-full h-full object-cover" />
                                    ) : (
                                        <ImageIcon size={20} className="text-gray-600" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Images */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-royal text-white">Galerie Photos</h2>
                            <div className="flex items-center gap-3">
                                {canUpload && (
                                    <>
                                        <input ref={galleryInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryUpload} />
                                        <button type="button" onClick={() => galleryInputRef.current?.click()} disabled={uploading}
                                            className="flex items-center gap-2 text-riad-gold hover:text-white transition-colors text-sm uppercase tracking-wider font-medium disabled:opacity-50">
                                            {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                                            Uploader
                                        </button>
                                    </>
                                )}
                                <button type="button" onClick={addImageSlot}
                                    className="flex items-center gap-2 text-riad-gold hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">
                                    <Plus size={16} /> URL
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {formData.images?.map((img, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-start gap-4 group hover:border-riad-gold/30 transition-colors">
                                    <div className="w-24 h-24 bg-black/40 rounded border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        {img.src ? (
                                            <img src={img.src} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <ImageIcon size={24} className="text-gray-600" />
                                        )}
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <input
                                            type="text"
                                            value={img.src}
                                            onChange={e => updateImageField(idx, 'src', e.target.value)}
                                            className="w-full bg-black/20 border border-white/10 rounded p-2 text-white focus:border-riad-gold outline-none font-mono text-xs"
                                            placeholder="URL de l'image"
                                        />
                                        <input
                                            type="text"
                                            value={img.caption}
                                            onChange={e => updateImageField(idx, 'caption', e.target.value)}
                                            className="w-full bg-black/20 border border-white/10 rounded p-2 text-white focus:border-riad-gold outline-none text-sm"
                                            placeholder="Légende (optionnel)"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => removeImage(idx)}
                                        className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded transition-colors"
                                    >
                                        <Trash size={18} />
                                    </button>
                                </div>
                            ))}
                            {(!formData.images || formData.images.length === 0) && (
                                <div className="text-center py-12 border-2 border-dashed border-white/10 rounded-lg text-gray-500">
                                    Aucune image additionnelle. Ajoutez-en pour enrichir le projet.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AlbumEditor;
