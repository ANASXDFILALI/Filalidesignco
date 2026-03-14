import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LuxuryButton from './LuxuryButton';
import { ChevronRight } from 'lucide-react';
import { useProject } from '../context/ProjectContext';

const BedSection: React.FC = () => {
    const { albums } = useProject();
    const bedModels = albums.filter(album => album.category === 'beds');

    // Fallback for featured images from the first two albums if available
    const bedFeatured = {
        image1: bedModels[0]?.coverImage || 'https://www.roomservice360.com/media/catalog/product/cache/0a335442a5078be48cc73277f5c02d7b/f/i/filo-bed-qs-01.jpg',
        image2: bedModels[1]?.coverImage || 'https://m.media-amazon.com/images/I/81XlfxmW6cL.jpg'
    };

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
        <section ref={containerRef} id="beds" className="py-32 px-6 bg-[#F5F2EB] text-riad-brown relative overflow-hidden">

            {/* Soft Texture Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b89446' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* UPPER SPLIT SECTION */}
                <div className="flex flex-col-reverse lg:flex-row gap-20 items-center mb-32">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative h-[700px]">
                        <motion.div
                            style={{ y: y1 }}
                            className="absolute top-0 left-0 w-3/4 h-3/4 z-10 overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <img
                                src={bedFeatured.image1}
                                alt="Tête de lit sur mesure"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute bottom-0 right-0 w-3/4 h-3/4 z-20 overflow-hidden shadow-2xl border-4 border-riad-gold/20"
                        >
                            <img
                                src={bedFeatured.image2}
                                alt="Détail literie luxe"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        {/* Decorative circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-riad-gold rounded-full opacity-30 z-0"></div>
                    </div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 lg:pl-16"
                    >
                        <div className="font-arabic text-7xl md:text-8xl text-riad-gold mb-4">
                            غرف النوم
                        </div >
                        <h2 className="font-royal text-5xl md:text-7xl uppercase tracking-[0.25em] text-riad-brown mb-8 font-light">
                            L'Art du Repos
                        </h2>
                        <div className="w-24 h-[2px] bg-riad-brown mb-10"></div>

                        <h3 className="font-elegant text-3xl md:text-4xl text-riad-red italic mb-8 font-light">Têtes de Lit Sur Mesure & Literie Haute Couture</h3>

                        <p className="font-elegant text-2xl text-riad-brown/85 leading-loose mb-8 font-light">
                            Transformez votre chambre en une suite de palace. Nous concevons des lits majestueux, avec des têtes de lit monumentales qui structurent l'espace.
                        </p>

                        <ul className="space-y-6 mb-12 font-elegant text-xl text-riad-brown/75">
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-riad-gold rounded-full"></span>
                                Capitonnage fait main (tissus, cuir, daim)
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-riad-gold rounded-full"></span>
                                Encadrements en bois noble ou laiton brossé
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-riad-gold rounded-full"></span>
                                Sommiers tapissiers renforcés
                            </li>
                        </ul>

                        <LuxuryButton
                            variant="primary"
                            className="!bg-riad-brown !text-riad-white hover:!bg-riad-red"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Concevoir Votre Chambre
                        </LuxuryButton>
                    </motion.div>
                </div>

                {/* HORIZONTAL COLLECTION SCROLL */}
                <div className="border-t border-riad-brown/10 pt-16">
                    <div className="flex items-end justify-between mb-10 px-2">
                        <div>
                            <h3 className="font-royal text-2xl md:text-4xl text-riad-brown uppercase tracking-widest font-light">
                                Collection Lits & Têtes de Lit
                            </h3>
                            <p className="font-elegant text-riad-red italic mt-2 text-lg">
                                Styles & Inspirations
                            </p>
                        </div>
                        <div className="hidden md:flex gap-2 text-riad-brown/50 text-sm font-royal uppercase tracking-widest">
                            <span>Glisser</span> <ChevronRight />
                        </div>
                    </div>

                    <div className="overflow-x-auto pb-12 hide-scrollbar">
                        <div className="flex gap-8 w-max px-2">
                            {bedModels.map((model, idx) => (
                                <motion.div
                                    key={model.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="w-[300px] md:w-[350px] group flex-shrink-0"
                                >
                                    <div className="h-[250px] overflow-hidden mb-6 border border-riad-brown/10 relative">
                                        <div className="absolute inset-0 bg-riad-gold/10 group-hover:bg-transparent transition-colors z-10" />
                                        <img
                                            src={model.coverImage}
                                            alt={model.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <h4 className="font-royal text-xl text-riad-brown uppercase tracking-wider mb-1">
                                        {model.title}
                                    </h4>
                                    {/* Replaced 'style' with category or static, or assume description holds it. Using Category for now */}
                                    <div className="text-xs font-royal text-riad-red uppercase tracking-widest mb-3">
                                        {model.category}
                                    </div>
                                    <p className="font-elegant text-riad-brown/70 text-lg leading-relaxed border-l border-riad-gold pl-4 line-clamp-3">
                                        {model.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BedSection;