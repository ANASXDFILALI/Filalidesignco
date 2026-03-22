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
    'Artisan tapissier à Rabat et Salé. Salons marocains sur mesure, rideaux, rénovation canapé pour particuliers et administration. Agdal, Hay Riad, Souissi, Hassan.',
  url: `${SITE_URL}/rabat`,
  telephone: '+212522456789',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rabat',
    addressRegion: 'Rabat-Salé-Kénitra',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.0209,
    longitude: -6.8416,
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
  image: `${SITE_URL}/og-rabat.jpg`,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Rabat', item: `${SITE_URL}/rabat` },
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'Salon Marocain',
    description:
      'Création de salons marocains sur mesure à Rabat. Banquettes capitonnées, bois sculpté, zellige et stuc — tradition artisanale au service de la capitale.',
    href: '/services/salon-marocain',
    icon: '✦',
  },
  {
    title: 'Rideaux Sur Mesure',
    description:
      'Confection et pose de rideaux sur mesure à Rabat : voilages en lin naturel, doubles rideaux en velours, occultants techniques. Tringle et rail inclus.',
    href: '/services/rideaux',
    icon: '◇',
  },
  {
    title: 'Tapisserie',
    description:
      'Rénovation de canapés, fauteuils et têtes de lit à Rabat et Salé. Large choix de tissus premium, finitions irréprochables, délais maîtrisés.',
    href: '/services/tapisserie',
    icon: '◈',
  },
  {
    title: 'Cuisine Moderne',
    description:
      'Conception et fabrication de cuisines modernes sur mesure pour les appartements et villas de Rabat. Design épuré, matériaux durables.',
    href: '/services/cuisine',
    icon: '◉',
  },
];

const realisations = [
  {
    title: 'Salon Marocain Sur Mesure à Casablanca',
    excerpt:
      'Réalisation similaire à notre projet rabati — salon complet avec banquettes velours profond, tables laiton et zellige artisanal. Découvrez notre méthode de travail.',
    href: '/blog/salon-marocain-sur-mesure-casablanca',
  },
  {
    title: 'Tendances Salon Marocain 2025',
    excerpt:
      `Les grandes tendances de l'année : salon marocain fusion, capitonnage contemporain, matériaux nobles revisités. Inspirations pour votre intérieur rabati.`,
    href: '/blog/tendances-salon-marocain-2025',
  },
  {
    title: 'Choisir son Tapissier à Casablanca',
    excerpt:
      'Guide pratique pour choisir un artisan tapissier de confiance — critères valables à Rabat comme dans toutes les grandes villes du Maroc.',
    href: '/blog/tapissier-casablanca-choisir',
  },
];

const neighborhoods = [
  'Agdal', 'Hay Riad', 'Souissi', 'Hassan', 'Océan', 'Akkari',
  'Youssoufia', 'Témara', 'Salé', 'Salé Al Jadida', 'Kénitra',
  'Ryad', 'Madinat Al Irfane', 'Diour Jamaa',
];

const faqs = [
  {
    q: 'Intervenez-vous à Rabat et à Salé ?',
    a: `Oui, nous couvrons l'ensemble de la région Rabat-Salé-Kénitra. Nos artisans tapissiers se déplacent à Rabat (Agdal, Hay Riad, Souissi, Hassan, Océan), à Salé, à Témara et jusqu'à Kénitra pour les projets importants.`,
  },
  {
    q: 'Proposez-vous des rideaux sur mesure à Rabat ?',
    a: `Absolument. La confection de rideaux sur mesure est l'un de nos services phares à Rabat. Nous nous déplaçons pour prendre les mesures précises de vos fenêtres, vous soumettons des échantillons de tissu et assurons la pose par nos installateurs qualifiés.`,
  },
  {
    q: 'Quels sont les délais pour un salon marocain sur mesure à Rabat ?',
    a: 'Comptez entre 3 et 6 semaines pour un salon marocain complet, selon la complexité des finitions souhaitées. Nous vous fournissons un calendrier précis lors de la visite de prise de mesure à votre domicile rabati.',
  },
  {
    q: 'Travaillez-vous avec les hôtels et les administrations à Rabat ?',
    a: `Oui, nous réalisons des projets professionnels à Rabat : hôtels, résidences diplomatiques, ministères et espaces de réception. Nous disposons d'une capacité de production adaptée aux grands formats et maîtrisons les délais contractuels.`,
  },
  {
    q: 'Quel est le budget moyen pour un salon marocain à Rabat ?',
    a: 'Les prix varient selon la superficie, les matériaux et le niveau de détail artisanal. Pour un salon standard à Rabat, comptez entre 8 000 et 30 000 MAD. Nous proposons des formules adaptées à chaque budget, avec devis gratuit et sans engagement.',
  },
  {
    q: `Venez-vous jusqu'à Hay Riad et Souissi ?`,
    a: `Bien sûr. Hay Riad, Souissi et Agdal figurent parmi nos zones d'intervention les plus fréquentes à Rabat. Nos artisans connaissent parfaitement ces quartiers et y interviennent régulièrement pour des projets de salon marocain et de rideaux sur mesure.`,
  },
];

