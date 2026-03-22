import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CustomCursor from '../../../components/CustomCursor';
import { SITE_URL } from '../../../lib/constants';

// ── Schema ────────────────────────────────────────────────────────────────────

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Filali Design Co.',
  description:
    'Artisan tapissier à Marrakech. Salons marocains sur mesure pour riads, palais et villas. Capitonnage velours, zellige, bois de cèdre sculpté.',
  url: `${SITE_URL}/marrakech`,
  telephone: '+212522456789',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Marrakech',
    addressRegion: 'Marrakech-Safi',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6295,
    longitude: -7.9811,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  image: `${SITE_URL}/og-marrakech.jpg`,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Marrakech', item: `${SITE_URL}/marrakech` },
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'Salon Marocain',
    description:
      'Création de salons marocains sur mesure pour riads et palais marrakchis. Banquettes capitonnées, zellige artisanal, bois de cèdre sculpté, stuc décoratif.',
    href: '/services/salon-marocain',
    icon: '✦',
  },
  {
    title: 'Tapisserie',
    description:
      `Rénovation et création de canapés, fauteuils et ottomans. Tissus premium — velours, soie, damas — adaptés au style riad et à l'esthétique marrakchie.`,
    href: '/services/tapisserie',
    icon: '◈',
  },
  {
    title: 'Rideaux Sur Mesure',
    description:
      `Rideaux et drapés confectionnés sur mesure pour les hautes fenêtres des riads et les suites d'hôtels. Pose et installation incluses.`,
    href: '/services/rideaux',
    icon: '◇',
  },
  {
    title: 'Rénovation Riad',
    description:
      `Rénovation complète de l'espace intérieur d'un riad : salon principal, chambres, couloirs. Coordination artisanale de A à Z.`,
    href: '/services/salon-marocain',
    icon: '◉',
  },
];

const realisations = [
  {
    title: 'Salon Marocain dans un Riad de la Médina de Marrakech',
    excerpt:
      `Réalisation d'un salon marocain complet dans un riad classé de la Médina — banquettes en velours safran, tables en thuya, zellige vert menthe traditionnel.`,
    href: '/blog/salon-marocain-marrakech',
  },
  {
    title: 'Capitonnage Velours — Technique Artisanale',
    excerpt:
      `Découvrez notre technique de capitonnage losange en velours bordeaux, appliquée à un salon de réception d'une villa de l'Hivernage à Marrakech.`,
    href: '/blog/capitonnage-velours-technique-artisanale',
  },
  {
    title: 'Tendances Salon Marocain 2025',
    excerpt:
      'Les nouvelles tendances du salon marocain contemporain : fusion zellige et marbre, velours profond, laiton brossé et lumières tamisées — inspirées de Marrakech.',
    href: '/blog/tendances-salon-marocain-2025',
  },
];

const neighborhoods = [
  'Médina', 'Guéliz', 'Hivernage', 'Palmeraie', 'Agdal', 'Mellah',
  'Targa', 'Massira', 'Route de Fès', 'Route de Casablanca', 'Semlalia',
  'Bab Doukkala', 'Sidi Youssef Ben Ali', "M'Hamid",
];

