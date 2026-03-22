import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CustomCursor from '../../../components/CustomCursor';
import { SITE_URL } from '../../../lib/constants';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Rideaux: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Rideaux Sur Mesure Maroc — Confection & Pose',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Filali Design Co.',
      '@id': 'https://filalidesignco.space',
    },
    areaServed: { '@type': 'Country', name: 'Maroc' },
    description:
      'Confection de rideaux sur mesure au Maroc. Velours, lin, soie, voilages. Pose à domicile. Filali Design Co. — Casablanca, Rabat, Marrakech.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '47',
      bestRating: '5',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${SITE_URL}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Rideaux Sur Mesure',
        item: `${SITE_URL}/services/rideaux`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le prix de rideaux sur mesure au Maroc ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le prix de rideaux sur mesure au Maroc dépend du tissu, des dimensions et du type de confection choisi. Chez Filali Design Co., les rideaux en coton ou en microfibre débutent à partir de 150 MAD le mètre linéaire confectionné. Les rideaux en velours de luxe ou en soie naturelle peuvent atteindre 600 à 1 200 MAD le mètre linéaire. La pose à domicile est incluse dans tous nos devis pour la région Casablanca, et disponible dans tout le Maroc. Nous proposons un devis gratuit sur place pour mesurer vos fenêtres et vous conseiller sur le tissu le plus adapté.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels sont les délais de confection pour des rideaux sur mesure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le délai de confection de rideaux sur mesure est généralement de 7 à 14 jours ouvrables après validation du tissu et prise de mesures. Pour les projets d\'envergure (villas, hôtels, bureaux) ou les commandes incluant des éléments brodés à la main, comptez 3 à 5 semaines. Nous livrons et posons vos rideaux à domicile dans tout le Maroc : Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir et villes environnantes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment entretenir des rideaux en velours ou en soie ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'entretien de vos rideaux sur mesure dépend du tissu utilisé. Les rideaux en velours se nettoient à la vapeur douce ou en pressing professionnel (lavage à 30°C maximum en machine déconseillé). Les rideaux en soie naturelle nécessitent un nettoyage à sec exclusivement. Les rideaux en lin et en coton peuvent être lavés à 30°C à la main ou en machine en cycle délicat. Nous fournissons une fiche d\'entretien personnalisée avec chaque commande, et vous pouvons orienter vers nos partenaires pressing spécialisés à Casablanca.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelles têtes de rideaux proposez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Notre atelier confectionne toutes les têtes de rideaux existantes : à plis flamands (triple pli), à plis ronds, à oeillets dorés ou argentés, à passants, à fronces, à smocks brodés à la main, et en piqué plat pour un effet contemporain. Chaque tête de rideau est réalisée à la main dans notre atelier de Casablanca par des couturières expérimentées. La doublure thermique, la doublure occultante et la doublure légère sont disponibles en option pour toutes les confections.',
        },
      },
      {
        '@type': 'Question',
        name: 'Posez-vous les rideaux à domicile partout au Maroc ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, Filali Design Co. assure la prise de mesures, la confection et la pose à domicile dans toutes les grandes villes du Maroc. Notre équipe de poseurs professionnels intervient à Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir, Kenitra, Meknès et dans les villes avoisinantes. Nous installons également les tringleries, les rails et les systèmes motorisés (domotique) sur demande. La pose est incluse dans le devis pour Casablanca et facturée au forfait pour les autres villes.',
        },
      },
    ],
  };

  const fabricTypes = [
    {
      title: 'Velours de Luxe',
      arabic: 'مخمل فاخر',
      description:
        'Le velours est le tissu roi de la décoration d\'intérieur marocaine. Notre collection compte plus de 80 coloris de velours importés d\'Italie, de Belgique et fabriqués au Maroc, du velours ras au velours côtelé en passant par le velours dévoré aux motifs floraux et géométriques. Les rideaux en velours sur mesure apportent chaleur, élégance et excellente isolation phonique et thermique. Nous les confectionnons en grande largeur (jusqu\'à 300 cm de hauteur d\'un seul lé) pour les grandes baies vitrées et les espaces à double hauteur.',
    },
    {
      title: 'Lin Naturel & Coton',
      arabic: 'كتان وقطن',
      description:
        'Pour une décoration contemporaine ou bohème, le lin naturel et le coton texturé sont des choix parfaits. Nos rideaux en lin sur mesure sont confectionnés à partir de tissus lin lavé, lin froissé ou lin mélangé coton pour un tombé naturel et authentique. Disponibles en teintes naturelles (écru, sable, taupe, gris ardoise, vert kaki), ils s\'accordent aussi bien avec un intérieur moderne qu\'avec un riad traditionnel. La doublure en coton blanc ou en organza est recommandée pour filtrer la lumière intense du soleil marocain.',
    },
    {
      title: 'Soie & Organza',
      arabic: 'حرير وأورجانزا',
      description:
        'La soie naturelle confère à vos rideaux un raffinement incomparable, avec ses reflets changeants selon la lumière. Nous proposons la soie pure, la soie sauvage (tussor) et l\'organza de soie pour les voilages d\'apparat. Ces tissus précieux sont réservés aux salons de réception, aux suites hôtelières et aux espaces de prestige. La confection en soie exige un savoir-faire particulier — nos couturières spécialisées travaillent ces matières avec les outils et les techniques adaptés pour un résultat irréprochable.',
    },
    {
      title: 'Voilages & Brise-Vue',
      arabic: 'ستائر شفافة',
      description:
        'Les voilages sur mesure filtrent la lumière tout en préservant l\'intimité. Notre gamme comprend le voile de lin, l\'étamine, la batiste de coton, le jacquard brodé et le voilage thermique réfléchissant. Pour les espaces ensoleillés typiques du Maroc, nous recommandons le voilage anti-UV qui protège vos meubles et vos textiles de la décoloration. Les voilages double face (blanc intérieur, coloré extérieur) sont très prisés dans les appartements de Casablanca et de Rabat.',
    },
  ];

  const confectionDetails = [
    {
      type: 'Têtes de Rideaux',
      description:
        'Notre atelier maîtrise toutes les techniques de confection : plis flamands à triple pinces pour un tombé architectural, oeillets grande taille en métal doré ou chromé pour un effet moderne, passants en tissu assorti pour un rendu artisanal, fronces et smocks brodés à la main pour les intérieurs romantiques. La tête de rideau détermine le style général de votre fenêtre et nous vous conseillons sur le choix le plus adapté à votre décoration.',
    },
    {
      type: 'Doublures & Thermique',
      description:
        'La doublure est essentielle dans le contexte climatique marocain. Nous proposons la doublure légère en coton blanc, la doublure occultante 100 % blackout pour les chambres (indispensable face au soleil de Casablanca et de Marrakech), la doublure thermique pour isoler du froid en hiver et la doublure interlining pour un tombé plus ample et une meilleure isolation acoustique. Toutes nos doublures sont ignifugées sur demande pour les projets hôteliers.',
    },
  ];

  const faqs = faqSchema.mainEntity;

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      <Helmet>
        <title>Rideaux Sur Mesure Maroc | Confection & Pose | Filali Design</title>
        <meta
          name="description"
          content="Confection de rideaux sur mesure au Maroc. Velours, lin, soie, voilages. Pose à domicile. Filali Design Co. — Casablanca, Rabat, Marrakech."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/services/rideaux`} />
        <meta property="og:title" content="Rideaux Sur Mesure Maroc — Confection & Pose | Filali Design Co." />
        <meta
          property="og:description"
          content="Confection de rideaux sur mesure au Maroc. Velours, lin, soie, voilages. Pose à domicile. Filali Design Co. — Casablanca, Rabat, Marrakech."
        />
        <meta property="og:url" content={`${SITE_URL}/services/rideaux`} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <CustomCursor />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23c9a96e%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="font-arabic text-5xl text-riad-gold/60 mb-4"
          >
            ستائر على المقاس
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-royal text-5xl md:text-7xl text-riad-gold uppercase tracking-widest mb-6"
          >
            Rideaux Sur Mesure Maroc — Confection & Pose
          </motion.h1>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-24 h-px bg-riad-gold/40 mx-auto mb-8"
          />
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-elegant text-xl text-riad-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Depuis 1985, Filali Design Co. confectionne des rideaux sur mesure d'exception au Maroc. Velours de luxe, lin naturel, soie pure, voilages brodés — chaque rideau est coupé, cousu et posé à la main par nos artisanes à Casablanca.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
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

      {/* ── BREADCRUMB ── */}
      <nav className="border-t border-riad-gold/20 py-4">
        <div className="container mx-auto px-6 max-w-5xl">
          <ol className="flex items-center gap-2 font-elegant text-sm text-riad-white/50">
            <li><Link to="/" className="hover:text-riad-gold transition-colors">Accueil</Link></li>
            <li className="text-riad-gold/30">›</li>
            <li><Link to="/services" className="hover:text-riad-gold transition-colors">Services</Link></li>
            <li className="text-riad-gold/30">›</li>
            <li className="text-riad-gold/80">Rideaux Sur Mesure</li>
          </ol>
        </div>
      </nav>

      {/* ── NOS TISSUS ── */}
      <section className="py-24 border-t border-riad-gold/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Nos Tissus
            </h2>
            <p className="font-elegant text-riad-white/70 max-w-xl mx-auto">
              Une sélection rigoureuse des plus beaux tissus du monde, adaptés au climat et à l'esthétique marocaine.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {fabricTypes.map((fabric, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border border-riad-gold/20 p-8 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-arabic text-3xl text-riad-gold/40 mb-3 group-hover:text-riad-gold/70 transition-colors duration-500">
                  {fabric.arabic}
                </p>
                <h3 className="font-royal text-xl text-riad-gold uppercase tracking-widest mb-4">
                  {fabric.title}
                </h3>
                <p className="font-elegant text-riad-white/70 leading-relaxed text-sm">
                  {fabric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFECTION ── */}
      <section className="py-24 border-t border-riad-gold/20 bg-riad-red/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Notre Savoir-Faire de Confection
            </h2>
            <p className="font-elegant text-riad-white/70 max-w-xl mx-auto">
              De la tête de rideau à la doublure, chaque détail est soigné à la main dans notre atelier de Casablanca.
            </p>
          </motion.div>
          <div className="space-y-8">
            {confectionDetails.map((detail, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="flex flex-col md:flex-row gap-6 border-b border-riad-gold/20 pb-8 last:border-0 last:pb-0"
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <span className="font-royal text-lg text-riad-gold uppercase tracking-widest">
                    {detail.type}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <p className="font-elegant text-riad-white/75 leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ── */}
      <section className="py-24 border-t border-riad-gold/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              De la Mesure à la Pose
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-elegant text-riad-white/75 leading-relaxed text-lg max-w-4xl mx-auto space-y-6"
          >
            <p>
              Notre service clé en main débute par une <strong className="text-riad-gold">visite à domicile gratuite</strong> dans toute la région de Casablanca. Nos conseillers mesurent vos fenêtres avec précision, évaluent l'orientation (soleil levant, soleil couchant, lumière diffuse) et vous présentent nos échantillons de tissus directement chez vous pour visualiser le rendu dans votre intérieur.
            </p>
            <p>
              Une fois le tissu et la confection choisis, nos couturières taillent et assemblent chaque rideau dans notre atelier. La <strong className="text-riad-gold">largeur de fronce</strong> (2,5 fois la largeur de la fenêtre pour les velours, 3 fois pour les voilages), les ourlets, les poids de plomb et les finitions sont réalisés selon les règles de l'art de la couture décorative française et marocaine.
            </p>
            <p>
              La <strong className="text-riad-gold">pose à domicile</strong> est assurée par nos installateurs équipés pour tous types de supports : murs en béton, cloisons légères, plafonds, caissons de stores intégrés. Nous installons tringleries classiques, rails aluminium discrets et systèmes motorisés domotiques. Livraison et pose partout au Maroc — <strong className="text-riad-gold">rideaux sur mesure Maroc prix</strong> compétitifs avec devis gratuit sous 24 heures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-riad-gold/20 bg-riad-red/10">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Questions Fréquentes
            </h2>
          </motion.div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="border-b border-riad-gold/20"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-riad-gold transition-colors focus:outline-none gap-4"
                >
                  <span className="font-royal text-sm uppercase tracking-wider text-riad-gold/90">
                    {faq.name}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-riad-gold transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-6"
                  >
                    <p className="font-elegant text-riad-white/70 leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-riad-gold/20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-arabic text-4xl text-riad-gold/50 mb-4">مجانًا في 24 ساعة</p>
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Obtenez votre Devis Gratuit
            </h2>
            <p className="font-elegant text-riad-white/70 mb-10 max-w-xl mx-auto">
              Décrivez-nous votre projet de rideaux sur mesure et recevez un devis détaillé sous 24 heures. Déplacement et prise de mesures offerts à Casablanca. Livraison et pose partout au Maroc.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-riad-gold text-riad-blue font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold-light transition-all duration-500"
            >
              Contactez-nous Maintenant
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── LIENS INTERNES ── */}
      <section className="py-16 border-t border-riad-gold/20 bg-riad-red/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-10">
            <h2 className="font-royal text-2xl text-riad-gold uppercase tracking-widest">
              En Savoir Plus
            </h2>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <Link
                to="/blog"
                className="block border border-riad-gold/20 p-6 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-royal text-sm text-riad-gold uppercase tracking-widest mb-2 group-hover:text-riad-gold-light transition-colors">
                  Guide &amp; Conseils
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Comment choisir ses rideaux sur mesure selon l'orientation de ses fenêtres au Maroc
                </p>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link
                to="/portfolio"
                className="block border border-riad-gold/20 p-6 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-royal text-sm text-riad-gold uppercase tracking-widest mb-2 group-hover:text-riad-gold-light transition-colors">
                  Portfolio
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Nos plus belles réalisations de rideaux sur mesure à Casablanca, Rabat et Marrakech
                </p>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <Link
                to="/services/salon-marocain"
                className="block border border-riad-gold/20 p-6 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-royal text-sm text-riad-gold uppercase tracking-widest mb-2 group-hover:text-riad-gold-light transition-colors">
                  Service
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Salon Marocain Sur Mesure
                </p>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}>
              <Link
                to="/services/tapisserie"
                className="block border border-riad-gold/20 p-6 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-royal text-sm text-riad-gold uppercase tracking-widest mb-2 group-hover:text-riad-gold-light transition-colors">
                  Service
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Tapisserie &amp; Rénovation
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rideaux;
