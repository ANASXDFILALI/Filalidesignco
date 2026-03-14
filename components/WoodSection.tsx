import React from 'react';
import { motion } from 'framer-motion';
import LuxuryButton from './LuxuryButton';
import { useProject } from '../context/ProjectContext';
import { ChevronRight } from 'lucide-react';
import AddToMoodboardButton from './AddToMoodboardButton';

const WoodSection: React.FC = () => {
    const { albums } = useProject();
    const woodProjects = albums.filter(a => a.category === 'wood_meubles');

    return (
        <section id="wood" className="py-32 bg-[#2c1810] text-[#e6ccb2] relative overflow-hidden">
            {/* Wood Texture CSS Pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/wood-pattern.png")`, // Fallback texture or CSS pattern
                    backgroundBlendMode: 'overlay'
                }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-arabic text-7xl text-[#d4a373] mb-4"
                    >
                        الأثاث
                    </motion.div>
                    <h2 className="font-royal text-5xl md:text-7xl uppercase tracking-[0.25em] text-[#ede0d4] mb-8">
                        Bois & Ébénisterie
                    </h2>
                </div>

                {/* Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Static Feature Card */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-[#432818]/50 p-10 border border-[#d4a373]/20 flex flex-col justify-center">
                        <h3 className="font-royal text-3xl text-[#d4a373] mb-6 tracking-wider">L'Âme du Bois</h3>
                        <p className="font-elegant text-xl leading-relaxed opacity-80 mb-8">
                            Des pièces uniques sculptées dans des essences nobles. Tables massives, bibliothèques sur mesure et panneaux décoratifs qui racontent une histoire.
                        </p>
                        <ul className="space-y-4 font-elegant text-lg opacity-70 mb-10">
                            <li>• Cèdre sculpté main</li>
                            <li>• Noyer massif</li>
                            <li>• Marqueterie fine</li>
                        </ul>
                        <LuxuryButton
                            variant="primary"
                            className="!bg-[#d4a373] !text-[#2c1810] hover:!bg-[#ede0d4]"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Commander une Pièce
                        </LuxuryButton>
                    </div>

                    {/* Dynamic Projects */}
                    {woodProjects.slice(0, 5).map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative h-[400px] overflow-hidden border border-[#d4a373]/10 ${idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <img
                                src={project.coverImage}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                {/* Add to Moodboard Button */}
                                <div className="absolute top-4 right-4 z-10">
                                    <AddToMoodboardButton
                                        item={{
                                            id: project.id,
                                            url: project.coverImage,
                                            title: project.title,
                                            category: 'wood_meubles'
                                        }}
                                        size={28}
                                    />
                                </div>

                                <h4 className="font-royal text-2xl text-[#d4a373] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {project.title}
                                </h4>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-2 text-sm uppercase tracking-widest text-[#ede0d4]">
                                    Voir Plus <ChevronRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {woodProjects.length === 0 && (
                        <>
                            {/* Fallbacks if no data */}
                            <div className="group relative h-[400px] overflow-hidden border border-[#d4a373]/10">
                                <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <span className="font-royal text-xl text-[#d4a373] uppercase tracking-widest">Tables</span>
                                </div>
                            </div>
                            <div className="group relative h-[400px] overflow-hidden border border-[#d4a373]/10">
                                <img src="https://images.unsplash.com/photo-1595188882386-213c72625906?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <span className="font-royal text-xl text-[#d4a373] uppercase tracking-widest">Bibliothèques</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WoodSection;
