import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';
import { SITE_URL } from '../../lib/constants';

// ── Schema ────────────────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Salon Marocain Sur Mesure — Guide Complet 2025',
  description:
    'Guide complet 2025 sur le salon marocain sur mesure au Maroc : histoire, styles, matériaux, capitonnage, prix en MAD et conseils pour choisir son artisan tapissier.',
  url: `${SITE_URL}/salon-marocain`,
  author: {
    '@type': 'Organization',
    name: 'Filali Design Co.',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Filali Design Co.',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: '2025-01-01',
  dateModified: '2025-03-01',
  image: `${SITE_URL}/og-salon-marocain.jpg`,
  mainEntityOfPage: `${SITE_URL}/salon-marocain`,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: `Quel est le prix d'un salon marocain sur mesure au Maroc ?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Le prix d'un salon marocain sur mesure varie entre 8 000 et 60 000 MAD selon la superficie, les matériaux (velours, soie, cèdre) et le niveau de finition artisanale. Un salon standard (20–25 m²) coûte entre 12 000 et 25 000 MAD. Contactez Filali Design Co. pour un devis gratuit.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Quels matériaux utilise-t-on pour un salon marocain traditionnel ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Les matériaux nobles d'un salon marocain traditionnel incluent le velours (pour les banquettes capitonnées), le bois de cèdre de l'Atlas sculpté (pour les moulures et les armoires), le zellige (carreaux de céramique émaillée), le stuc ou tadelakt (enduit décoratif), la soie naturelle et le damas brodé.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre un salon marocain traditionnel et contemporain ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le salon marocain traditionnel se distingue par ses formes arquées, ses arabesques, son zellige multicolore et ses boiseries très ornementées. Le salon contemporain conserve les mêmes volumes (banquettes basses, coussins) mais adopte des lignes épurées, des couleurs neutres et des matériaux mixtes (velours + laiton + marbre). Le salon fusion combine les deux approches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment choisir un artisan tapissier pour son salon marocain ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour choisir un artisan tapissier fiable au Maroc, vérifiez son portfolio de réalisations, demandez des références clients, visitez son atelier si possible, et obtenez un devis écrit détaillant les matériaux, les dimensions et les délais. Méfiez-vous des prix trop bas qui cachent souvent des matériaux de mauvaise qualité.',
      },
    },
    {
      '@type': 'Question',
      name: `Quels sont les délais de fabrication d'un salon marocain ?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les délais varient entre 3 et 8 semaines selon la complexité du projet. Un salon simple avec banquettes en velours prend environ 3 à 4 semaines. Un salon complet avec boiseries sculptées, zellige et accessoires sur mesure peut nécessiter 6 à 8 semaines. Filali Design Co. communique un calendrier précis lors de chaque devis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on avoir un salon marocain dans un petit espace ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Oui, absolument. Un salon marocain peut s'adapter à des espaces à partir de 12 m². L'astuce est d'utiliser des banquettes modulables, des couleurs claires (blanc cassé, beige doré), des miroirs pour agrandir visuellement l'espace, et de limiter les éléments décoratifs au strict essentiel. Nos artisans vous conseillent sur les meilleures solutions pour votre superficie.`,
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Salon Marocain', item: `${SITE_URL}/salon-marocain` },
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────────

const styles = [
  {
    title: 'Style Traditionnel',
    description:
      `Le salon marocain traditionnel est l'expression la plus pure de l'artisanat ancestral. Formes arquées inspirées de l'architecture moudéjar, arabesques sculptées dans le stuc, zellige multicolore en soubassement, plafond à caissons en cèdre peint à la main. Les banquettes sont basses (40–45 cm), larges, recouvertes de tissu brodé ou de velours dense. Les coussins (matabia) sont empilés avec soin, chacun brodé au fil d'or ou d'argent.`,
    icon: '✦',
  },
  {
    title: 'Style Contemporain',
    description:
      'Le salon marocain contemporain conserve la générosité des volumes et la disposition des banquettes en U ou en L, mais simplifie radicalement le décor. Lignes droites, couleurs neutres (off-white, gris clair, bleu nuit), velours uni sans surcharge décorative, touches de laiton brossé et de marbre blanc. Ce style est particulièrement plébiscité dans les appartements modernes de Casablanca, Rabat ou Agadir.',
    icon: '◈',
  },
  {
    title: 'Style Fusion',
    description:
      `Le style fusion est la grande tendance de 2025 : il marie le meilleur des deux mondes. Une base contemporaine (couleurs sobres, lignes épurées) rehaussée d'éléments traditionnels sélectionnés avec soin — un panneau de zellige géométrique, une arche en stuc blanc, un lustre en verre soufflé de Marrakech, des plateaux laiton ciselés. Le résultat est un espace à la fois intemporel et actuel.`,
    icon: '◉',
  },
];

const materiaux = [
  {
    nom: 'Velours',
    description:
      'Le velours est le tissu roi du salon marocain. Sa profondeur de couleur, son toucher soyeux et sa durabilité en font le choix numéro un pour les banquettes capitonnées. Filali Design Co. travaille avec des velours français et italiens de 380 à 600 g/m², disponibles en plus de 80 coloris.',
  },
  {
    nom: 'Bois de Cèdre',
    description:
      `Le cèdre de l'Atlas est le bois noble par excellence de l'artisanat marocain. Naturellement parfumé, résistant aux insectes et aux variations hygrométriques, il est sculpté à la main par nos menuisiers pour réaliser moulures, panneaux de boiserie, portes intérieures et plafonds à caissons.`,
  },
  {
    nom: 'Zellige',
    description:
      `Les carreaux de zellige sont fabriqués artisanalement à Fès depuis le XIVe siècle. Chaque tesselle est taillée à la main dans une plaquette d'argile émaillée, puis assemblée selon des motifs géométriques d'une précision mathématique. Le zellige habille les soubassements et niches du salon marocain.`,
  },
  {
    nom: 'Stuc & Tadelakt',
    description:
      'Le stuc marocain (jeps) permet de créer des décors muraux en bas-relief : arabesques florales, calligraphies, frises géométriques. Le tadelakt, enduit à base de chaux et de savon noir, offre un fini satiné et hydrofuge idéal pour les niches et les encadrements de fenêtres.',
  },
  {
    nom: 'Soie & Damas',
    description:
      `La soie naturelle et le damas brodé apportent une dimension précieuse aux coussins et aux rideaux du salon marocain. Ces tissus, souvent importés d'Italie ou travaillés dans les ateliers fassistes, reflètent la lumière avec une intensité incomparable et confèrent une aura de luxe à l'ensemble de la pièce.`,
  },
  {
    nom: 'Laiton & Cuivre',
    description:
      `Les tables basses, les plateaux de service (siniya) et les éléments décoratifs en laiton martelé ou en cuivre repoussé sont indissociables du salon marocain authentique. Ciselés à la main par des artisans de Fès ou de Marrakech, ils apportent chaleur et brillance à l'ensemble.`,
  },
];

const techniquesCapitonnage = [
  {
    nom: 'Capitonnage Losange (Matelassé)',
    description:
      `La technique la plus emblématique du salon marocain contemporain. Le tissu est piqué en motifs de losanges réguliers, chaque intersection étant marquée d'un bouton en laiton ou d'un clou doré. Cette technique requiert une précision millimétrée dans le traçage et une maîtrise parfaite de la tension du tissu.`,
  },
  {
    nom: 'Capitonnage Carré',
    description:
      'Variante plus contemporaine du capitonnage losange, le motif carré donne un aspect plus architectural et rigoureux. Très apprécié dans les salons marocains minimalistes et les espaces hôteliers, il se réalise généralement dans des velours de couleur unie — bleu marine, bordeaux profond ou vert sauge.',
  },
  {
    nom: 'Finition Clous Dorés',
    description:
      'La pose de clous dorés (ou argentés) en bordure de banquette est une technique artisanale traditionnelle qui finalise et encadre le travail de tapisserie. Les clous, posés au marteau un à un à espacement régulier, constituent un décor sobre mais élégant qui scelle le tissu sur le châssis en bois.',
  },
];

const budgets = [
  {
    gamme: 'Entrée de Gamme',
    fourchette: '8 000 – 15 000 MAD',
    detail:
      'Banquettes simples en tissu polyester ou microfibre, boiseries basiques peintes, coussins assortis. Idéal pour un espace de 15–20 m² avec un budget maîtrisé.',
  },
  {
    gamme: 'Milieu de Gamme',
    fourchette: '15 000 – 30 000 MAD',
    detail:
      'Velours importé de qualité, capitonnage losange ou carré, boiseries en MDF moulé ou cèdre massif simple, zellige de soubassement, table basse en bois. Pour un salon de 20–30 m².',
  },
  {
    gamme: 'Haut de Gamme',
    fourchette: '30 000 – 60 000 MAD',
    detail:
      `Velours français ou italien grand teint, cèdre de l'Atlas sculpté à la main, zellige de Fès artisanal, stuc décoratif, soie pour les coussins, table laiton ciselé, éclairage intégré. Pour un salon de 25–40 m².`,
  },
  {
    gamme: 'Prestige & Sur Mesure',
    fourchette: '60 000 MAD et plus',
    detail:
      `Création exclusive sans compromis : matériaux de provenance certifiée, sculpture sur commande, mosaïque de zellige personnalisée, soie naturelle, dorure à la feuille. Réservé aux riads de luxe, palais et résidences d'exception.`,
  },
];

const faqs = [
  {
    q: `Quel est le prix d'un salon marocain sur mesure au Maroc ?`,
    a: 'Le prix varie entre 8 000 et 60 000 MAD selon la superficie, les matériaux et le niveau de finition. Un salon standard (20–25 m²) coûte entre 12 000 et 25 000 MAD. Pour un projet prestige (riad, villa), le budget peut largement dépasser ce montant. Filali Design Co. propose des devis gratuits et des solutions adaptées à chaque budget.',
  },
  {
    q: 'Quels matériaux utilise-t-on pour un salon marocain traditionnel ?',
    a: `Les matériaux nobles incluent le velours pour les banquettes capitonnées, le bois de cèdre de l'Atlas sculpté, le zellige de Fès (carreaux de céramique émaillée), le stuc ou tadelakt pour les décors muraux, la soie naturelle et le damas brodé pour les coussins, ainsi que le laiton martelé pour les tables et plateaux.`,
  },
  {
    q: 'Quelle est la différence entre salon marocain traditionnel et contemporain ?',
    a: 'Le traditionnel se distingue par ses formes arquées, ses arabesques et son zellige coloré. Le contemporain conserve les volumes (banquettes basses, disposition en U) mais adopte des lignes épurées, des couleurs neutres et des matériaux mixtes. Le style fusion, tendance en 2025, combine les deux approches avec subtilité.',
  },
  {
    q: 'Comment choisir un artisan tapissier de confiance pour son salon marocain ?',
    a: `Vérifiez le portfolio de réalisations, demandez des références clients, visitez l'atelier si possible, et obtenez un devis écrit détaillant matériaux, dimensions et délais. Méfiez-vous des devis très bas qui cachent souvent des matériaux de qualité médiocre. Un bon artisan tapissier marocain sera transparent sur ses méthodes et ses fournisseurs.`,
  },
  {
    q: `Quels sont les délais de fabrication d'un salon marocain ?`,
    a: 'Entre 3 et 8 semaines selon la complexité. Un salon simple avec banquettes velours prend 3 à 4 semaines. Un salon complet avec boiseries sculptées, zellige et accessoires personnalisés nécessite 6 à 8 semaines. Chez Filali Design Co., nous vous communiquons un calendrier précis lors de la visite de prise de mesure.',
  },
  {
    q: 'Peut-on aménager un salon marocain dans un petit appartement ?',
    a: `Oui. Un salon marocain s'adapte à partir de 12 m². Optez pour des banquettes modulables, des couleurs claires (blanc cassé, beige doré), des miroirs pour agrandir visuellement l'espace, et limitez les éléments décoratifs à quelques pièces sélectionnées. Nos artisans vous guident pour maximiser l'impact dans chaque superficie.`,
  },
  {
    q: 'Livrez-vous et installez-vous dans tout le Maroc ?',
    a: `Oui. Filali Design Co. intervient à Casablanca, Marrakech, Rabat, Agadir, Fès, Tanger et dans les principales villes du Royaume. La livraison et l'installation sont incluses dans chaque devis. Contactez-nous pour confirmer votre secteur.`,
  },
];

// ── Animations ────────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// ── Component ─────────────────────────────────────────────────────────────────

const SalonMarocainPilier: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      {/* ── SEO ── */}
      <Helmet>
        <title>Salon Marocain Sur Mesure Maroc 2025 | Filali Design</title>
        <meta
          name="description"
          content="Guide complet 2025 sur le salon marocain sur mesure : styles, matériaux (velours, cèdre, zellige), techniques de capitonnage, prix en MAD et conseils pour choisir votre artisan tapissier au Maroc."
        />
        <meta
          name="keywords"
          content="salon marocain sur mesure, salon marocain prix, salon marocain traditionnel, salon marocain contemporain, capitonnage velours, zellige salon marocain, artisan salon marocain maroc"
        />
        <link rel="canonical" href={`${SITE_URL}/salon-marocain`} />
        <meta property="og:title" content="Salon Marocain Sur Mesure | Guide Complet 2025 — Filali Design Co." />
        <meta
          property="og:description"
          content="Tout savoir sur le salon marocain sur mesure : styles, matériaux, prix et conseils artisans. Guide complet 2025 par Filali Design Co."
        />
        <meta property="og:url" content={`${SITE_URL}/salon-marocain`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
              <span className="text-riad-gold">Salon Marocain</span>
            </nav>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-arabic text-4xl text-riad-gold/60 mb-4"
            >
              الصالون المغربي
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-royal text-5xl sm:text-6xl md:text-7xl uppercase tracking-[0.1em] text-riad-white mb-6"
            >
              Salon Marocain<br />
              <span className="text-riad-gold">Sur Mesure</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-elegant text-xl text-riad-white/70 mb-4 max-w-2xl mx-auto"
            >
              Guide Complet 2025
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-elegant text-base text-riad-white/50 mb-10 max-w-3xl mx-auto"
            >
              Histoire, styles, matériaux, techniques de capitonnage, accessoires, prix en MAD
              et conseils pour choisir votre artisan tapissier. Tout ce qu'il faut savoir
              avant de créer votre salon marocain au Maroc.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-riad-gold text-riad-blue font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold-light transition-all duration-500"
              >
                Devis Gratuit
              </Link>
              <Link
                to="#faq"
                className="inline-block px-8 py-4 border border-riad-gold/40 text-riad-gold font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold hover:text-riad-blue transition-all duration-500"
              >
                Questions Fréquentes
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Introduction & Histoire ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              Qu'est-ce qu'un Salon Marocain ?
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/70 leading-relaxed space-y-5 text-base"
            >
              <p>
                Le <strong className="text-riad-gold/90">salon marocain</strong> — ou
                <em> beit des'youl</em> en darija — est bien plus qu'un simple espace
                d'assise. C'est le cœur symbolique de la maison marocaine, le lieu où
                l'on reçoit les invités avec les honneurs, où l'on sert le thé à la menthe
                cérémoniel, où l'on célèbre les grandes étapes de la vie familiale.
                Mariages, fiançailles, naissances, fêtes religieuses — tous ces moments
                se vivent dans le salon marocain.
              </p>
              <p>
                Son origine remonte à l'Andalousie médiévale. Lorsque les musulmans et
                les juifs d'Espagne furent expulsés au XVe siècle, ils apportèrent avec
                eux un raffinement architectural et décoratif sans équivalent : le zellige
                géométrique, l'arabesque sculptée dans le stuc, les plafonds à caissons
                en cèdre peint, les arches polylobées. Ces éléments, fusionnés avec
                les traditions berbères et les influences orientales, donnèrent naissance
                à ce que l'on appelle aujourd'hui l'art intérieur marocain — dont le
                <strong className="text-riad-gold/90"> salon marocain sur mesure</strong> est
                l'expression la plus aboutie.
              </p>
              <p>
                Aujourd'hui, le salon marocain connaît un véritable renouveau. Les jeunes
                générations le réinterprètent en y intégrant des codes contemporains tout
                en préservant l'essence de la tradition : la générosité des volumes,
                la qualité des matériaux artisanaux, et l'hospitalité comme valeur suprême.
                C'est précisément à cet équilibre délicat que Filali Design Co. œuvre
                depuis des décennies — créer des salons marocains qui honorent le passé
                tout en parlant le langage du présent.
              </p>
              <p>
                Ce guide vous accompagnera dans votre projet : des styles aux matériaux,
                des techniques de capitonnage aux fourchettes de prix, en passant par
                les accessoires indispensables et les conseils pour choisir votre artisan
                tapissier au Maroc. Prenez le temps de le lire — votre salon marocain
                le mérite.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Styles ── */}
        <section className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Les Styles de Salon Marocain
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-2xl mx-auto mb-14"
            >
              Du salon marocain le plus traditionnel au plus contemporain, chaque style
              a ses codes, ses matériaux de prédilection et ses partisans.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-6">
              {styles.map((style, idx) => (
                <motion.div
                  key={style.title}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 border border-riad-gold/20 bg-riad-white/[0.02]"
                >
                  <span className="text-2xl text-riad-gold mb-4 block">{style.icon}</span>
                  <h3 className="font-royal text-lg uppercase tracking-widest text-riad-white mb-4">
                    {style.title}
                  </h3>
                  <p className="font-elegant text-sm text-riad-white/60 leading-relaxed">
                    {style.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 text-center"
            >
              <Link
                to="/blog/tendances-salon-marocain-2025"
                className="inline-block px-6 py-3 border border-riad-gold/40 font-royal text-xs uppercase tracking-[0.2em] text-riad-gold hover:bg-riad-gold hover:text-riad-blue transition-all duration-500"
              >
                Tendances 2025 : notre article complet
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Matériaux ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              Les Matériaux du Salon Marocain
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 mb-12"
            >
              Le choix des matériaux est déterminant. Il conditionne la durabilité,
              l'esthétique et le coût de votre salon marocain sur mesure. Voici les
              six matériaux nobles incontournables.
            </motion.p>

            <div className="space-y-6">
              {materiaux.map((mat, idx) => (
                <motion.div
                  key={mat.nom}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex gap-6 p-6 border border-riad-gold/15 bg-riad-white/[0.02]"
                >
                  <span className="text-riad-gold/50 font-royal text-3xl flex-shrink-0 pt-1">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-royal text-base uppercase tracking-wider text-riad-gold mb-2">
                      {mat.nom}
                    </h3>
                    <p className="font-elegant text-sm text-riad-white/60 leading-relaxed">
                      {mat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/blog/zellige-marocain-guide-complet"
                className="inline-flex items-center gap-2 font-elegant text-sm text-riad-gold/80 hover:text-riad-gold transition-colors"
              >
                → Guide complet du zellige marocain
              </Link>
              <Link
                to="/blog/bois-cedre-atlas-mobilier-marocain"
                className="inline-flex items-center gap-2 font-elegant text-sm text-riad-gold/80 hover:text-riad-gold transition-colors"
              >
                → Bois de cèdre Atlas dans le mobilier marocain
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Capitonnage ── */}
        <section className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              Le Capitonnage : Techniques Artisanales
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/70 leading-relaxed space-y-4 text-base mb-12"
            >
              <p>
                Le capitonnage est l'art de traiter la surface d'une banquette ou d'un
                dossier en y créant des motifs en relief par la couture et les boutons.
                C'est une technique héritée de la tapisserie européenne du XVIIIe siècle,
                adoptée et réinterprétée dans le salon marocain pour lui donner une richesse
                visuelle et tactile inégalée. Chez Filali Design Co., le capitonnage est
                une spécialité maison, maîtrisée par nos artisans après des années
                d'apprentissage.
              </p>
              <p>
                Il existe plusieurs techniques de capitonnage, chacune donnant un rendu
                visuel distinct. Le choix dépend du style souhaité (traditionnel, contemporain,
                fusion), du tissu utilisé et de l'architecture de la pièce.
              </p>
            </motion.div>

            <div className="space-y-6">
              {techniquesCapitonnage.map((tech, idx) => (
                <motion.div
                  key={tech.nom}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 border border-riad-gold/20 bg-riad-white/[0.01]"
                >
                  <h3 className="font-royal text-base uppercase tracking-wider text-riad-gold mb-3">
                    {tech.nom}
                  </h3>
                  <p className="font-elegant text-sm text-riad-white/60 leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to="/blog/capitonnage-velours-technique-artisanale"
                className="inline-flex items-center gap-2 font-elegant text-sm text-riad-gold/80 hover:text-riad-gold transition-colors"
              >
                → Article complet : Capitonnage velours — la technique artisanale
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Accessoires ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              Les Accessoires Indispensables
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/70 leading-relaxed space-y-5 text-base"
            >
              <p>
                Le salon marocain ne se résume pas à ses banquettes. C'est un ensemble
                cohérent où chaque accessoire joue un rôle précis dans la composition
                visuelle et dans le confort d'usage. Voici les incontournables :
              </p>
              <div className="space-y-4">
                <div className="pl-6 border-l-2 border-riad-gold/30">
                  <h3 className="font-royal text-sm uppercase tracking-widest text-riad-gold mb-2">
                    Coussins Brodés (Matabia)
                  </h3>
                  <p className="font-elegant text-sm text-riad-white/60 leading-relaxed">
                    Les coussins marocains sont disposés en pyramide le long des banquettes.
                    Ils sont confectionnés dans des tissus précieux — soie, velours, brocart —
                    et brodés à la main de motifs géométriques ou floraux au fil d'or.
                    Leur arrangement est un art en soi : couleurs alternées, formats variés,
                    galon doré en bordure.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-riad-gold/30">
                  <h3 className="font-royal text-sm uppercase tracking-widest text-riad-gold mb-2">
                    Poufs & Ottomans
                  </h3>
                  <p className="font-elegant text-sm text-riad-white/60 leading-relaxed">
                    Le pouf marocain en cuir de chèvre naturel tanné est un accessoire
                    traditionnel indémodable. Brodé de fils de soie colorés selon des
                    motifs de Fès, il sert à la fois de repose-pieds, de table d'appoint
                    et de siège d'appoint pour les enfants. Nos artisans proposent également
                    des ottomans capitonnés assortis aux banquettes.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-riad-gold/30">
                  <h3 className="font-royal text-sm uppercase tracking-widest text-riad-gold mb-2">
                    Tables Basses en Bois
                  </h3>
                  <p className="font-elegant text-sm text-riad-white/60 leading-relaxed">
                    La table basse marocaine traditionnelle est en bois de thuya, essence
                    endémique du Maroc au grain figuré et au parfum persistant. Elle peut
                    prendre la forme d'une table ronde à plateau mosaïque de zellige,
                    d'une table rectangulaire sculptée ou d'un ensemble de tables gigognes.
                    Le laiton ciselé est l'alternative contemporaine la plus prisée.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-riad-gold/30">
                  <h3 className="font-royal text-sm uppercase tracking-widest text-riad-gold mb-2">
                    Éclairage : Lustre & Lanternes
                  </h3>
                  <p className="font-elegant text-sm text-riad-white/60 leading-relaxed">
                    L'éclairage transforme un salon marocain. Le lustre en verre soufflé
                    de Marrakech — verre coloré (vert, bleu, ambre) serti dans une armature
                    en laiton travaillé — diffuse une lumière chaude et tamisée qui magnifie
                    le velours des banquettes et fait scintiller le zellige. Les lanternes
                    en cuivre perforé posées au sol complètent l'ambiance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Prix & Budget ── */}
        <section className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              Prix & Budget — Salon Marocain au Maroc
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 mb-12"
            >
              Les fourchettes de prix ci-dessous sont exprimées en dirhams marocains (MAD)
              et concernent un salon complet (banquettes + coussins + table basse + pose).
              Elles sont données à titre indicatif — chaque projet est unique.
            </motion.p>

            <div className="space-y-4">
              {budgets.map((b, idx) => (
                <motion.div
                  key={b.gamme}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col sm:flex-row gap-4 p-6 border border-riad-gold/20 bg-riad-white/[0.02]"
                >
                  <div className="sm:w-48 flex-shrink-0">
                    <p className="font-royal text-sm uppercase tracking-widest text-riad-gold mb-1">
                      {b.gamme}
                    </p>
                    <p className="font-royal text-xl text-riad-white">
                      {b.fourchette}
                    </p>
                  </div>
                  <p className="font-elegant text-sm text-riad-white/60 leading-relaxed sm:border-l sm:border-riad-gold/20 sm:pl-6">
                    {b.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                to="/prix-tarifs"
                className="inline-block px-6 py-3 border border-riad-gold/40 font-royal text-xs uppercase tracking-[0.2em] text-riad-gold hover:bg-riad-gold hover:text-riad-blue transition-all duration-500"
              >
                Voir tous nos tarifs détaillés
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Comment choisir son artisan ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6"
            >
              Comment Choisir son Artisan Tapissier ?
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/70 leading-relaxed space-y-5 text-base"
            >
              <p>
                Le marché de l'artisanat intérieur marocain est dense : des milliers
                d'ateliers opèrent dans tout le Royaume, avec des niveaux de qualité
                extrêmement variables. Choisir son artisan tapissier pour un salon
                marocain sur mesure est une décision importante — c'est lui qui
                transformera votre espace de vie pour des décennies. Voici les critères
                déterminants.
              </p>
              <div className="space-y-4">
                {[
                  {
                    titre: '1. Vérifiez le portfolio de réalisations',
                    texte: `Un artisan tapissier sérieux dispose d'un portfolio photographique de ses réalisations récentes. Demandez à voir des projets similaires au vôtre — en termes de style, de superficie et de budget. Si l'artisan ne peut pas vous montrer de références concrètes, passez votre chemin.`,
                  },
                  {
                    titre: `2. Visitez l'atelier si possible`,
                    texte: `Un atelier bien tenu, propre, avec des matériaux correctement stockés et des outils en bon état est un indicateur de sérieux. Lors de la visite, vous pourrez également toucher et tester les tissus proposés, voir les châssis en bois utilisés et évaluer la qualité des finitions sur des pièces en cours.`,
                  },
                  {
                    titre: '3. Obtenez un devis écrit détaillé',
                    texte: 'Le devis doit mentionner les dimensions précises de chaque banquette, les références des tissus (grammage, origine, coloris), le type de garnissage (mousse polyuréthane, ouate, ressorts), les finitions (capitonnage, type de clous, bois peint ou verni), les délais et les conditions de paiement. Fuyez les devis verbaux.',
                  },
                  {
                    titre: '4. Méfiez-vous des prix anormalement bas',
                    texte: `Un salon marocain de qualité a un coût. Des prix très inférieurs aux fourchettes de marché cachent presque toujours des compromis : tissus bas de gamme, mousse de mauvaise qualité qui s'affaisse rapidement, boiseries en aggloméré non traité, finitions bâclées. L'économie réalisée à l'achat se paie en remplacement prématuré.`,
                  },
                  {
                    titre: `5. Privilégiez la communication et l'écoute`,
                    texte: `Un bon artisan tapissier vous pose des questions : vos habitudes de vie, la fréquence d'utilisation du salon, votre style préféré, vos couleurs de prédilection, les contraintes architecturales. Il vous conseille sans vous imposer, présente des alternatives et adapte sa proposition à votre réalité. C'est un signe de professionnalisme.`,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    className="pl-6 border-l-2 border-riad-gold/30"
                  >
                    <h3 className="font-royal text-sm uppercase tracking-widest text-riad-gold mb-2">
                      {item.titre}
                    </h3>
                    <p className="font-elegant text-sm text-riad-white/60 leading-relaxed">
                      {item.texte}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                to="/blog/tapissier-casablanca-choisir"
                className="inline-flex items-center gap-2 font-elegant text-sm text-riad-gold/80 hover:text-riad-gold transition-colors"
              >
                → Guide complet : Comment choisir son tapissier au Maroc
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Liens internes par ville ── */}
        <section className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-5xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Salon Marocain Sur Mesure — Par Ville
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-2xl mx-auto mb-12"
            >
              Filali Design Co. intervient dans toutes les grandes villes du Maroc.
              Retrouvez notre présence et nos réalisations dans votre région.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Salon Marocain à Casablanca', href: '/casablanca', sub: 'Anfa, Gauthier, Ain Diab, Maarif' },
                { label: 'Salon Marocain à Marrakech', href: '/marrakech', sub: 'Médina, Guéliz, Hivernage, Palmeraie' },
                { label: 'Salon Marocain à Rabat', href: '/rabat', sub: 'Agdal, Hay Riad, Souissi, Hassan' },
              ].map((city, idx) => (
                <motion.div
                  key={city.href}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link
                    to={city.href}
                    className="group block p-6 border border-riad-gold/20 hover:border-riad-gold/60 bg-riad-white/[0.02] hover:bg-riad-white/[0.05] transition-all duration-500"
                  >
                    <h3 className="font-royal text-sm uppercase tracking-wider text-riad-white group-hover:text-riad-gold transition-colors mb-2">
                      {city.label}
                    </h3>
                    <p className="font-elegant text-xs text-riad-white/40 mb-3">{city.sub}</p>
                    <span className="font-elegant text-xs text-riad-gold uppercase tracking-widest">
                      Voir →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Articles Blog ── */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Articles de Référence
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-elegant text-riad-white/60 text-center max-w-xl mx-auto mb-12"
            >
              Approfondissez chaque aspect du salon marocain avec nos articles détaillés.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Salon Marocain Sur Mesure à Casablanca', href: '/blog/salon-marocain-sur-mesure-casablanca' },
                { label: 'Salon Marocain à Marrakech — Réalisation', href: '/blog/salon-marocain-marrakech' },
                { label: 'Tendances Salon Marocain 2025', href: '/blog/tendances-salon-marocain-2025' },
                { label: 'Capitonnage Velours — Technique Artisanale', href: '/blog/capitonnage-velours-technique-artisanale' },
                { label: 'Bois de Cèdre Atlas dans le Mobilier Marocain', href: '/blog/bois-cedre-atlas-mobilier-marocain' },
                { label: 'Zellige Marocain — Guide Complet', href: '/blog/zellige-marocain-guide-complet' },
                { label: 'Choisir son Tapissier au Maroc', href: '/blog/tapissier-casablanca-choisir' },
              ].map((link, idx) => (
                <motion.div
                  key={link.href}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
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
        <section id="faq" className="py-20 px-6 bg-riad-white/[0.02] border-y border-riad-gold/10">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="font-royal text-2xl sm:text-3xl uppercase tracking-[0.15em] text-riad-gold mb-6 text-center"
            >
              Questions Fréquentes — Salon Marocain
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
              Prêt à Créer<br />
              <span className="text-riad-gold">Votre Salon Marocain ?</span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-elegant text-riad-white/60 mb-10 max-w-xl mx-auto"
            >
              Nos artisans se déplacent chez vous pour une consultation gratuite.
              Mesurage, conseil en matériaux, présentation d'échantillons et devis
              détaillé — entièrement offerts, sans engagement.
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
                Demander un Devis Gratuit
              </Link>
              <Link
                to="/services/salon-marocain"
                className="inline-block px-8 py-4 border border-riad-gold/40 text-riad-gold font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold hover:text-riad-blue transition-all duration-500"
              >
                Notre Service Salon Marocain
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default SalonMarocainPilier;