const faqs = [
  {
    q: 'Intervenez-vous pour la rénovation de riads à Marrakech ?',
    a: `Oui, la rénovation de riads est l'une de nos spécialités à Marrakech. Nous intervenons dans la Médina, le Mellah et tous les quartiers pour la création de salons marocains, la tapisserie et les rideaux sur mesure adaptés à l'architecture riad.`,
  },
  {
    q: 'Quels matériaux utilisez-vous pour un salon marocain à Marrakech ?',
    a: `Nous travaillons avec les matières nobles de l'artisanat marocain : velours de qualité supérieure, soie naturelle, damas brodé, bois de cèdre de l'Atlas sculpté, zellige de Fès, stuc (tadelakt) et laiton martelé. Chaque matériau est sélectionné selon votre projet et votre budget.`,
  },
  {
    q: 'Quels sont les délais pour un salon marocain sur mesure à Marrakech ?',
    a: 'Les délais varient entre 3 et 7 semaines selon la complexité du projet. Pour un riad ou un palais avec des finitions très élaborées (sculptures, zellige personnalisé), prévoyez 6 à 8 semaines. Nous vous communiquons un calendrier précis dès la visite de mesure.',
  },
  {
    q: `Servez-vous la Palmeraie et l'Hivernage à Marrakech ?`,
    a: `Absolument. Nos artisans se déplacent dans tous les quartiers de Marrakech : Guéliz, Médina, Hivernage, Palmeraie, Agdal, Mellah, Targa et toutes les zones résidentielles. Nous intervenons également dans les hôtels et maisons d'hôtes de la région.`,
  },
  {
    q: `Quel est le prix d'un salon marocain complet à Marrakech ?`,
    a: 'Le tarif dépend de la superficie, des matériaux choisis et du niveau de détail artisanal. Pour un salon standard, comptez entre 10 000 et 45 000 MAD. Un salon de prestige pour riad ou palais peut dépasser ce budget. Consultez notre guide complet des prix sur notre page dédiée.',
  },
];

