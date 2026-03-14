import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LuxuryButton from './LuxuryButton';
import { useProject } from '../context/ProjectContext';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AddToMoodboardButton from './AddToMoodboardButton';

const CuisinesSection: React.FC = () => {
    const { t } = useTranslation();
    const { albums } = useProject();
    const cuisineProjects = albums.filter(a => a.category === 'cuisines');

    // Grid Card Images
    const cuisineImages = {
        modern: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
        luxury: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    };

    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} id="cuisines" className="py-32 bg-gray-900 text-white relative overflow-hidden">

            {/* Background Texture similar to CurtainSection */}
            <div className="absolute inset-0 z-0 opacity-10 h-[120%] -top-[10%] pointer-events-none">
                <motion.div style={{ y: bgY }} className="w-full h-full">
                    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
                </motion.div>
                <div className="absolute inset-0 bg-gray-900/50"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-arabic text-7xl md:text-9xl text-riad-gold mb-4 leading-normal"
                    >
                        {t('collections.cuisines.arabic_title')}
                    </motion.div>
                    <h2 className={`font-royal text-5xl md:text-7xl uppercase tracking-[0.3em] mb-8 font-light`}>
                        {t('collections.cuisines.title')}
                    </h2>
                    <p className={`font-elegant text-2xl md:text-3xl opacity-85 max-w-3xl mx-auto leading-loose font-light`} >
                        {t('collections.cuisines.desc')}
                    </p>
                </div>

                {/* MAIN CATEGORIES GRID (Similar to CurtainSection) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    {/* Card 1: Modernes */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative h-[600px] overflow-hidden border border-riad-gold/20 cursor-pointer"
                    >
                        <img
                            src={cuisineImages.modern}
                            alt="Cuisines Modernes"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
                            <h3 className="font-royal text-3xl tracking-widest text-riad-gold-light mb-4 uppercase font-light">
                                {t('collections.cuisines.subtitle')} {/* "Modernes" */}
                            </h3>
                            <ul className="font-elegant text-xl text-riad-white/90 leading-relaxed font-light mb-6 space-y-2">
                                <li>• {t('collections.cuisines.list1')}</li>
                                <li>• {t('collections.cuisines.list2')}</li>
                            </ul>
                            <div className="flex items-center gap-2 text-riad-gold text-sm font-royal tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                                {t('collections.cuisines.card_explore') || "Explorer"} <ChevronRight size={16} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Luxury/Bespoke */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative h-[600px] overflow-hidden border border-riad-gold/20 cursor-pointer"
                    >
                        <img
                            src={cuisineImages.luxury}
                            alt="Cuisines Luxe"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
                            <h3 className="font-royal text-3xl tracking-widest text-riad-gold-light mb-4 uppercase font-light">
                                {t('collections.cuisines.bespoke_title') || "Sur Mesure"}
                            </h3>
                            <p className="font-elegant text-xl text-riad-white/90 leading-relaxed font-light mb-6">
                                {t('collections.cuisines.list3')}
                            </p>
                            <div className="flex items-center gap-2 text-riad-gold text-sm font-royal tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                                {t('collections.cuisines.card_details') || "Voir les détails"} <ChevronRight size={16} />
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* Horizontal Scroll for Projects */}
                {cuisineProjects.length > 0 && (
                    <div className="relative">
                        <div className="flex justify-between items-end mb-10 border-b border-gray-800 pb-4">
                            <div>
                                <h3 className={`font-royal text-2xl md:text-4xl text-gray-400 uppercase tracking-widest font-light`}>
                                    {t('collections.cuisines.latest')}
                                </h3>
                                <p className="font-elegant text-riad-gold italic mt-2 text-lg">
                                    Inspirations
                                </p>
                            </div>
                            <div className="flex gap-2 text-riad-gold text-sm tracking-widest uppercase">
                                {t('collections.cuisines.swipe')} <ChevronRight size={16} />
                            </div>
                        </div>

                        <div className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar">
                            {cuisineProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="min-w-[300px] md:min-w-[400px] group cursor-pointer"
                                >
                                    <div className="h-[250px] overflow-hidden mb-4 relative border border-gray-800">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />

                                        {/* Add to Moodboard Button */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <AddToMoodboardButton
                                                item={{
                                                    id: project.id,
                                                    url: project.coverImage,
                                                    title: project.title,
                                                    category: 'cuisines'
                                                }}
                                                size={24}
                                            />
                                        </div>

                                        <img
                                            src={project.coverImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <h4 className="font-royal text-xl text-white mb-1 group-hover:text-riad-gold transition-colors">{project.title}</h4>
                                    <p className="font-elegant text-gray-500 line-clamp-2">{project.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-12 text-center">
                    <LuxuryButton
                        variant="outline"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="!border-gray-500 !text-gray-300 hover:!border-riad-gold hover:!text-riad-gold px-12 py-4"
                    >
                        {t('collections.cuisines.cta')}
                    </LuxuryButton>
                </div>

            </div>
        </section>
    );
};

export default CuisinesSection;
