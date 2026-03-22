import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';
import { SITE_URL } from '../../lib/constants';

// ── Schemas ──────────────────────────────────────────────────────────────────
const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Salon Marocain Sur Mesure — Filali Design Co.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Filali Design Co.',
        '@id': 'https://filalidesignco.space',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Casablanca',
            addressCountry: 'MA',
        },
    },
    areaServed: 'Casablanca',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '47',
        bestRating: '5',
        worstRating: '1',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'MAD',
        lowPrice: '600',
        highPrice: '100000',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Quel est le prix d\'un salon marocain sur mesure à Casablanca ?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Le prix d\'un salon marocain sur mesure à Casablanca varie selon la superficie et les matériaux. Comptez à partir de 8 000 MAD pour un petit salon (4m x 3m), entre 15 000 et 25 000 MAD pour un salon moyen (5m x 4m), et jusqu\'à 100 000 MAD pour les créations haut de gamme en cèdre sculpté et zellige.',
            },
        },
        {
            '@type': 'Question',
            name: 'Proposez-vous des facilités de paiement ?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Oui, nous proposons des facilités de paiement adaptées à votre projet. Un acompte de 30 % est demandé à la commande, le solde étant réglé à la livraison. Pour les projets importants, un échelonnement en 3 versements est possible. Contactez-nous pour un arrangement personnalisé.',
            },
        },
        {
            '@type': 'Question',
            name: 'Livraison et installation incluses dans le prix ?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'La livraison et la pose sont incluses dans nos tarifs pour tous les projets réalisés à Casablanca. Pour les autres villes du Maroc, des frais de déplacement peuvent s\'appliquer selon la distance et le volume du projet. Nous vous en informons systématiquement avant tout engagement.',
            },
        },
        {
            '@type': 'Question',
            name: 'Y a-t-il des frais de déplacement hors Casablanca ?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Des frais de déplacement s\'appliquent pour les interventions hors Casablanca. Ces frais varient selon la distance et sont toujours communiqués en toute transparence dans votre devis. Nous intervenons régulièrement à Rabat, Marrakech, Fès et dans les grandes villes du Maroc.',
            },
        },
    ],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: 'https://filalidesignco.space',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Prix & Tarifs',
            item: 'https://filalidesignco.space/prix-tarifs',
        },
    ],
};

// ── Data ─────────────────────────────────────────────────────────────────────
interface PriceRow {
    label: string;
    price: string;
    detail?: string;
}

interface PriceSection {
    id: string;
    title: string;
    arabicLabel: string;
    rows: PriceRow[];
}

const pricingSections: PriceSection[] = [
    {
        id: 'salon',
        title: 'Salon Marocain Sur Mesure',
        arabicLabel: 'الصالون المغربي',
        rows: [
            { label: 'Petit salon', detail: '4m × 3m', price: 'à partir de 8 000 MAD' },
            { label: 'Salon moyen', detail: '5m × 4m', price: '15 000 – 25 000 MAD' },
            { label: 'Grand salon', detail: '6m × 5m', price: '25 000 – 45 000 MAD' },
            { label: 'Haut de gamme', detail: 'Cèdre sculpté + zellige', price: '45 000 – 100 000 MAD' },
        ],
    },
    {
        id: 'tapisserie',
        title: 'Tapisserie & Rénovation',
        arabicLabel: 'التنجيد والتجديد',
        rows: [
            { label: 'Canapé 2 places', price: 'à partir de 1 200 MAD' },
            { label: 'Canapé 3 places', price: 'à partir de 1 800 MAD' },
            { label: 'Fauteuil', price: 'à partir de 600 MAD' },
            { label: 'Chaise', detail: 'par unité', price: '200 – 400 MAD' },
            { label: 'Banquette linéaire', detail: 'par mètre', price: '800 – 1 500 MAD' },
        ],
    },
    {
        id: 'rideaux',
        title: 'Rideaux Sur Mesure',
        arabicLabel: 'الستائر المخصصة',
        rows: [
            { label: 'Voilage', detail: 'par mètre', price: '150 – 300 MAD' },
            { label: 'Rideaux velours', detail: 'par mètre', price: '400 – 800 MAD' },
            { label: 'Rideaux en lin', detail: 'par mètre', price: '300 – 600 MAD' },
            { label: 'Pose incluse à Casablanca', price: 'Offerte' },
        ],
    },
    {
        id: 'cuisine',
        title: 'Cuisine Sur Mesure',
        arabicLabel: 'المطبخ المخصص',
        rows: [
            { label: 'Cuisine simple', detail: 'MDF laqué — 6m linéaires', price: 'à partir de 18 000 MAD' },
            { label: 'Cuisine bois massif', price: 'à partir de 35 000 MAD' },
            { label: 'Prix par mètre linéaire', price: '2 500 – 6 000 MAD' },
        ],
    },
];