// ── Animations ────────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Marrakech: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      {/* ── SEO ── */}
      <Helmet>
        <title>Tapissier Marrakech | Salon Sur Mesure | Filali Design</title>
        <meta
          name="description"
          content="Filali Design Co. — artisan tapissier à Marrakech. Salons marocains sur mesure pour riads, palais et villas. Guéliz, Médina, Hivernage, Palmeraie. Devis gratuit."
        />
        <meta
          name="keywords"
          content="tapissier marrakech, salon marocain marrakech, rénovation riad marrakech, salon marocain riad, tapissier médina marrakech, capitonnage velours marrakech"
        />
        <link rel="canonical" href={`${SITE_URL}/marrakech`} />
        <meta property="og:title" content="Artisan Tapissier Marrakech | Filali Design Co." />
        <meta
          property="og:description"
          content="Artisan tapissier à Marrakech. Salons marocains sur mesure pour riads et palais. Devis gratuit."
        />
        <meta property="og:url" content={`${SITE_URL}/marrakech`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <CustomCursor />
      <Navbar />

      <main className="pt-28">

        {/* ── Hero ── */}
        <section className="relative py-24 px-6 overflow-hidden border-b border-riad-gold/10">
          <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#C9A96E_0px,#C9A96E_1px,transparent_1px,transparent_40px)]" />
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            {/* Breadcrumb */}
            <nav className="flex justify-center gap-2 text-xs font-elegant text-riad-white/40 uppercase tracking-widest mb-10">
              <Link to="/" className="hover:text-riad-gold transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-riad-gold">Marrakech</span>
            </nav>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-arabic text-4xl text-riad-gold/60 mb-4"
            >
              مراكش
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-royal text-5xl sm:text-6xl md:text-7xl uppercase tracking-[0.1em] text-riad-white mb-6"
            >
              Artisan Tapissier<br />
              <span className="text-riad-gold">à Marrakech</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-elegant text-xl text-riad-white/70 mb-10 max-w-2xl mx-auto"
            >
              Salons marocains sur mesure pour riads, palais et villas — au cœur de la
              ville ocre. Filali Design Co. sublime l'art de vivre marrakchi depuis des décennies.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-riad-gold text-riad-blue font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold-light transition-all duration-500"
              >
                Demander un Devis Gratuit
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Nos Services à Marrakech
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-2xl mx-auto mb-14"
            >
              De la conception artisanale à l'installation finale, nos maîtres artisans
              se déplacent à Marrakech et dans toute la région Marrakech-Safi.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className="group block h-full p-8 border border-riad-gold/20 hover:border-riad-gold/60 bg-riad-white/[0.02] hover:bg-riad-white/[0.05] transition-all duration-500"
                  >
                    <span className="text-2xl text-riad-gold mb-4 block">{service.icon}</span>
                    <h3 className="font-royal text-lg uppercase tracking-widest text-riad-white group-hover:text-riad-gold transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="font-elegant text-sm text-riad-white/50 leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Présence Marrakech ── */}
        <section className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              L'Art Marrakchi, Sublimé par Filali Design Co.
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/70 leading-relaxed space-y-5 text-base"
            >
              <p>
                Marrakech est bien plus qu'une ville — c'est une sensibilité esthétique,
                une philosophie de l'espace intérieur héritée de siècles de raffinement
                andalou et berbère. Les riads de la Médina, les palais de l'Hivernage et
                les villas de la Palmeraie imposent un niveau d'exigence artisanale que peu
                d'ateliers savent atteindre. Filali Design Co. est précisément cet atelier.
              </p>
              <p>
                Nos artisans tapissiers interviennent à Marrakech pour concevoir des
                <strong className="text-riad-gold/90"> salons marocains sur mesure</strong> qui
                honorent l'héritage de la ville ocre. Chaque projet commence par une visite
                chez vous : nous prenons les mesures, étudions la lumière naturelle, les
                proportions des pièces, le style architectural existant. Puis nous vous
                soumettons une proposition personnalisée — choix des tissus, des boiseries,
                du zellige, des stuc et des accessoires — avant toute fabrication.
              </p>
              <p>
                La Médina de Marrakech regorge de riads à rénover ou à réaménager. Nos
                équipes maîtrisent les contraintes spécifiques de ces espaces : portes basses,
                couloirs étroits, patios ouverts, double-hauteur de plafond. Nous savons
                habiller ces volumes exceptionnels avec des banquettes capitonnées, des
                rideaux de soie naturelle et des tables basses en bois de thuya ou de cèdre
                sculpté qui s'intègrent parfaitement dans l'esprit riad.
              </p>
              <p>
                À <strong className="text-riad-gold/90">Guéliz</strong>, le quartier moderne
                de Marrakech, la demande porte davantage sur des salons marocains
                contemporains — lignes épurées, velours deep navy ou bordeaux, touche de
                laiton brossé et capitonnage carré ou diamant. À
                <strong className="text-riad-gold/90"> l'Hivernage</strong>, nous intervenons
                régulièrement dans les hôtels de luxe et les résidences privées pour des
                réalisations grand format, avec des finitions irréprochables dignes des
                palaces de la ville. Dans la
                <strong className="text-riad-gold/90"> Palmeraie</strong>, les villas
                nécessitent des salons marocains de grande superficie, souvent avec des
                éléments sculptés sur mesure : colonnes, arches, plafonds à caissons.
              </p>
              <p>
                Chaque réalisation Filali Design Co. à Marrakech est une ode au patrimoine
                artisanal marocain. Nous ne fabriquons pas des meubles — nous créons des
                espaces de vie qui racontent une histoire, celle d'un savoir-faire transmis
                de génération en génération, au service de votre intérieur.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/services/salon-marocain"
                className="inline-block px-6 py-3 border border-riad-gold/40 font-royal text-xs uppercase tracking-[0.2em] text-riad-gold hover:bg-riad-gold hover:text-riad-blue transition-all duration-500"
              >
                Découvrir nos Salons Marocains
              </Link>
              <Link
                to="/blog/salon-marocain-marrakech"
                className="inline-block px-6 py-3 border border-riad-white/20 font-royal text-xs uppercase tracking-[0.2em] text-riad-white/70 hover:border-riad-gold/40 hover:text-riad-gold transition-all duration-500"
              >
                Réalisation Marrakech
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Réalisations ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Nos Réalisations à Marrakech
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-2xl mx-auto mb-14"
            >
              Quelques-unes de nos créations récentes dans la ville ocre — riads rénovés,
              salons de réception et espaces hôteliers.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-6">
              {realisations.map((item, idx) => (
                <motion.div
                  key={item.href}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="group block h-full p-8 border border-riad-gold/20 hover:border-riad-gold/50 bg-riad-white/[0.02] hover:bg-riad-white/[0.04] transition-all duration-500"
                  >
                    <span className="text-riad-gold/40 font-royal text-4xl mb-4 block">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-royal text-base uppercase tracking-wider text-riad-white group-hover:text-riad-gold transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="font-elegant text-sm text-riad-white/50 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <span className="font-elegant text-xs text-riad-gold uppercase tracking-widest group-hover:underline">
                      Lire l'article →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Zone d'Intervention ── */}
        <section className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              Quartiers Servis à Marrakech
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 mb-10"
            >
              Nos artisans tapissiers interviennent dans l'ensemble des quartiers de
              Marrakech, riads de la Médina comme villas contemporaines de la périphérie :
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              {neighborhoods.map((n) => (
                <span
                  key={n}
                  className="px-4 py-2 border border-riad-gold/20 font-elegant text-sm text-riad-white/70 hover:border-riad-gold/60 hover:text-riad-gold transition-all duration-300"
                >
                  {n}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Liens Blog ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Articles & Inspirations Marrakech
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-xl mx-auto mb-12"
            >
              Explorez nos articles de fond sur l'artisanat marrakchi, les tendances
              du salon marocain et les techniques de capitonnage.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Salon Marocain sur Mesure à Marrakech', href: '/blog/salon-marocain-marrakech' },
                { label: 'Tendances Salon Marocain 2025', href: '/blog/tendances-salon-marocain-2025' },
                { label: 'Capitonnage Velours — Technique Artisanale', href: '/blog/capitonnage-velours-technique-artisanale' },
                { label: 'Bois de Cèdre Atlas dans le Mobilier Marocain', href: '/blog/bois-cedre-atlas-mobilier-marocain' },
                { label: 'Zellige Marocain — Guide Complet', href: '/blog/zellige-marocain-guide-complet' },
                { label: 'Guide Complet du Salon Marocain', href: '/salon-marocain' },
              ].map((link, idx) => (
                <motion.div
                  key={link.href}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                >
                  <Link
                    to={link.href}
                    className="group flex items-center gap-4 p-5 border border-riad-gold/15 hover:border-riad-gold/50 bg-riad-white/[0.01] hover:bg-riad-white/[0.04] transition-all duration-400"
                  >
                    <span className="text-riad-gold text-lg flex-shrink-0">→</span>
                    <span className="font-elegant text-sm text-riad-white/70 group-hover:text-riad-gold transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Questions Fréquentes — Marrakech
            </motion.h2>

            <div className="mt-10 space-y-3">
              {faqs.map((item, idx) => (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="border border-riad-gold/20 hover:border-riad-gold/40 transition-colors duration-300"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={activeIndex === idx}
                  >
                    <span className="font-royal text-sm uppercase tracking-wider text-riad-white group-hover:text-riad-gold transition-colors">
                      {item.q}
                    </span>
                    <span className="text-riad-gold ml-4 text-xl flex-shrink-0">
                      {activeIndex === idx ? '−' : '+'}
                    </span>
                  </button>
                  {activeIndex === idx && (
                    <div className="px-6 pb-5">
                      <p className="font-elegant text-sm text-riad-white/60 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 border-t border-riad-gold/10">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-arabic text-3xl text-riad-gold/50 mb-4"
            >
              ✦
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-royal text-3xl sm:text-4xl uppercase tracking-[0.12em] text-riad-white mb-6"
            >
              Votre Riad Mérite<br />
              <span className="text-riad-gold">le Meilleur Artisanat</span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-elegant text-riad-white/60 mb-10 max-w-xl mx-auto"
            >
              Nos artisans se déplacent à Marrakech pour une consultation gratuite.
              Mesurage, conseil en matériaux et devis détaillé offerts — sans engagement.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-riad-gold text-riad-blue font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold-light transition-all duration-500"
              >
                Contactez-nous
              </Link>
              <Link
                to="/services/salon-marocain"
                className="inline-block px-8 py-4 border border-riad-gold/40 text-riad-gold font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold hover:text-riad-blue transition-all duration-500"
              >
                Nos Services
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Marrakech;
