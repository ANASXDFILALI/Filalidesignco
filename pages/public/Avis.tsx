import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';
import { SITE_URL } from '../../lib/constants';

// ── Schema ──────────────────────────────────────────────────────────────────
const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Filali Design Co.',
    '@id': 'https://filalidesignco.space',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '47',
        bestRating: '5',
        worstRating: '1',
    },
    review: [
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Youssef Benali' },
            reviewRating: { '@type': 'Rating', ratingValue: '5' },
            reviewBody:
                'La rénovation de notre lobby a été métamorphosée par l\'expertise de Filali. Une fusion parfaite entre l\'âme traditionnelle marocaine et une élégance contemporaine absolue.',
        },
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Jean-Pierre L.' },
            reviewRating: { '@type': 'Rating', ratingValue: '5' },
            reviewBody:
                'Redonner vie à ce Riad historique demandait une sensibilité unique. Le travail du bois de cèdre et des tissus brodés main est tout simplement exceptionnel.',
        },
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Sarah B.' },
            reviewRating: { '@type': 'Rating', ratingValue: '5' },
            reviewBody:
                'J\'ai trouvé chez Filali Design une écoute rare. Mes pièces de collection sont sublimées par leur travail sur mesure.',
        },
    ],
};

// ── Data ─────────────────────────────────────────────────────────────────────
interface Review {
    author: string;
    service: string;
    city: string;
    body: string;
}

const reviews: Review[] = [
    {
        author: 'Youssef Benali',
        service: 'Salon Marocain',
        city: 'Casablanca',
        body: 'La rénovation de notre lobby a été métamorphosée par l\'expertise de Filali. Une fusion parfaite entre l\'âme traditionnelle marocaine et une élégance contemporaine absolue. Résultat au-delà de toutes nos attentes.',
    },
    {
        author: 'Jean-Pierre L.',
        service: 'Rénovation Riad',
        city: 'Marrakech',
        body: 'Redonner vie à ce Riad historique demandait une sensibilité unique. Le travail du bois de cèdre et des tissus brodés main est tout simplement exceptionnel. Un savoir-faire authentique, transmis avec passion.',
    },
    {
        author: 'Sarah B.',
        service: 'Sur Mesure',
        city: 'Casablanca',
        body: 'J\'ai trouvé chez Filali Design une écoute rare et un sens du détail remarquable. Mes pièces de collection sont sublimées par leur travail sur mesure. Je les recommande sans la moindre hésitation.',
    },
    {
        author: 'Fatima K.',
        service: 'Rideaux Sur Mesure',
        city: 'Rabat',
        body: 'Des rideaux magnifiques en velours bordeaux, confectionnés en 10 jours. La qualité de finition est irréprochable. Je recommande vivement.',
    },
    {
        author: 'Mohammed A.',
        service: 'Salon Marocain',
        city: 'Marrakech',
        body: 'Salon marocain traditionnel réalisé pour notre riad. Le bois de cèdre sculpté et les broderies sont d\'une qualité exceptionnelle. Artisans passionnés.',
    },
    {
        author: 'Leila M.',
        service: 'Rénovation Canapé',
        city: 'Casablanca',
        body: 'Rénovation complète de notre salon : canapés retapissés en velours bleu roi, capitonnage parfait. Service rapide et professionnel à domicile.',
    },
    {
        author: 'Karim D.',
        service: 'Cuisine Moderne',
        city: 'Casablanca',
        body: 'Cuisine sur mesure installée dans notre appartement à Anfa. Design épuré, bois de haute qualité et respect des délais. Excellent rapport qualité-prix.',
    },
    {
        author: 'Nadia R.',
        service: 'Salon Marocain',
        city: 'Fès',
        body: 'J\'ai commandé un salon marocain pour ma villa à Fès. Les artisans se sont déplacés pour les mesures. Résultat somptueux, fidèle à la tradition fassi.',
    },
];

