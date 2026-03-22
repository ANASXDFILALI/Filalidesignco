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

const Tapisserie: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tapissier Casablanca — Sur Mesure & Rénovation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Filali Design Co.',
      '@id': 'https://filalidesignco.space',
    },
    areaServed: { '@type': 'Country', name: 'Maroc' },
    description:
      'Tapissier professionnel à Casablanca. Rénovation canapés, capitonnage velours, restauration fauteuils et chaises. Devis gratuit. Filali Design Co. depuis 1985.',
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
        name: 'Tapissier Casablanca',
        item: `${SITE_URL}/services/tapisserie`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le prix d\'un tapissier à Casablanca ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le prix d\'un tapissier à Casablanca varie selon le type de meuble et le tissu choisi. Chez Filali Design Co., la rénovation d\'un canapé 3 places démarre à partir de 2 500 MAD avec un tissu standard, et peut atteindre 8 000 MAD ou plus pour un velours de luxe ou un cuir pleine fleur. La restauration d\'un fauteuil commence à 800 MAD. Nous proposons systématiquement un devis gratuit à domicile pour évaluer l\'état du meuble et définir les travaux nécessaires.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels sont les délais pour une rénovation de canapé ou fauteuil ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le délai de rénovation dépend de la complexité des travaux. Une retapisserie simple d\'un fauteuil est réalisée en 5 à 7 jours ouvrables. La rénovation complète d\'un canapé avec capitonnage prend 10 à 15 jours. Pour des projets de grande envergure — jeu complet de salon, rembourrage de chaises de salle à manger — comptez 3 à 4 semaines. Nous livrons et récupérons vos meubles partout à Casablanca et dans les principales villes du Maroc.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels tissus utilisez-vous pour la tapisserie ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Notre catalogue comprend plus de 300 références de tissus : velours de luxe (Italie, Belgique, Maroc), cuir pleine fleur et cuir reconstitué, microfibre haute résistance, lin naturel, coton texturé, damas jacquard, soie pour les pièces d\'apparat. Nous sélectionnons des tissus adaptés à l\'usage (famille avec enfants, usage professionnel, décoration de prestige) et aux contraintes techniques du meuble. Tous nos tissus sont testés pour la résistance à l\'abrasion et à la décoloration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on rénover un vieux canapé ou vaut-il mieux en acheter un neuf ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La rénovation est souvent la meilleure option pour des meubles de qualité : structure en bois massif, canapés de marque, meubles anciens à valeur sentimentale. Chez Filali Design Co., nous diagnostiquons l\'état de la structure, des ressorts et de la mousse. Si la structure est saine, une retapisserie complète redonne une seconde vie au meuble à 30 à 50 % du prix d\'un neuf équivalent. Nous remplaçons également les mousses usées par des mousses haute densité neuves pour un confort retrouvé.',
        },
      },
      {
        '@type': 'Question',
        name: 'Intervenez-vous hors de Casablanca ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, Filali Design Co. intervient dans tout le Maroc. Nous récupérons et livrons vos meubles à Rabat, Marrakech, Fès, Tanger, Agadir et dans les villes avoisinantes. Pour les projets volumineux ou les commandes professionnelles (hôtels, restaurants, bureaux), nous organisons la logistique complète depuis notre atelier de Casablanca. Contactez-nous pour un devis incluant les frais de transport.',
        },
      },
    ],
  };

  const expertiseCards = [
    {
      title: 'Rénovation Canapés',
      arabic: 'تجديد الكنب',
      description:
        'Spécialistes de la rénovation de canapés à Casablanca depuis 1985, nos tapissiers redonnent vie à vos sièges en remplaçant tissus usés, mousses affaissées et ressorts déformés. Nous intervenons sur tous types de canapés : 2 places, 3 places, d\'angle, convertibles, canapés marocains. Chaque pièce est démontée, nettoyée, réparée en structure si nécessaire, puis retapissée avec le tissu de votre choix parmi nos 300 références. Résultat garanti pendant 2 ans.',
    },
    {
      title: 'Capitonnage Velours',
      arabic: 'تنجيد المخمل',
      description:
        'Le capitonnage est l\'art du tapissier dans ce qu\'il a de plus noble. Nos artisans maîtrisent le capitonnage losange, carré et en éventail, réalisé à la main avec du fil de soie ou de coton de haute qualité. Nous utilisons des clous tapissiers dorés, argentés ou noirs pour parfaire les finitions. Le capitonnage velours est particulièrement prisé pour les têtes de lit, les banquettes de salon marocain, les fauteuils d\'apparat et les meubles d\'entrée. Chaque bouton est réalisé sur mesure et posé à la main.',
    },
    {
      title: 'Restauration Fauteuils & Chaises',
      arabic: 'ترميم الكراسي',
      description:
        'La restauration de fauteuils anciens et de chaises de salle à manger est l\'une de nos prestations phares. Nous intervenons sur les fauteuils de style Louis XV, Louis XVI, Directoire, Empire et Art Déco, en respectant les techniques traditionnelles d\'encollage et de tressage. Pour les chaises de salle à manger, nous proposons la retapisserie à l\'identique ou avec modernisation du tissu. Nous restaurons également les pieds en bois (dorure, laque, bois naturel ciré) pour un résultat harmonieux.',
    },
  ];

  const workTypes = [
    {
      type: 'Rembourrage & Mousse',
      description:
        'Le rembourrage est le cœur du confort de votre siège. Nous remplaçons les mousses polyuréthane affaissées par des mousses haute densité (30 à 50 kg/m³) ou des mousses à mémoire de forme pour un confort orthopédique. La ouate de garnissage est renouvelée pour retrouver les formes d\'origine. Pour les meubles de collection ou les fauteuils anciens, nous utilisons le crin végétal et la laine de mouton selon les techniques traditionnelles de la tapisserie française.',
    },
    {
      type: 'Sellerie Automobile & Marine',
      description:
        'Notre atelier propose également des prestations de sellerie automobile et marine à Casablanca. Retapisserie de sièges de voiture en cuir pleine fleur ou en alcantara, réfection de cabriolets, sellerie de bateaux et de jets privés. Nous travaillons avec des matériaux résistants aux UV, à l\'humidité et aux chocs thermiques, avec une finition identique à celle d\'un siège haut de gamme de série. Devis gratuit pour tous projets.',
    },
    {
      type: 'Projets Hôtellerie & Restauration',
      description:
        'Filali Design Co. accompagne les établissements hôteliers, les restaurants, les riads et les espaces de réception dans leurs projets de retapisserie et de capitonnage. Nous réalisons des séries importantes (chambres d\'hôtel, sièges de restaurant) en garantissant l\'homogénéité des finitions et le respect des délais contractuels. Nos tissus professionnels répondent aux normes d\'inflammabilité M1 et M2, obligatoires dans les établissements recevant du public au Maroc.',
    },
  ];

  const faqs = faqSchema.mainEntity;

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      <Helmet>
        <title>Tapissier Casablanca | Rénovation Sur Mesure | Filali Design</title>
        <meta
          name="description"
          content="Tapissier professionnel à Casablanca. Rénovation canapés, capitonnage velours, restauration fauteuils. Devis gratuit. Filali Design Co. depuis 1985."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/services/tapisserie`} />
        <meta property="og:title" content="Tapissier Casablanca — Sur Mesure & Rénovation | Filali Design Co." />
        <meta
          property="og:description"
          content="Tapissier professionnel à Casablanca. Rénovation canapés, capitonnage velours, restauration fauteuils. Devis gratuit. Filali Design Co. depuis 1985."
        />
        <meta property="og:url" content={`${SITE_URL}/services/tapisserie`} />
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
            تنجيد وترميم
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-royal text-5xl md:text-7xl text-riad-gold uppercase tracking-widest mb-6"
          >
            Tapissier Casablanca — Sur Mesure & Rénovation
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
            Depuis 1985, l'atelier Filali Design Co. est la référence de la tapisserie sur mesure à Casablanca. Rénovation de canapés, capitonnage velours, restauration de fauteuils anciens — nos maâllems tapissiers redonnent vie à vos meubles avec un soin d'artisan.
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
            <li className="text-riad-gold/80">Tapissier Casablanca</li>
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
              Quatre décennies de savoir-faire en tapisserie artisanale au service de vos meubles, à Casablanca et dans tout le Maroc.
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

      {/* ── TYPES DE TRAVAUX ── */}
      <section className="py-24 border-t border-riad-gold/20 bg-riad-red/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Tous Nos Travaux de Tapisserie
            </h2>
            <p className="font-elegant text-riad-white/70 max-w-xl mx-auto">
              Du rembourrage résidentiel aux projets hôteliers d'envergure, notre atelier vous accompagne.
            </p>
          </motion.div>
          <div className="space-y-8">
            {workTypes.map((work, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="flex flex-col md:flex-row gap-6 border-b border-riad-gold/20 pb-8 last:border-0 last:pb-0"
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <span className="font-royal text-lg text-riad-gold uppercase tracking-widest">
                    {work.type}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <p className="font-elegant text-riad-white/75 leading-relaxed">
                    {work.description}
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
              Nos Tissus & Matériaux
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-elegant text-riad-white/75 leading-relaxed text-lg max-w-4xl mx-auto space-y-6"
          >
            <p>
              La qualité d'une tapisserie repose avant tout sur le choix des matériaux. Notre showroom à Casablanca présente plus de 300 références de tissus sélectionnés auprès des meilleurs fournisseurs européens et marocains : <strong className="text-riad-gold">velours de luxe</strong> aux reflets profonds, <strong className="text-riad-gold">cuir pleine fleur</strong> tanné végétalement, <strong className="text-riad-gold">microfibre technique</strong> anti-taches et <strong className="text-riad-gold">lin naturel</strong> pour une esthétique contemporaine.
            </p>
            <p>
              Le rembourrage fait appel aux meilleurs matériaux de garnissage : <strong className="text-riad-gold">mousses haute densité 30 à 50 kg/m³</strong> pour un maintien durable, <strong className="text-riad-gold">mousse à mémoire de forme</strong> pour le confort orthopédique, ouate de garnissage écoresponsable, crin végétal et laine pour les restaurations traditionnelles. Les ressorts ensellés sont remplacés par des éléments neufs conformes aux normes européennes.
            </p>
            <p>
              Pour les amateurs de <strong className="text-riad-gold">tapissier prix Casablanca</strong> accessibles, nous proposons des gammes entrée de gamme sans compromis sur la main-d'œuvre ni la solidité de la structure. Un devis gratuit et détaillé vous est remis après inspection du meuble à votre domicile ou dans notre atelier, avec livraison partout au Maroc.
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
            <p className="font-arabic text-4xl text-riad-gold/50 mb-4">تجديد كامل</p>
            <h2 className="font-royal text-4xl md:text-5xl text-riad-gold uppercase tracking-widest mb-4">
              Obtenez votre Devis Gratuit
            </h2>
            <p className="font-elegant text-riad-white/70 mb-10 max-w-xl mx-auto">
              Décrivez-nous votre meuble à rénover et recevez un devis détaillé sous 24 heures. Déplacement gratuit à Casablanca. Livraison et récupération partout au Maroc.
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
                  Conseils &amp; Inspiration
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Découvrez nos guides sur l'entretien et la rénovation de vos meubles tapissés
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
                  Nos plus belles réalisations en tapisserie et capitonnage à Casablanca et au Maroc
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
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }}>
              <Link
                to="/salon-marocain"
                className="block border border-riad-gold/20 p-6 hover:border-riad-gold/50 transition-all duration-500 group"
              >
                <p className="font-royal text-sm text-riad-gold uppercase tracking-widest mb-2 group-hover:text-riad-gold-light transition-colors">
                  Guide
                </p>
                <p className="font-elegant text-riad-white/70 text-sm">
                  Guide Salon Marocain
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

export default Tapisserie;
