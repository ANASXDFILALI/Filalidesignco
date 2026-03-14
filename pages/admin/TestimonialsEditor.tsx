import React, { useState } from 'react';
import { useTestimonials, Testimonial } from '../../context/TestimonialContext';
import { Plus, Trash2, Save, Edit2, X } from 'lucide-react';

const emptyForm = { text: '', author: '', role: '' };

const TestimonialsEditor: React.FC = () => {
    const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useTestimonials();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState(emptyForm);
    const [showAddForm, setShowAddForm] = useState(false);

    const startEdit = (t: Testimonial) => {
        setEditingId(t.id);
        setForm({ text: t.text, author: t.author, role: t.role });
        setShowAddForm(false);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setForm(emptyForm);
    };

    const saveEdit = () => {
        if (!editingId || !form.text || !form.author) return;
        updateTestimonial(editingId, form);
        cancelEdit();
    };

    const handleAdd = () => {
        if (!form.text || !form.author) {
            alert('Veuillez remplir le texte et l\'auteur');
            return;
        }
        addTestimonial(form);
        setForm(emptyForm);
        setShowAddForm(false);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-royal text-white mb-2">Témoignages</h1>
                    <p className="text-gray-400">Gérez les avis et témoignages clients.</p>
                </div>
                <button
                    onClick={() => { setShowAddForm(true); setEditingId(null); setForm(emptyForm); }}
                    className="flex items-center gap-2 bg-riad-gold text-riad-blue px-6 py-3 rounded font-bold hover:bg-white transition-colors"
                >
                    <Plus size={20} />
                    Nouveau Témoignage
                </button>
            </div>

            {/* Add Form */}
            {showAddForm && (
                <div className="bg-white/5 border border-riad-gold/30 rounded-lg p-6 mb-8 space-y-4">
                    <h2 className="text-lg font-royal text-riad-gold mb-4">Nouveau Témoignage</h2>
                    <textarea
                        value={form.text}
                        onChange={e => setForm({ ...form, text: e.target.value })}
                        rows={4}
                        placeholder="Texte du témoignage..."
                        className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none resize-none"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            value={form.author}
                            onChange={e => setForm({ ...form, author: e.target.value })}
                            placeholder="Auteur"
                            className="bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none"
                        />
                        <input
                            type="text"
                            value={form.role}
                            onChange={e => setForm({ ...form, role: e.target.value })}
                            placeholder="Rôle / Contexte"
                            className="bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none"
                        />
                    </div>
                    <div className="flex gap-3">
                        <button onClick={handleAdd} className="flex items-center gap-2 bg-riad-gold text-riad-blue px-6 py-2 rounded font-bold hover:bg-white transition-colors">
                            <Save size={16} /> Enregistrer
                        </button>
                        <button onClick={() => setShowAddForm(false)} className="flex items-center gap-2 bg-white/10 text-white px-6 py-2 rounded hover:bg-white/20 transition-colors">
                            <X size={16} /> Annuler
                        </button>
                    </div>
                </div>
            )}

            {/* Testimonials List */}
            <div className="space-y-4">
                {testimonials.map(t => (
                    <div key={t.id} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-riad-gold/30 transition-colors">
                        {editingId === t.id ? (
                            <div className="space-y-4">
                                <textarea
                                    value={form.text}
                                    onChange={e => setForm({ ...form, text: e.target.value })}
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none resize-none"
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        value={form.author}
                                        onChange={e => setForm({ ...form, author: e.target.value })}
                                        placeholder="Auteur"
                                        className="bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none"
                                    />
                                    <input
                                        type="text"
                                        value={form.role}
                                        onChange={e => setForm({ ...form, role: e.target.value })}
                                        placeholder="Rôle / Contexte"
                                        className="bg-black/20 border border-white/10 rounded p-3 text-white focus:border-riad-gold outline-none"
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <button onClick={saveEdit} className="flex items-center gap-2 bg-riad-gold text-riad-blue px-5 py-2 rounded font-bold hover:bg-white transition-colors text-sm">
                                        <Save size={15} /> Enregistrer
                                    </button>
                                    <button onClick={cancelEdit} className="flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded hover:bg-white/20 transition-colors text-sm">
                                        <X size={15} /> Annuler
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <p className="text-gray-300 italic mb-3">"{t.text}"</p>
                                    <div>
                                        <span className="text-white font-medium text-sm">{t.author}</span>
                                        {t.role && <span className="text-riad-gold text-xs ml-2 uppercase tracking-wider">— {t.role}</span>}
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-shrink-0">
                                    <button
                                        onClick={() => startEdit(t)}
                                        className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded transition-colors text-sm"
                                    >
                                        <Edit2 size={15} /> Éditer
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (window.confirm('Supprimer ce témoignage ?')) deleteTestimonial(t.id);
                                        }}
                                        className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {testimonials.length === 0 && (
                    <div className="text-center py-16 border-2 border-dashed border-white/10 rounded-lg text-gray-500">
                        Aucun témoignage. Ajoutez-en un nouveau.
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestimonialsEditor;
