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
    'Artisan tapissier à Casablanca depuis 1985. Salons marocains sur mesure, rideaux, rénovation canapé, cuisines modernes.',
  url: `${SITE_URL}/casablanca`,
  telephone: '+212522456789',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Casablanca',
    addressRegion: 'Grand Casablanca-Settat',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.5731,
    longitude: -7.5898,
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
  image: `${SITE_URL}/og-casablanca.jpg`,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Casablanca', item: `${SITE_URL}/casablanca` },
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'Salon Marocain',
    description:
      'Création de salons marocains sur mesure alliant tradition artisanale et élégance contemporaine. Banquettes capitonnées, zellige, bois sculpté.',
    href: '/services/salon-marocain',
    icon: '✦',
  },
  {
    title: 'Tapisserie',
    description:
      'Rénovation et création de canapés, fauteuils et têtes de lit. Tissus premium importés et marocains, finitions irréprochables.',
    href: '/services/tapisserie',
    icon: '◈',
  },
  {
    title: 'Rideaux Sur Mesure',
    description:
      'Rideaux confectionnés à la mesure de vos fenêtres. Voilages, doubles rideaux, occultants, rail et tringle posés par nos artisans.',
    href: '/services/rideaux',
    icon: '◇',
  },
  {
    title: 'Cuisine Moderne',
    description:
      'Conception et fabrication de cuisines équipées modernes sur mesure, alliant fonctionnalité et design haut de gamme.',
    href: '/services/cuisine',
    icon: '◉',
  },
];

const realisations = [
  {
    title: 'Salon Marocain Sur Mesure à Casablanca',
    excerpt:
      `Réalisation d'un salon marocain complet dans une villa de l'Ain Diab — banquettes capitonnées velours bordeaux, tables laiton, zellige artisanal.`,
    href: '/blog/salon-marocain-sur-mesure-casablanca',
  },
  {
    title: 'Rénovation Canapé par Tapissier Casablanca',
    excerpt:
      `Transformation d'un canapé 3+2 en tissu chenille taupe avec surpiqûres décoratives. Intervention dans un appartement du Gauthier.`,
    href: '/blog/tapissier-casablanca-renovation-canape',
  },
  {
    title: 'Salon Capitonné à Casablanca',
    excerpt:
      `Conception d'un salon capitonné style losange en velours émeraude pour une résidence Racine. Boutons laiton et ourlet doré.`,
    href: '/blog/salon-capitonne-casablanca',
  },
];

const neighborhoods = [
  'Anfa', 'Gauthier', 'Racine', 'Ain Diab', 'Maarif', 'CIL',
  'Bourgogne', 'Palmier', 'Derb Sultan', 'Hay Hassani', 'Sidi Maarouf',
  'Bouskoura', 'Californie', 'Val Fleuri', 'Riviera', 'Oasis',
];

const faqs = [
  {
    q: 'Livrez-vous à domicile dans tout Casablanca ?',
    a: `Oui, nous intervenons dans tous les quartiers de Casablanca et ses périphéries (Bouskoura, Ain Harrouda). La livraison et l'installation sont incluses dans nos prestations. Contactez-nous pour confirmer votre secteur.`,
  },
  {
    q: `Quels sont les délais de fabrication d'un salon marocain à Casablanca ?`,
    a: 'Le délai de fabrication varie entre 3 et 6 semaines selon la complexité du projet et les matériaux choisis. Nous vous communiquons un délai précis lors de la visite de mesure.',
  },
  {
    q: 'Intervenez-vous dans les quartiers comme Anfa et Gauthier ?',
    a: `Absolument. Nous servons l'ensemble de la ville : Anfa, Gauthier, Racine, Ain Diab, Maarif, CIL, Bourgogne, Palmier et toutes les zones résidentielles de Casablanca.`,
  },
  {
    q: 'Quel est le budget moyen pour un salon marocain sur mesure à Casablanca ?',
    a: 'Le budget dépend de la surface, des matériaux et du niveau de finition. En général, comptez entre 8 000 et 35 000 MAD pour un salon complet. Nous proposons des devis gratuits et des solutions adaptées à tous les budgets.',
  },
  {
    q: 'Comment obtenir un devis gratuit à Casablanca ?',
    a: 'Contactez-nous par téléphone, WhatsApp ou via notre formulaire en ligne. Nous planifions une visite chez vous à Casablanca pour prendre les mesures et discuter de vos préférences. Le devis est entièrement gratuit et sans engagement.',
  },
];