const faqItems = [
    {
        question: 'Quel est le prix d\'un salon marocain sur mesure à Casablanca ?',
        answer: 'Le prix d\'un salon marocain sur mesure à Casablanca varie selon la superficie et les matériaux. Comptez à partir de 8 000 MAD pour un petit salon (4m x 3m), entre 15 000 et 25 000 MAD pour un salon moyen (5m x 4m), et jusqu\'à 100 000 MAD pour les créations haut de gamme en cèdre sculpté et zellige.',
    },
    {
        question: 'Proposez-vous des facilités de paiement ?',
        answer: 'Oui, nous proposons des facilités de paiement adaptées à votre projet. Un acompte de 30 % est demandé à la commande, le solde étant réglé à la livraison. Pour les projets importants, un échelonnement en 3 versements est possible. Contactez-nous pour un arrangement personnalisé.',
    },
    {
        question: 'Livraison et installation incluses dans le prix ?',
        answer: 'La livraison et la pose sont incluses dans nos tarifs pour tous les projets réalisés à Casablanca. Pour les autres villes du Maroc, des frais de déplacement peuvent s\'appliquer selon la distance et le volume du projet. Nous vous en informons systématiquement avant tout engagement.',
    },
    {
        question: 'Y a-t-il des frais de déplacement hors Casablanca ?',
        answer: 'Des frais de déplacement s\'appliquent pour les interventions hors Casablanca. Ces frais varient selon la distance et sont toujours communiqués en toute transparence dans votre devis. Nous intervenons régulièrement à Rabat, Marrakech, Fès et dans les grandes villes du Maroc.',
    },
];

// ── Sub-components ────────────────────────────────────────────────────────────
interface PriceCardProps {
    row: PriceRow;
    index: number;
}

