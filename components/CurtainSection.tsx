import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LuxuryButton from './LuxuryButton';
import { ChevronRight } from 'lucide-react';
import { useProject } from '../context/ProjectContext';

const CurtainSection: React.FC = () => {
    const { albums } = useProject();
    const blindTypes = albums.filter(album => album.category === 'curtains');

    // Need to handle the background/categories images. 
    // Ideally these should be editable too, but for now we'll keep them static or fallback to the first couple of items.
    const curtainImages = {
        background: "https://reilly-chanceliving.com/cdn/shop/products/Velvet_panels_with_beads-velvet_drapes-dining_room_draperies-living_room_draperies-bedroom_curtains-reilly_chance.jpg?v=1757013524&width=1946",
        categories: {
            rideaux: "https://i.etsystatic.com/27498942/r/il/499be0/3677062599/il_fullxfull.3677062599_ietw.jpg",
            passementerie: "https://i.etsystatic.com/9711820/r/il/f53125/4960809090/il_570xN.4960809090_q6tl.jpg"
        }
    };

    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} id="curtains" className="py-32 bg-riad-blue text-riad-white relative overflow-hidden">

            {/* Background Image Parallax effect */}
            <div className="absolute inset-0 z-0 opacity-20 h-[120%] -top-[10%] pointer-events-none">
                <motion.div style={{ y: bgY }} className="w-full h-full">
                    <img
                        src={curtainImages.background}
                        alt="Texture tissu"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-riad-blue/50 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10 px-6">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-arabic text-7xl md:text-9xl text-riad-gold-light mb-4 leading-normal"
                    >
                        الستائر
                    </motion.div>
                    <h2 className="font-royal text-5xl md:text-7xl uppercase tracking-[0.3em] mb-8 font-light">
                        Habillage de Fenêtre
                    </h2>
                    <p className="font-elegant text-2xl md:text-3xl opacity-85 max-w-3xl mx-auto leading-loose font-light">
                        La touche finale qui sublime l'architecture. Une collection de tissus nobles et de mécanismes techniques pour sculpter la lumière.
                    </p>
                </div>

                {/* MAIN CATEGORIES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    {/* Card 1: Rideaux Couture */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative h-[600px] overflow-hidden border border-riad-gold/20 cursor-pointer"
                    >
                        <img
                            src={curtainImages.categories.rideaux}
                            alt="Rideaux Double Rideaux"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
                            <h3 className="font-royal text-3xl tracking-widest text-riad-gold-light mb-4 uppercase font-light">Rideaux Couture</h3>
                            <p className="font-elegant text-xl text-riad-white/90 leading-relaxed font-light mb-6">Double rideaux, velours lourds et voilages aériens pour une isolation thermique et une esthétique théâtrale.</p>
                            <div className="flex items-center gap-2 text-riad-gold text-sm font-royal tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                                Explorer <ChevronRight size={16} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Passementerie & Accessoires */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative h-[600px] overflow-hidden border border-riad-gold/20 cursor-pointer"
                    >
                        <img
                            src={curtainImages.categories.passementerie}
                            alt="Accessoires"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
                            <h3 className="font-royal text-3xl tracking-widest text-riad-gold-light mb-4 uppercase font-light">Passementerie</h3>
                            <p className="font-elegant text-xl text-riad-white/90 leading-relaxed font-light mb-6">Embrasses ciselées, pompons de soie et tringles décoratives en laiton ou fer forgé pour la finition parfaite.</p>
                            <div className="flex items-center gap-2 text-riad-gold text-sm font-royal tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                                Voir les détails <ChevronRight size={16} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* BLINDS HORIZONTAL SCROLL SECTION */}
                <div className="relative">
                    <div className="flex items-end justify-between mb-10 px-2 border-b border-riad-gold/20 pb-4">
                        <div>
                            <h3 className="font-royal text-2xl md:text-4xl text-riad-white uppercase tracking-widest font-light">
                                Collection Stores
                            </h3>
                            <p className="font-elegant text-riad-gold-light italic mt-2 text-lg">
                                Technicité & Modernité
                            </p>
                        </div>
                        <div className="hidden md:flex gap-2 text-riad-gold/50 text-sm font-royal uppercase tracking-widest">
                            <span>Glisser</span> <ChevronRight />
                        </div>
                    </div>

                    <div className="overflow-x-auto pb-12 hide-scrollbar">
                        <div className="flex gap-8 w-max px-2">
                            {blindTypes.map((blind, idx) => (
                                <motion.div
                                    key={blind.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="w-[300px] md:w-[350px] group flex-shrink-0"
                                >
                                    <div className="h-[250px] overflow-hidden mb-6 border border-riad-gold/10 relative">
                                        <div className="absolute inset-0 bg-riad-blue/20 group-hover:bg-transparent transition-colors z-10" />
                                        <img
                                            src={blind.coverImage}
                                            alt={blind.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <h4 className="font-royal text-xl text-riad-gold-light uppercase tracking-wider mb-1">
                                        {blind.title}
                                    </h4>
                                    <div className="text-xs font-royal text-riad-white/40 uppercase tracking-widest mb-3">
                                        {blind.category}
                                    </div>
                                    <p className="font-elegant text-riad-white/70 text-lg leading-relaxed border-l border-riad-gold/30 pl-4 line-clamp-3">
                                        {blind.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <LuxuryButton
                        variant="outline"
                        className="!border-riad-gold-light !text-riad-gold-light hover:!bg-riad-gold-light hover:!text-riad-blue px-12 py-4"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Configurer mes Fenêtres
                    </LuxuryButton>
                </div>

            </div>
        </section>
    );
};

export default CurtainSection;