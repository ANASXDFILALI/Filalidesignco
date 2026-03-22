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

const SalonMarocain: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Salon Marocain Sur Mesure',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Filali Design Co.',
      '@id': 'https://filalidesignco.space',
    },
    areaServed: { '@type': 'Country', name: 'Maroc' },
    description:
      'Création de salons marocains sur mesure à Casablanca et dans toutes les grandes villes du Maroc. Capitonnage velours, bois de cèdre, zellige.',
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
        name: 'Salon Marocain Sur Mesure',
        item: `${SITE_URL}/services/salon-marocain`,
      },
    ],
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
          text: 'Le prix d\'un salon marocain sur mesure à Casablanca varie en fonction des dimensions, des matériaux choisis (velours, soie, damas) et de la complexité du capitonnage. Chez Filali Design Co., nos salons marocains débutent à partir de 8 000 MAD pour un salon standard et peuvent atteindre 50 000 MAD ou plus pour des réalisations haut de gamme intégrant du bois de cèdre sculpté et du zellige artisanal. Nous proposons un devis gratuit et personnalisé.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel délai faut-il prévoir pour la fabrication d\'un salon marocain sur mesure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le délai de fabrication d\'un salon marocain sur mesure est généralement de 3 à 6 semaines selon la complexité du projet. Les salons avec bois de cèdre sculpté et intégration de zellige ou de moucharabieh peuvent nécessiter jusqu\'à 8 semaines. Nous livrons partout au Maroc : Casablanca, Rabat, Marrakech, Fès, Tanger et Agadir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels matériaux utilisez-vous pour vos salons marocains ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous sélectionnons exclusivement des matériaux nobles : velours de haute qualité, soie naturelle, tissus en damas, bois de cèdre de l\'Atlas certifié, mousses haute densité (30 à 50 kg/m³), mousses à mémoire de forme pour un confort optimal. Les éléments décoratifs intègrent du zellige authentique, du stuc traditionnel taraouate, et des ornements en cuivre martelé.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des salons marocains contemporains ou uniquement traditionnels ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chez Filali Design Co., nous créons trois styles distincts : le salon marocain traditionnel fidèle aux codes ancestraux (capitonnage losange, bois de cèdre sculpté, zellige), le salon marocain contemporain aux lignes épurées avec des tissus modernes, et le salon fusion qui marie l\'authenticité marocaine aux tendances internationales du design d\'intérieur.',
        },
      },
      {
        '@type': 'Question',
        name: 'Livrez-vous et installez-vous le salon marocain à domicile ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, Filali Design Co. assure la livraison et l\'installation complète à domicile dans tout le Maroc. Notre équipe se déplace à Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir et dans les villes environnantes. Nous coordonnons également avec vos architectes d\'intérieur et maîtres d\'œuvre pour une intégration parfaite dans votre espace.',
        },
      },
    ],
  };

  const expertiseCards = [
    {
      title: 'Capitonnage Velours',
      arabic: 'تنجيد مخملي',
      description:
        'Notre maîtrise du capitonnage en velours de luxe fait la signature de Filali Design Co. depuis 1985. Chaque banquette est réalisée à la main avec des points de capitonnage en losange ou en carré, serrés à la perfection. Nous utilisons du velours importé d\'Italie et de Belgique, ainsi que des velours marocains de haute facture, disponibles dans plus de 200 teintes pour s\'accorder à votre décoration. La mousse haute densité garantit un maintien durable pendant des décennies.',
    },
    {
      title: 'Bois de Cèdre Sculpté',
      arabic: 'خشب الأرز المنحوت',
      description:
        'Le bois de cèdre de l\'Atlas est au cœur de nos créations les plus prestigieuses. Nos artisans menuisiers, formés dans la tradition des maâllems de Fès, sculptent à la main les frises, les corniches et les panneaux décoratifs qui encadrent vos banquettes. Chaque détail — arabesques, motifs géométriques, calligraphie — est tracé puis ciselé selon les canons de l\'artisanat marocain authentique. Le bois est traité contre les insectes et l\'humidité, puis verni ou ciré selon votre préférence.',
    },
    {
      title: 'Zellige & Mosaïque',
      arabic: 'زليج ومسيكة',
      description:
        'L\'intégration de zellige artisanal, de faïence mosaïque et de marbre marocain dans les parties basses de vos salons apporte une dimension patrimoniale incomparable. Nous travaillons avec des maâllems zelligeurs de Fès pour vous proposer des compositions géométriques uniques, des zelliges peints à la main dans les couleurs traditionnelles ou personnalisées. Le résultat est un salon marocain où chaque mètre carré raconte l\'histoire millénaire du savoir-faire marocain.',
    },
  ];

  const salonTypes = [
    {
      type: 'Salon Traditionnel',
      description:
        'Fidèle aux codes de l\'architecture andalouse et hispano-mauresque, le salon marocain traditionnel se distingue par ses banquettes basses capitonnées en velours ou en damas, ses coussins brodés à la main, son plafond en bois de cèdre peint et ses murs ornés de stuc sculpté taraouate. Les teintes dominantes sont le bordeaux, le vert andalou, le bleu de Fès et le doré. C\'est le choix des familles qui souhaitent perpétuer l\'héritage culturel marocain dans leur espace de vie.',
    },
    {
      type: 'Salon Contemporain',
      description:
        'Le salon marocain contemporain réinterprète les codes traditionnels avec un regard moderne. Les lignes sont plus droites, les tissus plus sobres (velours uni, lin texturé, microfibre haut de gamme), et la palette de couleurs s\'étend vers les tons neutres — taupe, gris ardoise, blanc cassé, navy. Les ornements en bois de cèdre sont présents mais stylisés. Ce style s\'intègre parfaitement dans les appartements et les villas à architecture moderne.',
    },
    {
      type: 'Salon Fusion',
      description:
        'Le salon fusion est notre création signature, née de la rencontre entre le meilleur de l\'artisanat marocain et les tendances internationales du design d\'intérieur. Capitonnage en velours, structure en bois de cèdre, mais aussi intégration de pieds chromés, de tissus techniques importés d\'Europe, et d\'éclairages LED intégrés. C\'est le choix des clients qui veulent un salon unique, à la croisée des cultures.',
    },
  ];

  const faqs = faqSchema.mainEntity;

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      <Helmet>
        <title>Salon Marocain Sur Mesure Casablanca | Filali Design</title>
        <meta
          name="description"
          content="Créez votre salon marocain sur mesure à Casablanca avec Filali Design Co. Capitonnage velours, bois de cèdre sculpté, zellige artisanal. Devis gratuit. Livraison partout au Maroc."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/services/salon-marocain`} />
        <meta property="og:title" content="Salon Marocain Sur Mesure Casablanca | Filali Design Co." />
        <meta
          property="og:description"
          content="Créez votre salon marocain sur mesure à Casablanca avec Filali Design Co. Capitonnage velours, bois de cèdre sculpté, zellige artisanal. Devis gratuit."
        />
        <meta property="og:url" content={`${SITE_URL}/services/salon-marocain`} />
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
            صالون مغربي
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-royal text-5xl md:text-7xl text-riad-gold uppercase tracking-widest mb-6"
          >
            Salon Marocain Sur Mesure
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
            Depuis 1985, l'atelier Filali Design Co. perpétue l'art du salon marocain sur mesure à Casablanca. Capitonnage velours, bois de cèdre sculpté, zellige artisanal — chaque pièce est une œuvre unique façonnée à la main par nos maâllems.
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
            <li className="text-riad-gold/80">Salon Marocain Sur Mesure</li>
          </ol>
        </div>
      </nav>

      {/* ── NOTRE EXPERTISE ── */}
      <section className="py-24 border-t border-riad-gold/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Notre Expertise
            </h2>
            <p className="font-elegant text-riad-white/70 max-w-xl mx-auto">
              Quatre décennies de savoir-faire artisanal marocain concentrées dans chaque salon que nous créons.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {expertiseCards.map((card, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border border-riad-gold/20 p-8 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-arabic text-3xl text-riad-gold/40 mb-3 group-hover:text-riad-gold/70 transition-colors duration-500">
                  {card.arabic}
                </p>
                <h3 className="font-royal text-xl text-riad-gold uppercase tracking-widest mb-4">
                  {card.title}
                </h3>
                <p className="font-elegant text-riad-white/70 leading-relaxed text-sm">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPES DE SALONS ── */}
      <section className="py-24 border-t border-riad-gold/20 bg-riad-red/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Types de Salons
            </h2>
            <p className="font-elegant text-riad-white/70 max-w-xl mx-auto">
              Traditionnel, contemporain ou fusion — nous concevons le salon marocain qui correspond à votre vision.
            </p>
          </motion.div>
          <div className="space-y-8">
            {salonTypes.map((salon, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="flex flex-col md:flex-row gap-6 border-b border-riad-gold/20 pb-8 last:border-0 last:pb-0"
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <span className="font-royal text-lg text-riad-gold uppercase tracking-widest">
                    {salon.type}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <p className="font-elegant text-riad-white/75 leading-relaxed">
                    {salon.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS MATÉRIAUX ── */}
      <section className="py-24 border-t border-riad-gold/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Nos Matériaux
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-elegant text-riad-white/75 leading-relaxed text-lg max-w-4xl mx-auto space-y-6"
          >
            <p>
              La qualité d'un salon marocain sur mesure repose avant tout sur la noblesse des matières premières. Chez Filali Design Co., chaque commande commence par une sélection rigoureuse des tissus : <strong className="text-riad-gold">velours de haute qualité</strong> aux reflets lumineux, <strong className="text-riad-gold">soie naturelle</strong> tissée à la main, <strong className="text-riad-gold">damas jacquard</strong> aux motifs floraux et géométriques, et <strong className="text-riad-gold">brocart doré</strong> pour les intérieurs les plus somptueux.
            </p>
            <p>
              Les structures sont réalisées en <strong className="text-riad-gold">bois de cèdre de l'Atlas</strong>, reconnu pour sa résistance naturelle aux insectes et aux champignons. Les artisans menuisiers sculptent à la main les moucharabiehs, les frises et les panneaux selon des techniques transmises de génération en génération depuis les maâllems de Fès. Le <strong className="text-riad-gold">zellige artisanal</strong> et le <strong className="text-riad-gold">stuc taraouate</strong> complètent les soubassements pour une authenticité totale.
            </p>
            <p>
              Le confort est assuré par des mousses haute densité (30 à 50 kg/m³) et des mousses à mémoire de forme, garantissant un maintien optimal pendant des décennies. Tous nos rembourrages respectent les normes européennes d'inflammabilité et de durabilité. Chaque salon marocain livré est accompagné d'un certificat d'origine et d'un guide d'entretien personnalisé.
            </p>
            <p>
              Pour les <strong className="text-riad-gold">salons marocains prix Maroc</strong> accessibles, nous proposons également des gammes en microfibre premium et en cuir écologique, sans compromis sur la qualité du capitonnage ni sur la beauté des ornements sculptés. Notre engagement : un artisanat d'excellence à un prix juste, avec un devis gratuit pour chaque projet.
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
            <p className="font-arabic text-4xl text-riad-gold/50 mb-4">بدون تكلفة</p>
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Obtenez votre Devis Gratuit
            </h2>
            <p className="font-elegant text-riad-white/70 mb-10 max-w-xl mx-auto">
              Décrivez-nous votre projet de salon marocain sur mesure et recevez un devis détaillé sous 24 heures. Livraison partout au Maroc.
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
                to="/blog/salon-marocain-sur-mesure-casablanca"
                className="block border border-riad-gold/20 p-6 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-royal text-sm text-riad-gold uppercase tracking-widest mb-2 group-hover:text-riad-gold-light transition-colors">
                  Guide complet
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Salon Marocain Sur Mesure à Casablanca : Guide 2025
                </p>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link
                to="/blog/salon-marocain-marrakech"
                className="block border border-riad-gold/20 p-6 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-royal text-sm text-riad-gold uppercase tracking-widest mb-2 group-hover:text-riad-gold-light transition-colors">
                  Inspiration
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Les Plus Beaux Salons Marocains de Marrakech
                </p>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
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
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}>
              <Link
                to="/services/rideaux"
                className="block border border-riad-gold/20 p-6 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-royal text-sm text-riad-gold uppercase tracking-widest mb-2 group-hover:text-riad-gold-light transition-colors">
                  Service
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Rideaux Sur Mesure
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

export default SalonMarocain;