// ── Sub-components ────────────────────────────────────────────────────────────
const Stars: React.FC = () => (
    <span className="text-riad-gold text-xl" aria-label="5 étoiles">
        ★★★★★
    </span>
);

interface ReviewCardProps {
    review: Review;
    index: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        className="bg-riad-blue border border-riad-gold/20 p-8 flex flex-col gap-5 hover:border-riad-gold/50 transition-colors duration-500"
    >
        {/* Stars */}
        <Stars />

        {/* Body */}
        <p className="font-elegant text-riad-white/80 text-lg leading-relaxed flex-1 italic">
            &ldquo;{review.body}&rdquo;
        </p>

        {/* Author + badges */}
        <div className="pt-4 border-t border-riad-gold/15 space-y-3">
            <p className="font-royal text-riad-gold tracking-wide text-sm uppercase">
                {review.author}
            </p>
            <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 border border-riad-gold/40 text-riad-gold font-royal text-xs uppercase tracking-widest">
                    {review.service}
                </span>
                <span className="inline-block px-3 py-1 bg-riad-gold/10 text-riad-gold-light font-elegant text-xs tracking-wider">
                    {review.city}
                </span>
            </div>
        </div>
    </motion.div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const Avis: React.FC = () => {
    return (
        <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
            {/* ── SEO ── */}
            <Helmet>
                <title>Avis Clients | 5★ — Filali Design Co. Casablanca</title>
                <meta
                    name="description"
                    content="47 clients satisfaits — Lisez les avis sur Filali Design Co. à Casablanca. Salon marocain sur mesure, tapisserie et rideaux. Note moyenne : 5/5 étoiles."
                />
                <meta
                    name="keywords"
                    content="avis filali design, avis tapissier casablanca, témoignages salon marocain, note artisan casablanca"
                />
                <link rel="canonical" href={`${SITE_URL}/avis`} />
                {/* Open Graph */}
                <meta property="og:title" content="Avis Clients | 5★ — Filali Design Co. Casablanca" />
                <meta
                    property="og:description"
                    content="47 clients satisfaits — Note moyenne 5/5 étoiles. Lisez les témoignages sur notre artisanat marocain de luxe."
                />
                <meta property="og:url" content={`${SITE_URL}/avis`} />
                <meta property="og:type" content="website" />
                {/* Schema */}
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
            </Helmet>

            <CustomCursor />
            <Navbar />

            <main className="pt-32 pb-24 overflow-x-hidden">

                {/* ── HERO ── */}
                <section className="relative py-28 bg-riad-blue overflow-hidden">
                    {/* Decorative trellis background */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23c9a96e%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

                    <div className="container mx-auto px-6 text-center relative z-10">
                        {/* Arabic decorative */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-arabic text-6xl text-riad-gold-light mb-4"
                            aria-hidden="true"
                        >
                            آراء عملائنا
                        </motion.div>

                        {/* H1 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-royal text-5xl md:text-7xl text-riad-white uppercase tracking-[0.25em] mb-6"
                        >
                            Avis & Témoignages
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            className="font-elegant text-xl text-riad-gold-light italic max-w-xl mx-auto mb-8"
                        >
                            Ce que disent nos clients
                        </motion.p>

                        {/* Star display */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="text-riad-gold text-4xl tracking-widest"
                            aria-label="5 étoiles"
                        >
                            ★★★★★
                        </motion.div>
                    </div>
                </section>

                {/* ── NOTE GLOBALE ── */}
                <section className="py-20 bg-riad-blue border-y border-riad-gold/20">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="space-y-6"
                        >
                            <span className="font-royal text-xs tracking-[0.35em] uppercase text-riad-gold">
                                Note Globale
                            </span>

                            {/* Large rating */}
                            <div className="flex items-end justify-center gap-4">
                                <span className="font-royal text-8xl md:text-9xl text-riad-gold leading-none">
                                    5.0
                                </span>
                                <span className="font-royal text-3xl text-riad-white/50 pb-4">
                                    / 5
                                </span>
                            </div>

                            {/* Stars row */}
                            <div className="text-riad-gold text-5xl tracking-widest" aria-label="5 étoiles sur 5">
                                ★★★★★
                            </div>

                            {/* Subtext */}
                            <p className="font-elegant text-xl text-riad-white/70">
                                Basé sur{' '}
                                <strong className="text-riad-white font-royal">47 avis clients</strong>
                            </p>

                            {/* Divider + since */}
                            <div className="flex items-center justify-center gap-4 pt-2">
                                <div className="h-[1px] w-16 bg-riad-gold/30" />
                                <span className="font-royal text-xs text-riad-gold tracking-[0.3em] uppercase">
                                    Depuis 1985
                                </span>
                                <div className="h-[1px] w-16 bg-riad-gold/30" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── REVIEWS GRID ── */}
                <section className="py-24 bg-riad-blue">
                    <div className="container mx-auto px-6 max-w-7xl">
                        {/* Section header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-16"
                        >
                            <span className="font-royal text-xs tracking-[0.35em] uppercase text-riad-gold">
                                Témoignages
                            </span>
                            <h2 className="font-royal text-4xl md:text-5xl text-riad-white uppercase tracking-[0.2em] mt-3 mb-4">
                                Ils Nous Font Confiance
                            </h2>
                            <div className="w-16 h-[1px] bg-riad-gold mx-auto" />
                        </motion.div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reviews.map((review, idx) => (
                                <ReviewCard key={idx} review={review} index={idx} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── DÉPOSEZ VOTRE AVIS ── */}
                <section className="py-20 bg-riad-blue border-t border-riad-gold/20">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="space-y-8"
                        >
                            {/* Arabic */}
                            <div className="font-arabic text-4xl text-riad-gold-light" aria-hidden="true">
                                شاركنا رأيك
                            </div>

                            <h2 className="font-royal text-3xl md:text-4xl text-riad-white uppercase tracking-[0.2em]">
                                Déposez Votre Avis
                            </h2>

                            <p className="font-elegant text-xl text-riad-white/70 leading-relaxed max-w-xl mx-auto">
                                Votre expérience compte. Aidez d'autres clients à nous découvrir en
                                partageant votre avis sur Google My Business.
                            </p>

                            {/* GMB link box */}
                            <div className="border border-riad-gold/30 p-8 bg-riad-gold/5 space-y-6">
                                <div className="font-royal text-riad-gold text-xl tracking-wide">
                                    ★ Partagez votre expérience sur Google
                                </div>
                                <p className="font-elegant text-riad-white/60 text-base">
                                    Vos retours nous aident à améliorer nos services et à
                                    valoriser l'artisanat marocain auprès du plus grand nombre.
                                </p>
                                <a
                                    href="#"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="inline-block px-8 py-4 border border-riad-gold text-riad-gold font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold hover:text-riad-blue transition-all duration-500"
                                >
                                    Laisser un Avis Google
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-24 bg-riad-blue border-t border-riad-gold/20">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="space-y-8 max-w-2xl mx-auto"
                        >
                            {/* Stars decoration */}
                            <div className="text-riad-gold text-2xl tracking-widest" aria-hidden="true">
                                ★★★★★
                            </div>

                            <h2 className="font-royal text-3xl md:text-5xl text-riad-white uppercase tracking-[0.15em] leading-tight">
                                Rejoignez Nos Clients Satisfaits
                            </h2>

                            <p className="font-elegant text-xl text-riad-white/70 leading-relaxed">
                                47 familles et établissements nous font confiance depuis 1985.
                                Demandez un devis gratuit et sans engagement pour votre projet.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-block px-8 py-4 bg-riad-gold text-riad-blue font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold-light transition-all duration-500"
                            >
                                Demandez un Devis Gratuit
                            </Link>
                        </motion.div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Avis;