// ── Animations ────────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Rabat: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      {/* ── SEO ── */}
      <Helmet>
        <title>Tapissier Rabat | Salon Sur Mesure | Filali Design</title>
        <meta
          name="description"
          content="Filali Design Co. — artisan tapissier à Rabat. Salons marocains sur mesure, rideaux, rénovation canapé. Agdal, Hay Riad, Souissi, Hassan, Salé. Devis gratuit."
        />
        <meta
          name="keywords"
          content="tapissier rabat, salon marocain rabat, rideaux sur mesure rabat, tapissier agdal, tapissier hay riad, salon marocain salé, tapissier souissi"
        />
        <link rel="canonical" href={`${SITE_URL}/rabat`} />
        <meta property="og:title" content="Artisan Tapissier Rabat | Filali Design Co." />
        <meta
          property="og:description"
          content="Artisan tapissier à Rabat. Salons marocains sur mesure, rideaux, canapés. Agdal, Hay Riad, Souissi. Devis gratuit."
        />
        <meta property="og:url" content={`${SITE_URL}/rabat`} />
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
              <span className="text-riad-gold">Rabat</span>
            </nav>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-arabic text-4xl text-riad-gold/60 mb-4"
            >
              الرباط
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-royal text-5xl sm:text-6xl md:text-7xl uppercase tracking-[0.1em] text-riad-white mb-6"
            >
              Artisan Tapissier<br />
              <span className="text-riad-gold">à Rabat</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-elegant text-xl text-riad-white/70 mb-10 max-w-2xl mx-auto"
            >
              Salons marocains sur mesure, rideaux et rénovation de canapés à Rabat et Salé.
              L'artisanat d'excellence Filali Design Co. au service de la capitale du Royaume.
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
              Nos Services à Rabat
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-2xl mx-auto mb-14"
            >
              De la conception artisanale à l'installation finale, nos équipes se déplacent
              à Rabat, Salé, Témara et dans toute la région pour transformer vos intérieurs.
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

        {/* ── Présence Rabat ── */}
        <section className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              L'Artisanat Marocain au Cœur de la Capitale
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/70 leading-relaxed space-y-5 text-base"
            >
              <p>
                Rabat, capitale du Royaume du Maroc, est une ville où l'élégance
                administrative côtoie un patrimoine artisanal d'une richesse insoupçonnée.
                Des résidences diplomatiques de Souissi aux appartements modernes d'Agdal,
                en passant par les villas de Hay Riad et les appartements du quartier Hassan,
                la demande en
                <strong className="text-riad-gold/90"> salon marocain sur mesure</strong> et
                en <strong className="text-riad-gold/90">rideaux de qualité</strong> ne cesse
                de croître dans la capitale.
              </p>
              <p>
                Filali Design Co. répond à cette demande avec la rigueur et le savoir-faire
                qui caractérisent notre atelier depuis des décennies. À Rabat, nous intervenons
                aussi bien pour des particuliers exigeants que pour des hôtels, des résidences
                diplomatiques ou des espaces de réception institutionnels. La capitale impose
                des standards élevés — nous les respectons et les dépassons.
              </p>
              <p>
                À <strong className="text-riad-gold/90">Agdal</strong>, quartier résidentiel
                prisé des fonctionnaires et des familles, nous réalisons régulièrement des
                salons marocains contemporains : lignes épurées, velours doux, capitonnage
                carré ou en losange. Les appartements d'Agdal, souvent de bonne superficie,
                permettent des compositions généreuses avec des banquettes en L et des
                coussins brodés assortis. À
                <strong className="text-riad-gold/90"> Hay Riad</strong>, quartier en pleine
                expansion, nos artisans tapissiers interviennent fréquemment pour des
                projets de salon complet incluant mobilier, rideaux sur mesure et éclairage
                d'ambiance.
              </p>
              <p>
                Le quartier <strong className="text-riad-gold/90">Souissi</strong>, l'un des
                plus huppés de Rabat, accueille villas et ambassades. Les projets que nous y
                réalisons se distinguent par leur niveau de finition exceptionnel : bois de
                cèdre sculpté à la main, zellige de Fès posé au millimètre, soie naturelle
                et velours grand teint. Pour le quartier
                <strong className="text-riad-gold/90"> Hassan</strong>, plus central et
                historique, nous adaptons notre style à l'architecture des années 1960-1980,
                souvent avec des solutions mixant tradition et modernité.
              </p>
              <p>
                Nous intervenons également à <strong className="text-riad-gold/90">Salé</strong>,
                ville jumelle de Rabat, pour des projets résidentiels dans les quartiers
                de Salé Al Jadida, Hay Salam et la Médina de Salé. Les maisons de la
                médina de Salé recèlent souvent de magnifiques espaces qui méritent une
                attention artisanale particulière. Nos équipes connaissent ces lieux et
                savent y apporter leur expertise.
              </p>
              <p>
                Que vous recherchiez un tapissier à Rabat pour rénover un canapé, confectionner
                des rideaux sur mesure pour votre villa de Souissi ou créer un salon marocain
                complet pour votre appartement d'Agdal, Filali Design Co. est l'adresse
                qu'il vous faut. Contactez-nous pour une consultation gratuite à domicile.
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
                Salon Marocain Sur Mesure
              </Link>
              <Link
                to="/services/rideaux"
                className="inline-block px-6 py-3 border border-riad-white/20 font-royal text-xs uppercase tracking-[0.2em] text-riad-white/70 hover:border-riad-gold/40 hover:text-riad-gold transition-all duration-500"
              >
                Rideaux Sur Mesure
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
              Inspirations & Réalisations
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-2xl mx-auto mb-14"
            >
              Découvrez nos réalisations et articles de référence pour préparer
              votre projet à Rabat.
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
              Quartiers Servis à Rabat & Salé
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 mb-10"
            >
              Nos artisans tapissiers se déplacent dans tous les quartiers de Rabat,
              Salé et les communes avoisinantes :
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

        {/* ── Liens internes ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Ressources & Articles Utiles
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-xl mx-auto mb-12"
            >
              Préparez votre projet de salon marocain ou de rideaux sur mesure à Rabat
              avec nos guides pratiques.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Guide Complet du Salon Marocain', href: '/salon-marocain' },
                { label: 'Tendances Salon Marocain 2025', href: '/blog/tendances-salon-marocain-2025' },
                { label: 'Capitonnage Velours — Technique Artisanale', href: '/blog/capitonnage-velours-technique-artisanale' },
                { label: 'Zellige Marocain — Guide Complet', href: '/blog/zellige-marocain-guide-complet' },
                { label: 'Bois de Cèdre Atlas dans le Mobilier Marocain', href: '/blog/bois-cedre-atlas-mobilier-marocain' },
                { label: 'Nos Tarifs & Prix', href: '/prix-tarifs' },
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
              Questions Fréquentes — Rabat
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
              <span className="text-riad-gold">à Rabat</span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-elegant text-riad-white/60 mb-10 max-w-xl mx-auto"
            >
              Nos artisans se déplacent chez vous à Rabat et Salé pour une consultation
              gratuite. Mesurage, conseil en matières et devis détaillé offerts — sans engagement.
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
                to="/salon-marocain"
                className="inline-block px-8 py-4 border border-riad-gold/40 text-riad-gold font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold hover:text-riad-blue transition-all duration-500"
              >
                Guide Salon Marocain
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Rabat;