const PriceCard: React.FC<PriceCardProps> = ({ row, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        className="grid grid-cols-2 items-center gap-4 bg-riad-blue border border-riad-gold/20 px-6 py-5 hover:border-riad-gold/50 transition-colors duration-500"
    >
        {/* Left — label + detail */}
        <div className="space-y-1">
            <p className="font-royal text-riad-white text-sm uppercase tracking-wider">
                {row.label}
            </p>
            {row.detail && (
                <p className="font-elegant text-riad-white/50 text-xs italic">
                    {row.detail}
                </p>
            )}
        </div>

        {/* Right — price */}
        <div className="text-right">
            <span
                className={`font-royal text-sm tracking-wide ${
                    row.price === 'Offerte'
                        ? 'text-riad-gold uppercase'
                        : 'text-riad-gold-light'
                }`}
            >
                {row.price}
            </span>
        </div>
    </motion.div>
);

interface AccordionItemProps {
    question: string;
    answer: string;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    question,
    answer,
    index,
    isOpen,
    onToggle,
}) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.09 }}
        className="border border-riad-gold/20 hover:border-riad-gold/40 transition-colors duration-500"
    >
        <button
            onClick={onToggle}
            aria-expanded={isOpen}
            className="w-full flex items-start justify-between gap-6 px-7 py-6 text-left cursor-none group"
        >
            <span className="font-royal text-riad-white text-sm md:text-base uppercase tracking-wider group-hover:text-riad-gold transition-colors duration-300">
                {question}
            </span>
            <span
                className={`flex-shrink-0 font-royal text-riad-gold text-xl leading-none transition-transform duration-400 ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                }`}
                aria-hidden="true"
            >
                +
            </span>
        </button>

        {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="px-7 pb-7"
            >
                <div className="h-[1px] w-full bg-riad-gold/15 mb-5" />
                <p className="font-elegant text-riad-white/70 text-base leading-relaxed">
                    {answer}
                </p>
            </motion.div>
        )}
    </motion.div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const PrixTarifs: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq((prev) => (prev === index ? null : index));
    };

    return (
        <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
            {/* ── SEO ── */}
            <Helmet>
                <title>Prix Salon Marocain Casablanca 2025 | Filali Design</title>
                <meta
                    name="description"
                    content="Découvrez nos prix pour salon marocain sur mesure à Casablanca. Tarifs tapisserie, rideaux et cuisine sur mesure. Fourchettes en MAD. Devis gratuit 24h."
                />
                <meta
                    name="keywords"
                    content="prix salon marocain casablanca, tarif tapisserie casablanca, prix rideaux sur mesure maroc, cuisine sur mesure prix casablanca, devis artisan casablanca"
                />
                <link rel="canonical" href={`${SITE_URL}/prix-tarifs`} />
                {/* Open Graph */}
                <meta property="og:title" content="Prix & Tarifs Salon Marocain Sur Mesure Casablanca 2025 | Filali Design Co." />
                <meta
                    property="og:description"
                    content="Découvrez nos prix pour salon marocain sur mesure à Casablanca. Tarifs tapisserie, rideaux et cuisine sur mesure. Devis gratuit sous 24h."
                />
                <meta property="og:url" content={`${SITE_URL}/prix-tarifs`} />
                <meta property="og:type" content="website" />
                {/* Schemas */}
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
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
                            الأسعار
                        </motion.div>

                        {/* H1 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-royal text-5xl md:text-7xl text-riad-white uppercase tracking-[0.25em] mb-6"
                        >
                            Prix & Tarifs 2025
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            className="font-elegant text-xl text-riad-gold-light italic max-w-xl mx-auto mb-8"
                        >
                            Fourchettes de prix transparentes — Devis gratuit sous 24h
                        </motion.p>

                        {/* Gold divider */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="w-16 h-[1px] bg-riad-gold mx-auto"
                        />
                    </div>
                </section>

                {/* ── PRICE SECTIONS ── */}
                {pricingSections.map((section, sectionIdx) => (
                    <section
                        key={section.id}
                        className={`py-20 bg-riad-blue ${sectionIdx !== 0 ? 'border-t border-riad-gold/20' : ''}`}
                    >
                        <div className="container mx-auto px-6 max-w-4xl">
                            {/* Section header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-center mb-12"
                            >
                                <div
                                    className="font-arabic text-4xl text-riad-gold-light mb-3"
                                    aria-hidden="true"
                                >
                                    {section.arabicLabel}
                                </div>
                                <h2 className="font-royal text-3xl md:text-4xl text-riad-white uppercase tracking-[0.2em] mb-4">
                                    {section.title}
                                </h2>
                                <div className="w-12 h-[1px] bg-riad-gold mx-auto" />
                            </motion.div>

                            {/* Price grid — no <table>, using CSS grid cards */}
                            <div className="grid grid-cols-1 gap-3">
                                {/* Header row */}
                                <div className="grid grid-cols-2 gap-4 px-6 py-3">
                                    <span className="font-royal text-xs tracking-[0.3em] uppercase text-riad-gold opacity-60">
                                        Prestation
                                    </span>
                                    <span className="font-royal text-xs tracking-[0.3em] uppercase text-riad-gold opacity-60 text-right">
                                        Tarif indicatif
                                    </span>
                                </div>

                                {/* Price rows as cards */}
                                {section.rows.map((row, rowIdx) => (
                                    <PriceCard key={rowIdx} row={row} index={rowIdx} />
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* ── NOTE IMPORTANTE ── */}
                <section className="py-16 bg-riad-blue border-t border-riad-gold/20">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="border border-riad-gold/30 bg-riad-gold/5 p-8 text-center space-y-4"
                        >
                            <span className="font-royal text-xs tracking-[0.35em] uppercase text-riad-gold">
                                Note importante
                            </span>
                            <p className="font-elegant text-xl text-riad-white/80 leading-relaxed italic">
                                Les prix sont indicatifs. Chaque projet est unique — devis gratuit sous 24h.
                            </p>
                            <div className="flex items-center justify-center gap-4 pt-2">
                                <div className="h-[1px] w-12 bg-riad-gold/30" />
                                <span className="font-royal text-riad-gold text-xs tracking-widest">✦</span>
                                <div className="h-[1px] w-12 bg-riad-gold/30" />
                            </div>
                            <p className="font-elegant text-riad-white/50 text-sm">
                                Visite technique à domicile sans frais · Devis détaillé sur mesure
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-24 bg-riad-blue border-t border-riad-gold/20">
                    <div className="container mx-auto px-6 max-w-3xl">
                        {/* Section header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-16"
                        >
                            <span className="font-royal text-xs tracking-[0.35em] uppercase text-riad-gold">
                                Questions fréquentes
                            </span>
                            <h2 className="font-royal text-4xl md:text-5xl text-riad-white uppercase tracking-[0.2em] mt-3 mb-4">
                                FAQ Tarifs
                            </h2>
                            <div className="w-16 h-[1px] bg-riad-gold mx-auto" />
                        </motion.div>

                        {/* Accordion */}
                        <div className="space-y-3">
                            {faqItems.map((item, idx) => (
                                <AccordionItem
                                    key={idx}
                                    question={item.question}
                                    answer={item.answer}
                                    index={idx}
                                    isOpen={openFaq === idx}
                                    onToggle={() => toggleFaq(idx)}
                                />
                            ))}
                        </div>
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
                            {/* Arabic decoration */}
                            <div
                                className="font-arabic text-4xl text-riad-gold-light"
                                aria-hidden="true"
                            >
                                احصل على عرض مجاني
                            </div>

                            <h2 className="font-royal text-3xl md:text-5xl text-riad-white uppercase tracking-[0.15em] leading-tight">
                                Votre Devis Gratuit Sous 24h
                            </h2>

                            <p className="font-elegant text-xl text-riad-white/70 leading-relaxed">
                                Chaque projet mérite une attention unique. Partagez-nous votre vision,
                                nous vous répondons avec une estimation personnalisée et sans engagement.
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <div className="h-[1px] w-12 bg-riad-gold/30" />
                                <span className="font-royal text-riad-gold text-xs tracking-widest">✦</span>
                                <div className="h-[1px] w-12 bg-riad-gold/30" />
                            </div>

                            <Link
                                to="/contact"
                                className="inline-block px-10 py-5 bg-riad-gold text-riad-blue font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold-light transition-all duration-500"
                            >
                                Demander un Devis Gratuit
                            </Link>
                        </motion.div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default PrixTarifs;