// ── Animations ────────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Casablanca: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      {/* ── SEO ── */}
      <Helmet>
        <title>Tapissier Casablanca | Salon Sur Mesure | Filali Design</title>
        <meta
          name="description"
          content="Filali Design Co. — artisan tapissier à Casablanca depuis 1985. Salons marocains sur mesure, rideaux, rénovation canapé, cuisines modernes. Devis gratuit."
        />
        <meta
          name="keywords"
          content="tapissier casablanca, salon marocain casablanca, rideaux sur mesure casablanca, tapissier anfa, tapissier gauthier, salon marocain ain diab"
        />
        <link rel="canonical" href={`${SITE_URL}/casablanca`} />
        <meta property="og:title" content="Artisan Tapissier à Casablanca | Filali Design Co." />
        <meta
          property="og:description"
          content="Artisan tapissier à Casablanca depuis 1985. Salons marocains sur mesure, rideaux, canapés. Devis gratuit."
        />
        <meta property="og:url" content={`${SITE_URL}/casablanca`} />
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
              <span className="text-riad-gold">Casablanca</span>
            </nav>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-arabic text-4xl text-riad-gold/60 mb-4"
            >
              الدار البيضاء
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-royal text-5xl sm:text-6xl md:text-7xl uppercase tracking-[0.1em] text-riad-white mb-6"
            >
              Filali Design Co.<br />
              <span className="text-riad-gold">à Casablanca</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-elegant text-xl text-riad-white/70 mb-10 max-w-2xl mx-auto"
            >
              Votre Artisan Tapissier depuis 1985 — Salons marocains, rideaux sur mesure
              et rénovation de canapés dans toute la région du Grand Casablanca.
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
              Nos Services à Casablanca
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-2xl mx-auto mb-14"
            >
              De la conception au montage, nos artisans se déplacent à Casablanca pour
              transformer vos espaces de vie.
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

        {/* ── Why Casablanca ── */}
        <section className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              Pourquoi Casablanca nous choisit
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/70 leading-relaxed space-y-5 text-base"
            >
              <p>
                Depuis 1985, Filali Design Co. est l'adresse de référence pour les particuliers
                et professionnels casablancais en quête d'excellence artisanale. Des villas
                résidentielles d'Anfa aux appartements haussmanniens du Gauthier, en passant par
                les hôtels boutique de l'Ain Diab et les résidences de prestige du Maarif et de
                la Racine — nos artisans apportent leur savoir-faire directement chez vous.
              </p>
              <p>
                Le client casablancais est exigeant : il recherche un artisan tapissier qui
                maîtrise aussi bien le salon marocain traditionnel que le capitonné contemporain,
                qui conseille sur les matières premières importées comme sur les tissus marocains,
                et qui respecte les délais et les finitions promises. C'est exactement ce que
                Filali Design Co. offre depuis quatre décennies dans la capitale économique
                du Maroc.
              </p>
              <p>
                Que vous souhaitiez rénover un canapé usé, créer des rideaux sur mesure pour
                un loft du CIL ou concevoir un salon marocain complet pour votre villa de
                Bouskoura, notre équipe se déplace, prend les mesures, vous présente les
                échantillons et assure la fabrication artisanale dans notre atelier casablancais.
                La livraison et la pose sont comprises dans chaque devis. Résultat : un espace
                intérieur transformé, à votre image, sans compromis sur la qualité.
              </p>
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
              Nos Réalisations à Casablanca
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-2xl mx-auto mb-14"
            >
              Découvrez quelques-unes de nos réalisations récentes à Casablanca.
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
              Zone d'Intervention
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 mb-10"
            >
              Nos artisans tapissiers se déplacent dans tous les quartiers de Casablanca
              et les communes avoisinantes :
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

        {/* ── FAQ ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Questions Fréquentes — Casablanca
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
              Demander un Devis Gratuit<br />
              <span className="text-riad-gold">à Casablanca</span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-elegant text-riad-white/60 mb-10 max-w-xl mx-auto"
            >
              Nos artisans se déplacent chez vous à Casablanca pour une consultation
              gratuite. Mesurage, conseil matières et devis détaillé offerts.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-riad-gold text-riad-blue font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold-light transition-all duration-500"
              >
                Contactez-nous
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Casablanca;
