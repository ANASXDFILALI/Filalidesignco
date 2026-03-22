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

const Cuisine: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cuisine Sur Mesure Casablanca — Design & Fabrication',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Filali Design Co.',
      '@id': 'https://filalidesignco.space',
    },
    areaServed: { '@type': 'Country', name: 'Maroc' },
    description:
      'Cuisine sur mesure à Casablanca. Design moderne ou classique, bois massif, laque mat. Fabrication artisanale. Filali Design Co.',
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
        name: 'Cuisine Sur Mesure',
        item: `${SITE_URL}/services/cuisine`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le prix d\'une cuisine sur mesure à Casablanca ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le prix d\'une cuisine sur mesure à Casablanca dépend des matériaux, des dimensions et des équipements intégrés. Chez Filali Design Co., une cuisine équipée sur mesure en MDF laqué mat démarre à partir de 35 000 MAD pour une configuration standard de 6 à 8 mètres linéaires. Les cuisines en bois massif (chêne, noyer, cèdre) débutent à 60 000 MAD. Les projets haut de gamme avec plan de travail en marbre, électroménager encastré et dressing de rangement intégré peuvent atteindre 150 000 MAD et au-delà. Nous proposons un devis gratuit avec plans 3D.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels sont les délais de fabrication d\'une cuisine sur mesure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le délai de fabrication d\'une cuisine sur mesure chez Filali Design Co. est généralement de 6 à 10 semaines à compter de la validation des plans et du choix des matériaux. Ce délai comprend la conception 3D (1 semaine), la fabrication en atelier (4 à 7 semaines) et la pose à domicile (2 à 5 jours selon la complexité). Les projets incluant des éléments sculptés à la main ou des plans de travail en pierre naturelle taillée sur mesure peuvent nécessiter un délai supplémentaire de 2 à 3 semaines. Nous livrons et installons dans tout le Maroc.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle garantie offrez-vous sur vos cuisines sur mesure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Filali Design Co. offre une garantie structurelle de 5 ans sur toutes ses cuisines sur mesure, couvrant les défauts de fabrication, les déformations de panneaux et les dysfonctionnements de ferrures et de quincaillerie. Les plans de travail en stratifié ou en pierre naturelle bénéficient d\'une garantie de 2 ans contre les décollements et les fissures. Le service après-vente est assuré à Casablanca et dans les principales villes du Maroc. Nous assurons également la maintenance annuelle sur demande.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des plans 3D avant fabrication ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, chaque projet de cuisine sur mesure chez Filali Design Co. commence par une phase de conception avec rendu 3D photoréaliste. Après la prise de mesures à domicile, notre bureau d\'études réalise 2 à 3 propositions d\'aménagement avec vues 3D depuis différents angles. Vous visualisez ainsi exactement le résultat final — disposition des meubles, couleurs, matériaux, éclairage intégré — avant toute fabrication. Les modifications sont illimitées jusqu\'à validation définitive du projet. Ce service est inclus dans nos prestations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Intégrez-vous l\'électroménager et la plomberie dans vos cuisines ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, Filali Design Co. coordonne l\'ensemble du projet cuisine : fabrication des meubles sur mesure, intégration de l\'électroménager encastré (four, réfrigérateur, lave-vaisselle, micro-ondes), réalisation du plan de travail, pose de l\'évier et coordination avec les plombiers et électriciens pour les branchements. Nous travaillons avec des partenaires certifiés pour les installations techniques. En tant qu\'interlocuteur unique, nous gérons l\'ensemble du chantier de A à Z pour votre tranquillité, partout au Maroc.',
        },
      },
    ],
  };

  const styleCards = [
    {
      title: 'Cuisine Moderne',
      arabic: 'مطبخ عصري',
      description:
        'La cuisine moderne sur mesure se distingue par ses lignes épurées, ses façades sans poignées (ouverture push-to-open), ses laques mates ou brillantes et ses plans de travail en quartz ou en béton ciré. Notre atelier fabrique des cuisines modernes en MDF laqué dans plus de 200 teintes RAL, avec des ferrures allemandes haut de gamme (Blum, Hettich) garantissant 50 000 cycles d\'ouverture. Îlots centraux, crédences en verre laqué, éclairages LED intégrés sous meubles — chaque détail est pensé pour optimiser l\'espace et le confort à Casablanca.',
    },
    {
      title: 'Cuisine Classique Marocaine',
      arabic: 'مطبخ مغربي كلاسيكي',
      description:
        'La cuisine classique marocaine sur mesure s\'inspire des codes de l\'architecture traditionnelle du Maroc : façades en bois avec moulures sculptées, encadrements en zellige ou en carreaux de ciment, plans de travail en marbre de Meknès ou de Carrare, crédences en faïence peinte à la main. Le bois de cèdre de l\'Atlas et le noyer marocain sont les essences favorites. Ce style intemporel s\'intègre parfaitement dans les riads, les demeures de maître et les villas à architecture andalouse de Marrakech, Fès et Casablanca.',
    },
    {
      title: 'Cuisine Contemporaine',
      arabic: 'مطبخ معاصر',
      description:
        'Entre tradition et modernité, la cuisine contemporaine sur mesure marie des matériaux nobles (bois naturel huilé, laiton brossé, marbre veiné) avec des lignes actuelles. Façades en chêne naturel combinées à des caissons laqués, plans de travail en marbre avec évier sous-vasque, crédences en carreaux zellige géométriques modernes. Ce style est le plus demandé dans les appartements et villas contemporains de Casablanca, Rabat et Marrakech. Prix sur mesure compétitifs avec devis gratuit.',
    },
  ];

  const materialCards = [
    {
      type: 'Bois Massif',
      description:
        'Le bois massif est le matériau le plus noble pour une cuisine sur mesure. Chez Filali Design Co., nous travaillons le chêne européen, le noyer américain, le hêtre massif et le cèdre de l\'Atlas marocain. Chaque façade est taillée dans la masse, usinée avec précision, puis teintée ou huilée à la main pour révéler les veines naturelles du bois. Le bois massif est traité contre l\'humidité (exigence particulière en cuisine) et livré avec une garantie de stabilité dimensionnelle. Un choix durable pour des cuisines qui traversent les générations.',
    },
    {
      type: 'MDF Laqué & Mélaminé',
      description:
        'Le MDF laqué polyuréthane offre un rendu exceptionnel pour les cuisines modernes et contemporaines. Notre atelier dispose d\'une cabine de peinture pour l\'application de laques mates, satinées ou brillantes en toutes teintes RAL. Les panneaux mélaminés de haute qualité (résistance à la rayure classe 5, anti-humidité pour les zones de cuisine) sont disponibles dans plus de 80 décors — bois, béton, pierre, uni. Solution idéale pour un rendu haut de gamme avec un budget maîtrisé à Casablanca.',
    },
    {
      type: 'Plans de Travail',
      description:
        'Le plan de travail est la pièce maîtresse de la cuisine. Nous proposons le marbre naturel (Carrare, Statuaire, Calacatta, marbre marocain de Meknès), le quartz (Silestone, Dekton, Caesarstone), le granit noir Zimbabwe ou beige Sahara, le stratifié haute pression et le bois debout huilé. Chaque plan est découpé sur mesure, avec découpe évier intégrée, bords profilés (chant droit, bord adouci, profil ogive) et traitement hydrofuge. Livraison et pose dans tout le Maroc.',
    },
  ];

  const faqs = faqSchema.mainEntity;

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      <Helmet>
        <title>Cuisine Sur Mesure Casablanca | Filali Design</title>
        <meta
          name="description"
          content="Cuisine sur mesure à Casablanca. Design moderne ou classique, bois massif, laque mat. Fabrication artisanale. Filali Design Co."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/services/cuisine`} />
        <meta property="og:title" content="Cuisine Sur Mesure Casablanca — Design & Fabrication | Filali Design Co." />
        <meta
          property="og:description"
          content="Cuisine sur mesure à Casablanca. Design moderne ou classique, bois massif, laque mat. Fabrication artisanale. Filali Design Co."
        />
        <meta property="og:url" content={`${SITE_URL}/services/cuisine`} />
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
            مطبخ على المقاس
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-royal text-5xl md:text-7xl text-riad-gold uppercase tracking-widest mb-6"
          >
            Cuisine Sur Mesure Casablanca — Design & Fabrication
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
            Depuis 1985, l'atelier Filali Design Co. conçoit et fabrique des cuisines sur mesure à Casablanca. Moderne, classique marocaine ou contemporaine — chaque cuisine est dessinée, fabriquée et posée à la main par nos ébénistes, avec plans 3D offerts.
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
            <li className="text-riad-gold/80">Cuisine Sur Mesure</li>
          </ol>
        </div>
      </nav>

      {/* ── STYLES DE CUISINES ── */}
      <section className="py-24 border-t border-riad-gold/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Nos Styles de Cuisines
            </h2>
            <p className="font-elegant text-riad-white/70 max-w-xl mx-auto">
              Du moderne épuré au classique marocain, nous concevons la cuisine qui correspond à votre mode de vie et à votre intérieur.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {styleCards.map((style, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border border-riad-gold/20 p-8 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-arabic text-3xl text-riad-gold/40 mb-3 group-hover:text-riad-gold/70 transition-colors duration-500">
                  {style.arabic}
                </p>
                <h3 className="font-royal text-xl text-riad-gold uppercase tracking-widest mb-4">
                  {style.title}
                </h3>
                <p className="font-elegant text-riad-white/70 leading-relaxed text-sm">
                  {style.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATÉRIAUX ── */}
      <section className="py-24 border-t border-riad-gold/20 bg-riad-red/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Nos Matériaux
            </h2>
            <p className="font-elegant text-riad-white/70 max-w-xl mx-auto">
              Des matériaux nobles sélectionnés pour leur durabilité, leur esthétique et leur adaptation au climat marocain.
            </p>
          </motion.div>
          <div className="space-y-8">
            {materialCards.map((mat, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="flex flex-col md:flex-row gap-6 border-b border-riad-gold/20 pb-8 last:border-0 last:pb-0"
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <span className="font-royal text-lg text-riad-gold uppercase tracking-widest">
                    {mat.type}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <p className="font-elegant text-riad-white/75 leading-relaxed">
                    {mat.description}
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
              Notre Processus
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-elegant text-riad-white/75 leading-relaxed text-lg max-w-4xl mx-auto space-y-6"
          >
            <p>
              Chaque cuisine sur mesure Filali Design Co. naît d'un processus rigoureux en cinq étapes. Tout commence par une <strong className="text-riad-gold">visite à domicile gratuite</strong> à Casablanca ou dans votre ville : prise de mesures au millimètre, évaluation des contraintes techniques (plomberie, électricité, ventilation), discussion de vos habitudes culinaires et de votre budget.
            </p>
            <p>
              Notre bureau d'études produit ensuite des <strong className="text-riad-gold">plans 3D photoréalistes</strong> sous 5 jours ouvrables, avec plusieurs propositions d'aménagement et de coloris. Une fois le projet validé, la fabrication débute dans notre atelier de Casablanca équipé de machines à commande numérique (CNC) et de compétences d'ébénisterie traditionnelle — les deux se complètent pour une précision et une finition irréprochables.
            </p>
            <p>
              La <strong className="text-riad-gold">pose à domicile</strong> est réalisée par nos équipes dans tout le Maroc, avec coordination des corps de métier (plombier, électricien, carreleur) si nécessaire. Nous assurons un <strong className="text-riad-gold">service après-vente</strong> réactif et une garantie structurelle de 5 ans. <strong className="text-riad-gold">Cuisine sur mesure Casablanca prix</strong> compétitifs — devis gratuit avec plans 3D offerts sous 48 heures.
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
            <p className="font-arabic text-4xl text-riad-gold/50 mb-4">تصميم ثلاثي الأبعاد مجانًا</p>
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Obtenez vos Plans 3D Gratuits
            </h2>
            <p className="font-elegant text-riad-white/70 mb-10 max-w-xl mx-auto">
              Décrivez-nous votre projet de cuisine sur mesure et recevez vos plans 3D et votre devis détaillé sous 48 heures. Déplacement gratuit à Casablanca. Livraison et pose partout au Maroc. Garantie 5 ans.
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
                  Guide Cuisine
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Comment choisir sa cuisine sur mesure à Casablanca : guide complet 2025
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
                  Nos plus belles réalisations de cuisines sur mesure à Casablanca et au Maroc
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
                to="/prix-tarifs"
                className="block border border-riad-gold/20 p-6 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-royal text-sm text-riad-gold uppercase tracking-widest mb-2 group-hover:text-riad-gold-light transition-colors">
                  Tarifs
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Voir nos Tarifs
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

export default Cuisine;
