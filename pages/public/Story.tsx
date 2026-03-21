import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import CustomCursor from '../../components/CustomCursor';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
};

const Story: React.FC = () => {
    const milestones = [
        {
            year: '1985',
            title: 'Les Débuts',
            text: 'Hamid Filali prend son premier fil et son aiguille, inspiré par le métier de son frère. Un petit atelier à Casablanca devient le berceau d\'une vie dédiée à la tapisserie.',
        },
        {
            year: '1990s',
            title: 'Un Nom Se Construit',
            text: 'La réputation se propage. Les salons marocains, canapés capitonnés et rideaux sur mesure d\'Hamid forgent une notoriété que nulle publicité ne pourrait acheter — le bouche-à-oreille.',
        },
        {
            year: '2000s',
            title: 'Des Maisons aux Villas',
            text: 'L\'atelier grandit. Les projets s\'élargissent des appartements familiaux aux villas de luxe, restaurants et espaces commerciaux — toujours à Casablanca, toujours avec la même exigence du détail.',
        },
        {
            year: '2010s',
            title: 'Au-delà de la Ville',
            text: 'Des clients hors de Casablanca commencent à appeler. Filali Design se déplace pour livrer un travail de qualité partout au Maroc, portant les standards de l\'atelier jusqu\'au bout de la commande.',
        },
        {
            year: 'Aujourd\'hui',
            title: 'La Deuxième Génération',
            text: 'Les enfants d\'Hamid prennent le relais — amenant le métier en ligne, construisant la marque et ouvrant les portes de l\'atelier à des clients du monde entier. La mission : l\'artisanat marocain premium, livré à tous.',
        },
    ];

    return (
        <div className="bg-[#FAF9F6] min-h-screen cursor-none text-riad-brown">
            <SEO titleKey="seo.story.title" descriptionKey="seo.story.description" />
            <CustomCursor />
            <Navbar />

            <main className="pt-32 pb-20 overflow-x-hidden">

                {/* ── HERO ── */}
                <section className="relative py-24 bg-riad-blue overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23c9a96e%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-arabic text-7xl text-riad-gold-light mb-4"
                        >
                            حكايتنا
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-royal text-5xl md:text-7xl text-riad-white uppercase tracking-[0.25em] mb-6"
                        >
                            Notre Histoire
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="font-elegant text-xl text-riad-gold-light italic max-w-2xl mx-auto"
                        >
                            Plus de 35 ans d'artisanat. Une famille. Une ville. Une passion.
                        </motion.p>
                    </div>
                </section>

                {/* ── FOUNDER ── */}
                <section className="py-28 bg-[#FAF9F6]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-16 items-center">

                            {/* Text */}
                            <div className="space-y-8">
                                <motion.div {...fadeUp}>
                                    <span className="font-royal text-xs tracking-[0.3em] uppercase text-riad-gold">Le Fondateur</span>
                                    <h2 className="font-royal text-4xl md:text-5xl text-riad-brown mt-2 mb-6 leading-tight">
                                        Un artisan né<br />de l'inspiration
                                    </h2>
                                </motion.div>
                                <motion.p {...fadeUp} className="font-elegant text-xl text-riad-brown/80 leading-loose">
                                    Hamid Filali a grandi entouré des sons et des odeurs d'un atelier en activité — sciure, vernis et le rythme régulier du fil de tapisserie. Sa famille était une famille d'artisans : menuisiers, charpentiers, peintres, décorateurs.
                                </motion.p>
                                <motion.p {...fadeUp} className="font-elegant text-xl text-riad-brown/80 leading-loose">
                                    C'est en observant son frère travailler qu'une flamme s'est allumée en Hamid. Il a vu dans la tapisserie non pas un simple métier, mais une forme d'art — la capacité de transformer une matière brute en quelque chose autour duquel une famille se réunit pour des générations.
                                </motion.p>
                                <motion.blockquote
                                    {...fadeUp}
                                    className="border-l-4 border-riad-gold pl-8 italic text-riad-brown/70 font-elegant text-xl leading-loose"
                                >
                                    « Je n'ai pas choisi ce métier. Ce métier m'a choisi — à travers les mains de mon frère et le savoir de ma famille. »
                                    <footer className="mt-3 text-sm not-italic text-riad-gold font-royal tracking-wider">— Hamid Filali</footer>
                                </motion.blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TIMELINE ── */}
                <section className="py-28 bg-[#FAF9F6]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-20">
                            <motion.div {...fadeUp} className="font-arabic text-5xl text-riad-gold mb-2">المسيرة</motion.div>
                            <motion.h2 {...fadeUp} className="font-royal text-4xl uppercase tracking-[0.2em] text-riad-brown">Le Parcours</motion.h2>
                            <div className="w-16 h-[1px] bg-riad-gold mx-auto mt-6" />
                        </div>

                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-riad-gold/20 -translate-x-1/2" />

                            <div className="space-y-16">
                                {milestones.map((m, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        className={`relative flex items-start gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    >
                                        {/* Year bubble */}
                                        <div className="relative z-10 flex-shrink-0 md:w-1/2 flex md:justify-center">
                                            <div className="flex items-center gap-4 md:gap-0">
                                                <div className="w-16 h-16 rounded-full border-2 border-riad-gold bg-[#FAF9F6] flex items-center justify-center flex-shrink-0">
                                                    <span className="font-royal text-xs text-riad-gold tracking-wider text-center leading-tight">{m.year}</span>
                                                </div>
                                                {/* Mobile text */}
                                                <div className="md:hidden pl-4">
                                                    <h3 className="font-royal text-xl uppercase tracking-wider text-riad-brown mb-2">{m.title}</h3>
                                                    <p className="font-elegant text-riad-brown/70 text-base leading-relaxed">{m.text}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop text */}
                                        <div className={`hidden md:block md:w-1/2 ${idx % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                                            <h3 className="font-royal text-2xl uppercase tracking-wider text-riad-brown mb-3">{m.title}</h3>
                                            <p className="font-elegant text-riad-brown/70 text-lg leading-relaxed">{m.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SECOND GENERATION ── */}
                <section className="py-28 bg-riad-blue text-riad-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-riad-blue via-riad-blue to-black/40" />
                    <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                        <motion.div {...fadeUp} className="font-arabic text-6xl text-riad-gold-light mb-4">الجيل الجديد</motion.div>
                        <motion.h2 {...fadeUp} className="font-royal text-4xl md:text-5xl uppercase tracking-[0.2em] mb-8">
                            La Deuxième Génération
                        </motion.h2>
                        <motion.p {...fadeUp} className="font-elegant text-xl text-riad-white/80 leading-loose max-w-3xl mx-auto mb-8">
                            Aujourd'hui, les enfants d'Hamid portent le flambeau — amenant 35 ans d'artisanat casablancais à l'ère numérique. L'atelier est le même. L'obsession de la qualité est la même. Mais désormais, les portes sont ouvertes sur le monde.
                        </motion.p>
                        <motion.p {...fadeUp} className="font-elegant text-xl text-riad-white/80 leading-loose max-w-3xl mx-auto mb-14">
                            Depuis un petit atelier à Casablanca, nous travaillons avec des clients partout au Maroc et au-delà — appartements, villas privées, restaurants. La mission de la deuxième génération : valoriser cet héritage et offrir des expériences premium au plus grand nombre.
                        </motion.p>

                        <motion.div
                            {...fadeUp}
                            className="grid md:grid-cols-3 gap-8 text-center"
                        >
                            {[
                                { number: '35+', label: 'Ans d\'Artisanat' },
                                { number: '500+', label: 'Projets Réalisés' },
                                { number: '2', label: 'Générations' },
                            ].map((stat, idx) => (
                                <div key={idx} className="p-8 border border-riad-gold/20 hover:border-riad-gold transition-colors">
                                    <div className="font-royal text-5xl text-riad-gold mb-2">{stat.number}</div>
                                    <div className="font-elegant text-riad-white/60 text-sm tracking-widest uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── CASABLANCA ── */}
                <section className="py-24 bg-[#FAF9F6]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div {...fadeUp}>
                                <span className="font-royal text-xs tracking-[0.3em] uppercase text-riad-gold">Où Nous Travaillons</span>
                                <h2 className="font-royal text-4xl text-riad-brown mt-2 mb-6">Enracinés à<br />Casablanca</h2>
                                <p className="font-elegant text-xl text-riad-brown/80 leading-loose mb-6">
                                    Notre atelier est un petit workshop au cœur de Casablanca — la ville qui nous a forgés. Chaque pièce que nous créons porte quelque chose de son caractère : audacieux, raffiné, construit pour durer.
                                </p>
                                <p className="font-elegant text-xl text-riad-brown/80 leading-loose">
                                    Nous intervenons chez des clients à l'intérieur et à l'extérieur de la ville — appartements, villas privées, restaurants et espaces hôteliers — toujours sur site, toujours les mains dans la matière.
                                </p>
                            </motion.div>
                            <motion.div
                                {...fadeUp}
                                className="relative"
                            >
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-riad-gold/30" />
                                <div className="relative bg-gradient-to-br from-[#261a14] to-[#1a1009] p-12 text-center shadow-2xl">
                                    <div className="font-arabic text-6xl text-riad-gold mb-4">الدار البيضاء</div>
                                    <p className="font-royal text-2xl text-riad-white tracking-[0.3em] uppercase mb-2">Casablanca</p>
                                    <div className="w-12 h-[1px] bg-riad-gold mx-auto my-4" />
                                    <p className="font-elegant text-riad-white/60 text-sm">Notre Maison. Notre Atelier. Notre Ville.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Story;
