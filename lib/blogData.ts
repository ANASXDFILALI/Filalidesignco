export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  city: string;
  category: 'salon' | 'rideau' | 'table-chaise' | 'tapissier' | 'decoration';
  tags: string[];
  date: string;
  readTime: number;
  excerpt: string;
  image: string;
  content: { heading?: string; paragraphs: string[] }[];
}

export const blogArticles: BlogArticle[] = [

  // ─── CASABLANCA (7) ────────────────────────────────────────────────────────

  {
    slug: 'salon-marocain-sur-mesure-casablanca',
    title: 'Salon Marocain Sur Mesure à Casablanca — Velours, Capitonnage & Artisanat',
    metaTitle: 'Salon Marocain Sur Mesure Casablanca | Filali Design',
    metaDescription: 'Créez votre salon marocain sur mesure à Casablanca. Velours, capitonnage, bois de cèdre. Artisans tapissiers depuis 1985. Devis gratuit.',
    city: 'Casablanca',
    category: 'salon',
    tags: ['salon marocain', 'salon sur mesure', 'capitonnage', 'velours', 'artisan', 'Casablanca', 'tapissier Casablanca'],
    date: '2026-03-10',
    readTime: 3,
    excerpt: 'Un salon marocain sur mesure à Casablanca, c\'est bien plus qu\'un meuble : c\'est le cœur d\'un foyer. Découvrez comment nos artisans tapissiers créent des pièces uniques, du velours au bois de cèdre sculpté.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'À Casablanca, le salon marocain sur mesure reste la pièce maîtresse de chaque foyer. Qu\'il s\'agisse d\'un appartement moderne à Maarif, d\'une villa à Anfa ou d\'un riad à Derb Sultan, le salon marocain incarne l\'hospitalité et le raffinement de la culture marocaine. Chez Filali Design Co., nos artisans tapissiers fabriquent chaque pièce à la main, selon vos dimensions exactes.',
          'Le choix du velours est la première étape. Velours de laine de l\'Atlas, velours ras, velours côtelé, velours brodé — chaque tissu apporte une texture et une couleur différente à votre salon marocain. Nos artisans à Casablanca vous guident dans cette sélection avec des échantillons en atelier.',
        ],
      },
      {
        heading: 'Capitonnage & Structure Bois : Le Savoir-Faire Casablancais',
        paragraphs: [
          'Le capitonnage est l\'art de créer des motifs en relief sur les coussins et dossiers du salon marocain. À Casablanca, cette technique est transmise de maître à apprenti depuis des décennies. Nos tapissiers réalisent le capitonnage losange, capitonnage rond et capitonnage fantaisie sur commande, en velours ou cuir de haute qualité.',
          'La structure en bois de cèdre ou en hêtre massif assure la solidité de votre salon marocain pour des décennies. Chaque cadre est assemblé à la main dans notre atelier de Casablanca, poncé, vernis, et préparé pour accueillir le garnissage en mousse haute densité. Le résultat : un salon marocain confortable, élégant, et fait pour durer.',
        ],
      },
      {
        heading: 'Salon Marocain Casablanca : Du L-Shape au Salon Panoramique',
        paragraphs: [
          'Que vous souhaitiez un salon marocain en L, un salon en U, un banquette droite ou un salon circulaire, nos artisans tapissiers à Casablanca s\'adaptent à chaque configuration d\'espace. Nous prenons les mesures à domicile, proposons un moodboard de couleurs, et livrons votre salon marocain clé en main.',
          'Les finitions sont notre signature : galons dorés, franges, boutons capitonnés, pieds sculptés, dorures à la feuille. Chaque détail est soigné pour que votre salon marocain sur mesure à Casablanca soit une œuvre d\'art vivante. Contactez-nous pour un devis gratuit.',
        ],
      },
    ],
  },

  {
    slug: 'rideaux-sur-mesure-casablanca',
    title: 'Rideaux Sur Mesure à Casablanca — Voilages, Doubles Rideaux & Stores',
    metaTitle: 'Rideaux Sur Mesure Casablanca | Voilages & Stores | Filali Design',
    metaDescription: 'Rideaux sur mesure à Casablanca : voilages, doubles rideaux, stores occultants. Tissus premium, pose incluse. Artisan tapissier depuis 1985.',
    city: 'Casablanca',
    category: 'rideau',
    tags: ['rideaux sur mesure', 'voilages', 'stores', 'Casablanca', 'rideaux Casablanca', 'confection rideaux'],
    date: '2026-03-08',
    readTime: 3,
    excerpt: 'Des rideaux sur mesure à Casablanca qui transforment la lumière et subliment chaque pièce. Voilages légers, doubles rideaux velours, stores enrouleurs — notre atelier confectionne selon vos dimensions exactes.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'À Casablanca, la lumière est un matériau à part entière. Un rideau sur mesure bien choisi filtre la lumière solaire intense, crée une intimité douce et transforme radicalement l\'atmosphère d\'un salon ou d\'une chambre. Chez Filali Design Co., nous confectionnons des rideaux sur mesure à Casablanca depuis 1985, avec une attention particulière aux tissus et aux finitions.',
          'Notre gamme de rideaux sur mesure à Casablanca couvre tous les styles : du voilage lin naturel pour une ambiance zen, au double rideau en velours bordeaux pour un salon marocain de prestige, en passant par le rideau occultant blackout pour les chambres d\'enfants ou les home-cinémas.',
        ],
      },
      {
        heading: 'Tissus & Matières : Le Cœur de Notre Atelier de Rideaux',
        paragraphs: [
          'Nos tissus pour rideaux à Casablanca sont sélectionnés pour leur qualité, leur durabilité et leur esthétique. Lin belge, coton égyptien, polyester haute définition, soie de synthèse, velours à reflets métalliques — nous travaillons avec les meilleurs fournisseurs pour garantir que vos rideaux sur mesure résistent au temps et au soleil marocain.',
          'Chaque rideau sur mesure est confectionné avec des ourlets précis, des galons cousus à la main, des anneaux ou des œillets de qualité. Nos couturières à Casablanca maîtrisent les plis crayon, plis flamands, plis ronds et les ondes pour créer l\'effet voulu dans votre intérieur.',
        ],
      },
      {
        heading: 'Stores Sur Mesure à Casablanca : Enrouleurs, Vénitiens & Motorisés',
        paragraphs: [
          'En complément des rideaux, notre atelier propose des stores sur mesure à Casablanca : store enrouleur, store vénitien en aluminium ou bois, store bateau, store plissé, store vertical et store motorisé. La motorisation Somfy permet de contrôler vos stores depuis votre smartphone — idéal pour les grandes baies vitrées des appartements contemporains de Casablanca.',
          'Nous assurons la pose de vos rideaux et stores sur mesure à Casablanca et dans tout le Grand Casablanca. Notre équipe mesure, installe et règle chaque rideau pour un résultat parfait. De Casablanca centre à Bouskoura, Dar Bouazza et Mohammedia.',
        ],
      },
    ],
  },

  {
    slug: 'table-basse-artisanale-casablanca',
    title: 'Table Basse Artisanale à Casablanca — Bois, Zouaq & Métal Forgé',
    metaTitle: 'Table Basse Artisanale Casablanca — Bois & Zouaq | Filali Design',
    metaDescription: 'Tables basses artisanales à Casablanca sur mesure. Bois sculpté, zouaq peint à la main, métal forgé. Artisans marocains. Livraison Casablanca.',
    city: 'Casablanca',
    category: 'table-chaise',
    tags: ['table basse', 'table artisanale', 'zouaq', 'bois sculpté', 'Casablanca', 'mobilier marocain', 'table basse Casablanca'],
    date: '2026-03-06',
    readTime: 2,
    excerpt: 'Une table basse artisanale façonne le salon autant qu\'elle le meuble. Nos artisans à Casablanca sculptent, peignent et finissent chaque table basse à la main — du zouaq traditionnel au bois naturel contemporain.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'La table basse est la pièce centrale du salon marocain. À Casablanca, nos artisans fabriquent des tables basses sur mesure alliant les techniques traditionnelles marocaines (zouaq, marqueterie, bois de cèdre sculpté) aux tendances contemporaines (métal forgé, verre trempé, béton ciré). Chaque table basse est unique et conçue pour s\'harmoniser avec votre salon marocain.',
        ],
      },
      {
        heading: 'Table Basse Zouaq : L\'Art de la Peinture Marocaine',
        paragraphs: [
          'Le zouaq est une technique de peinture décorative marocaine appliquée sur bois. Nos artisans peintres à Casablanca reproduisent les motifs géométriques et floraux traditionnels sur vos tables basses, en y apportant des touches personnalisées selon votre palette de couleurs. Une table basse zouaq est une pièce d\'art fonctionnelle qui enrichit n\'importe quel salon marocain.',
          'Nous proposons également des tables basses en bois de cèdre sculpté, avec des pieds tournés, des incrustations de métal doré ou argenté, et des plateaux en mosaïque de zellige. Ces tables basses artisanales à Casablanca sont livrées et installées chez vous, dans un délai de 3 à 6 semaines selon la complexité du travail.',
        ],
      },
      {
        heading: 'Tables & Chaises Assorties : Harmonie de Votre Salon Casablancais',
        paragraphs: [
          'Pour une décoration cohérente, nous créons des ensembles table basse + chaises + buffet assortis. Nos chaises en bois sculpté et cuir tannage naturel complètent parfaitement une table basse artisanale dans un salon marocain à Casablanca. Contactez notre atelier pour un devis sur mesure.',
        ],
      },
    ],
  },

  {
    slug: 'tapissier-casablanca-renovation-canape',
    title: 'Tapissier à Casablanca — Rénovation de Canapés, Fauteuils & Banquettes',
    metaTitle: 'Tapissier Casablanca — Rénovation Canapé & Fauteuil | Filali Design',
    metaDescription: 'Tapissier professionnel à Casablanca. Rénovation complète de canapés, fauteuils, banquettes. Garnissage, tissu, capitonnage. Devis gratuit à domicile.',
    city: 'Casablanca',
    category: 'tapissier',
    tags: ['tapissier Casablanca', 'rénovation canapé', 'tapisserie', 'garnissage', 'capitonnage', 'fauteuil', 'banquette'],
    date: '2026-03-04',
    readTime: 3,
    excerpt: 'Notre atelier de tapisserie à Casablanca rénove canapés, fauteuils et banquettes avec un savoir-faire transmis depuis 1985. Nouveau tissu, garnissage mousse haute densité, structure renforcée — votre meuble comme neuf.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Faire appel à un tapissier professionnel à Casablanca, c\'est donner une seconde vie à vos meubles préférés. Qu\'il s\'agisse d\'un canapé en cuir usé, d\'un fauteuil de style Louis XVI, d\'une banquette de restaurant ou d\'un salon marocain capitonné à rénover, notre atelier de tapisserie à Casablanca intervient avec expertise.',
          'La rénovation d\'un canapé ou d\'un fauteuil par notre tapissier à Casablanca comprend plusieurs étapes : démontage complet du meuble, remplacement de la mousse de garnissage (haute densité HR45 ou HR60), réparation ou renforcement de la structure en bois, pose du nouveau tissu (velours, cuir, tissu technique), et finitions soignées (galons, capitonnage, pieds).',
        ],
      },
      {
        heading: 'Rénovation de Salon Marocain à Casablanca : Spécialité Filali',
        paragraphs: [
          'Le salon marocain est un meuble spécifique qui demande un tapissier spécialisé. À Casablanca, notre équipe de tapissiers maîtrise la rénovation des salons marocains traditionnels : changement de velours, remplacement de la ouate et de la mousse, renforcement des cadres en bois, re-capitonnage, remplacement des galons et des franges.',
          'Nos tapissiers se déplacent à Casablanca pour évaluer vos meubles à domicile. Nous vous proposons plusieurs options de tissus (velours, cuir, microfibre) et plusieurs styles (traditionnel, contemporain, mixte) pour redonner vie à votre salon marocain sans le remplacer. Économique et écologique.',
        ],
      },
      {
        heading: 'Capitonnage Sur Mesure à Casablanca',
        paragraphs: [
          'Le re-capitonnage est notre spécialité. Nos tapissiers à Casablanca réalisent des capitonnages losanges, carrés, rectangulaires et fantaisie sur tous types de meubles : têtes de lit, banquettes, portes matelassées, revêtements muraux. Un service unique pour transformer votre intérieur à Casablanca.',
        ],
      },
    ],
  },

  {
    slug: 'salon-capitonne-casablanca',
    title: 'Salon Capitonné à Casablanca — Louis XVI, Chesterfield & Contemporain',
    metaTitle: 'Salon Capitonné Casablanca — Louis XVI & Chesterfield | Filali Design',
    metaDescription: 'Salon capitonné sur mesure à Casablanca. Styles Louis XVI, Chesterfield, contemporain. Velours, cuir. Artisans tapissiers. Livraison Casablanca.',
    city: 'Casablanca',
    category: 'salon',
    tags: ['salon capitonné', 'Louis XVI', 'Chesterfield', 'velours', 'cuir', 'Casablanca', 'canapé capitonné'],
    date: '2026-03-01',
    readTime: 3,
    excerpt: 'Le salon capitonné est le symbole du luxe résidentiel. À Casablanca, nos artisans fabriquent des salons capitonnés sur mesure — du classique Louis XVI au Chesterfield en cuir — selon vos envies et vos dimensions.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Le capitonnage transforme un simple meuble en une pièce de prestige. À Casablanca, la demande pour les salons capitonnés ne cesse de croître, portée par une clientèle qui apprécie l\'alliance du confort et de l\'esthétique raffinée. Chez Filali Design Co., nos artisans tapissiers fabriquent des salons capitonnés sur mesure à Casablanca, du canapé 2 places au grand salon panoramique.',
        ],
      },
      {
        heading: 'Le Chesterfield à Casablanca : Le Classique Revisité',
        paragraphs: [
          'Le canapé Chesterfield, avec son capitonnage profond en losanges et ses boutons, est le nec plus ultra du salon capitonné. Nos artisans à Casablanca fabriquent des Chesterfield en cuir pleine fleur, en velours, en tissu technical. Les pieds en bois tourné ou en métal chromé, les bras roulés, les boutons en laiton ou en cristal — chaque détail est pensé pour créer un salon capitonné de caractère.',
          'Le style Louis XVI capitonné, avec ses lignes droites et ses motifs géométriques, est très apprécié dans les salons marocains contemporains de Casablanca. La combinaison d\'un salon marocain capitonné avec des tables basses en bois doré crée un intérieur qui mêle tradition et modernité.',
        ],
      },
      {
        heading: 'Salon Capitonné Contemporain : Velours & Métal',
        paragraphs: [
          'Pour les intérieurs modernes de Casablanca, nos artisans proposent des salons capitonnés contemporains aux lignes épurées : capitonnage en rectangles, en carré, en demi-lune. Les tissus velours midnight, velours canard, velours émeraude s\'associent aux pieds en métal noir mat pour un salon capitonné design et élégant.',
          'De Casablanca Centre à Ain Diab, de Californie à Hay Riad, nos artisans livrent et installent votre salon capitonné sur mesure. Contactez notre atelier pour un rendez-vous de consultation gratuit.',
        ],
      },
    ],
  },

  {
    slug: 'chaises-fauteuils-casablanca',
    title: 'Chaises & Fauteuils Sur Mesure à Casablanca — Artisanat & Design',
    metaTitle: 'Chaises & Fauteuils Sur Mesure Casablanca | Filali Design',
    metaDescription: 'Chaises et fauteuils sur mesure à Casablanca. Tissu, cuir, bois sculpté. Fabrication artisanale. Styles classique, marocain, contemporain. Devis gratuit.',
    city: 'Casablanca',
    category: 'table-chaise',
    tags: ['chaises sur mesure', 'fauteuils', 'chaises Casablanca', 'fauteuils capitonnés', 'mobilier artisanal', 'Casablanca'],
    date: '2026-02-28',
    readTime: 2,
    excerpt: 'Nos chaises et fauteuils sur mesure à Casablanca allient confort et esthétique. Tapissés de velours ou de cuir, sculptés dans le bois, ils s\'intègrent parfaitement dans un salon marocain comme dans un intérieur contemporain.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Une chaise ou un fauteuil bien choisi peut transformer un salon ordinaire en un espace de prestige. À Casablanca, notre atelier fabrique des chaises et des fauteuils sur mesure qui s\'adaptent à tous les styles d\'intérieur : marocain traditionnel, contemporain, éclectique, minimaliste. Chaque pièce est réalisée à la main par nos tapissiers et menuisiers à Casablanca.',
        ],
      },
      {
        heading: 'Fauteuils Capitonnés & Bergères : Le Confort Casablancais',
        paragraphs: [
          'Nos fauteuils capitonnés à Casablanca sont fabriqués sur une structure en bois massif (hêtre ou cèdre), avec un garnissage en mousse haute densité et un tissu de votre choix. La bergère Louis XV, le fauteuil Chesterfield, le fauteuil contemporain — toutes ces pièces sont disponibles sur mesure et livrées chez vous à Casablanca.',
          'Les chaises de salle à manger sur mesure complètent votre ensemble table pour une cohérence de style. Chaises tapissées, chaises en bois sculpté, chaises baroques — notre atelier à Casablanca propose une gamme complète de chaises artisanales adaptées à tous les budgets.',
        ],
      },
    ],
  },

  {
    slug: 'decoration-interieure-luxe-casablanca',
    title: 'Décoration Intérieure de Luxe à Casablanca — Artisanat Marocain Premium',
    metaTitle: 'Décoration Intérieure Luxe Casablanca | Artisanat Marocain | Filali',
    metaDescription: 'Décoration intérieure de luxe à Casablanca. Salon, rideaux, mobilier artisanal marocain. Filali Design Co., experts depuis 1985. Consultez-nous.',
    city: 'Casablanca',
    category: 'decoration',
    tags: ['décoration intérieure', 'luxe', 'Casablanca', 'artisanat marocain', 'ameublement', 'design intérieur'],
    date: '2026-02-25',
    readTime: 3,
    excerpt: 'La décoration intérieure de luxe à Casablanca, c\'est l\'harmonie entre un salon marocain sur mesure, des rideaux en velours, des tables basses en bois sculpté et une ambiance pensée dans ses moindres détails.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Casablanca est la capitale économique du Maroc et une ville à l\'architecture cosmopolite. Ses résidents exigent des intérieurs qui reflètent leur réussite et leur culture. La décoration intérieure de luxe à Casablanca repose sur trois piliers : un salon marocain de prestige, des textiles d\'exception (rideaux, coussins, tapis), et un mobilier artisanal unique.',
          'Chez Filali Design Co., nous accompagnons les particuliers et les professionnels de Casablanca dans la réalisation de projets de décoration intérieure de luxe. De la prise de mesures à la livraison finale, notre équipe gère chaque détail : salon marocain capitonné, rideaux sur mesure en soie, tables basses zouaq, fauteuils tapissés, stores motorisés.',
        ],
      },
      {
        heading: 'Le Salon Marocain : Pilier de la Déco Luxe Casablancaise',
        paragraphs: [
          'Dans la décoration intérieure de luxe à Casablanca, le salon marocain occupe une place centrale. C\'est l\'espace de réception par excellence, celui qui définit le standing d\'un foyer. Nos artisans créent des salons marocains sur mesure en velours de haute qualité, avec des coussins brodés à la main, des galons en fil d\'or, des pieds en bois de cèdre sculpté.',
        ],
      },
      {
        heading: 'Rideaux, Tables & Chaises : La Cohérence Décorative',
        paragraphs: [
          'Pour une décoration intérieure cohérente à Casablanca, nous proposons des ensembles complets : rideaux assortis au salon marocain, tables basses en harmonie avec les couleurs choisies, chaises et fauteuils dans le même esprit. Cette cohérence est la marque d\'un intérieur luxueux et pensé. Contactez Filali Design Co. pour un conseil décoration gratuit.',
        ],
      },
    ],
  },

  // ─── MARRAKECH (5) ────────────────────────────────────────────────────────

  {
    slug: 'salon-marocain-marrakech',
    title: 'Salon Marocain à Marrakech — Tradition, Couleurs & Artisanat Berbère',
    metaTitle: 'Salon Marocain Marrakech — Tradition & Artisanat | Filali Design',
    metaDescription: 'Salon marocain sur mesure à Marrakech. Velours, soie, motifs berbères. Artisans tapissiers. Livraison dans tout Marrakech. Devis gratuit.',
    city: 'Marrakech',
    category: 'salon',
    tags: ['salon marocain Marrakech', 'artisanat berbère', 'velours', 'soie', 'tapissier Marrakech', 'décoration riad'],
    date: '2026-02-22',
    readTime: 3,
    excerpt: 'Marrakech, la ville ocre, inspire une décoration intérieure riche en couleurs et en motifs. Nos artisans créent des salons marocains sur mesure à Marrakech qui capturent l\'essence de la tradition marrakchie.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Marrakech est la capitale mondiale du design marocain. Ses riads, ses palais et ses hôtels de luxe ont inspiré les plus grands décorateurs d\'intérieur du monde. Un salon marocain sur mesure à Marrakech doit capturer cette essence unique : les couleurs chaudes de l\'ocre et du safran, les motifs géométriques berbères, la richesse des soieries et des velours.',
          'Nos artisans tapissiers fabriquent des salons marocains à Marrakech avec une attention particulière aux couleurs et aux matières locales. Velours teinté à Marrakech, soie sabra des coopératives de femmes berbères, bois de cèdre de l\'Atlas — nos créations sont ancrées dans le terroir marocain tout en répondant aux exigences contemporaines.',
        ],
      },
      {
        heading: 'Le Salon Marocain de Riad : Notre Spécialité à Marrakech',
        paragraphs: [
          'Les propriétaires de riads à Marrakech ont des besoins spécifiques : des salons marocains qui s\'intègrent dans des espaces historiques, avec des plafonds bas, des arches, des niches. Nos tapissiers conçoivent des salons marocains adaptés à l\'architecture riyadie — banquettes basses en L, coussins de sol, divans brodés, tapis berbères coordonnés.',
          'Les finitions sont primordiales dans un riad de Marrakech : galons en soie, tassaux dorés, broderies point de croix, franges berbères. Chaque salon marocain que nous créons à Marrakech est pensé comme un hommage à l\'art de vivre marocain.',
        ],
      },
      {
        heading: 'Salon Marocain Contemporain à Marrakech',
        paragraphs: [
          'Pour les appartements et villas modernes de Gueliz, de Hivernage ou de Palmeraie, nous créons des salons marocains contemporains qui revisitent la tradition. Lignes épurées, velours neutres (gris, beige, camel), capitonnage géométrique, pieds en métal doré — un salon marocain moderne qui garde l\'âme de la tradition marrakchie.',
        ],
      },
    ],
  },

  {
    slug: 'rideaux-marrakech-soie-berbere',
    title: 'Rideaux Sur Mesure à Marrakech — Soie, Voilages & Textiles Berbères',
    metaTitle: 'Rideaux Sur Mesure Marrakech — Soie & Voilages | Filali Design',
    metaDescription: 'Rideaux sur mesure à Marrakech : soie, voilages berbères, doubles rideaux. Confection et pose par nos artisans. Devis gratuit Marrakech.',
    city: 'Marrakech',
    category: 'rideau',
    tags: ['rideaux Marrakech', 'soie', 'voilages', 'textiles berbères', 'rideaux sur mesure', 'confection rideaux'],
    date: '2026-02-20',
    readTime: 2,
    excerpt: 'Les rideaux sur mesure à Marrakech doivent dompter une lumière intense tout en sublimant les intérieurs. Soieries, voilages berbères, doubles rideaux brodés — notre atelier crée des textiles qui racontent l\'histoire de Marrakech.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'La lumière de Marrakech est exceptionnelle — dorée, intense, changeante selon les heures. Des rideaux sur mesure bien conçus transforment cette lumière en un atout décoratif majeur. Chez Filali Design Co., nous confectionnons des rideaux sur mesure à Marrakech qui filtrent, orientent et subliment la lumière de la ville ocre.',
          'Nos tissus pour rideaux à Marrakech incluent des soieries locales aux reflets chatoyants, des voilages en coton naturel brodé de motifs berbères, des velours teintés dans les couleurs de Marrakech (terracotta, ocre, bordeaux, vert atlas). Chaque rideau est confectionné à la main selon vos mesures exactes.',
        ],
      },
      {
        heading: 'Rideaux de Riad à Marrakech : Tradition & Modernité',
        paragraphs: [
          'Les riads de Marrakech nécessitent des rideaux spéciaux : des portières brodées pour les arches et les portes, des voilages pour les patios ouverts, des doubles rideaux pour les chambres historiques. Notre atelier fabrique ces pièces uniques sur mesure, en respectant l\'architecture riyadie tout en apportant le confort contemporain.',
          'Nos stores sur mesure à Marrakech (store enrouleur à impression arabesque, store vénitien en bois de cèdre, store motorisé pour les grandes baies) complètent parfaitement notre offre de rideaux. Livraison et installation dans tout Marrakech et Marrakech Al Haouz.',
        ],
      },
    ],
  },

  {
    slug: 'tapissier-marrakech-riad',
    title: 'Tapissier à Marrakech — Rénovation de Riads & Mobilier Berbère',
    metaTitle: 'Tapissier Marrakech — Rénovation Riad & Mobilier | Filali Design',
    metaDescription: 'Tapissier professionnel à Marrakech. Rénovation de riads, salons marocains, fauteuils. Garnissage, tissu, capitonnage. Devis gratuit à Marrakech.',
    city: 'Marrakech',
    category: 'tapissier',
    tags: ['tapissier Marrakech', 'rénovation riad', 'mobilier berbère', 'garnissage', 'tapisserie Marrakech'],
    date: '2026-02-18',
    readTime: 3,
    excerpt: 'Notre tapissier à Marrakech spécialisé dans la rénovation de riads apporte une expertise unique pour restaurer salons marocains, banquettes de patio et fauteuils anciens dans le respect de la tradition.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Rénover un riad à Marrakech, c\'est préserver un patrimoine vivant. Le tapissier joue un rôle crucial dans cette restauration : refaire les salons marocains abîmés, rétapisser les banquettes en zellige, rénover les fauteuils et poufs en cuir tanné. Notre tapissier à Marrakech connaît ces spécificités architecturales et y répond avec un savoir-faire adapté.',
        ],
      },
      {
        heading: 'Rénovation Complète de Salon Marocain à Marrakech',
        paragraphs: [
          'Un salon marocain de riad a souvent des années d\'histoire. Notre tapissier à Marrakech procède à une évaluation complète : état du bois, qualité de la mousse, tissu et galons, capitonnage. Selon l\'état du meuble, nous proposons une rénovation partielle (changement de tissu) ou une rénovation complète (remplacement de tous les composants).',
          'Nous utilisons des velours et des soieries artisanales de Marrakech pour rénover les salons marocains dans un esprit authentique. Les galons brodés à la main, les franges et les tassaux sont confectionnés selon les techniques traditionnelles marrakchies.',
        ],
      },
      {
        heading: 'Mobilier Berbère & Poufs : Restauration Artisanale',
        paragraphs: [
          'Les poufs en cuir, les tables basses en bois de cèdre sculpté, les banquettes en zellige, les chaises en rotin tressé — notre tapissier à Marrakech restaure tous ces éléments typiques du mobilier marocain. Chaque pièce est traitée avec les matériaux appropriés pour préserver son authenticité et sa beauté.',
        ],
      },
    ],
  },

  {
    slug: 'table-chaises-marrakech-cedre',
    title: 'Tables & Chaises Artisanales à Marrakech — Cèdre Sculpté & Zouaq',
    metaTitle: 'Tables & Chaises Artisanales Marrakech — Cèdre | Filali Design',
    metaDescription: 'Tables et chaises artisanales à Marrakech. Cèdre sculpté, zouaq peint. Fabrication sur mesure. Livraison Marrakech. Artisans marocains.',
    city: 'Marrakech',
    category: 'table-chaise',
    tags: ['table artisanale Marrakech', 'chaises', 'cèdre sculpté', 'zouaq', 'mobilier Marrakech', 'table basse'],
    date: '2026-02-15',
    readTime: 2,
    excerpt: 'Tables et chaises artisanales en bois de cèdre sculpté à Marrakech. Nos menuisiers créent des pièces uniques ornées de zouaq, de marqueterie et de sculptures géométriques inspirées de l\'architecture de la médina.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'À Marrakech, le bois est un art. La médina regorge de menuisiers qui sculptent portes, plafonds et mobilier avec une précision millimétrique. Notre atelier perpétue cette tradition en créant des tables basses et des chaises artisanales en bois de cèdre de l\'Atlas, décorées au zouaq et à la marqueterie.',
          'Une table basse artisanale de Marrakech est une pièce de collection. Nos menuisiers sculptent des motifs géométriques sur les pieds et les ceintures, les peintres appliquent le zouaq traditionnel aux couleurs de Marrakech (rouge, vert, or, bleu majorelle), et les doreurs appliquent des feuilles d\'or sur les reliefs.',
        ],
      },
      {
        heading: 'Chaises de Salle à Manger & Chaises de Salon Marrakchi',
        paragraphs: [
          'Nos chaises artisanales à Marrakech sont fabriquées en bois de cèdre ou d\'acajou, avec des assises tapissées de cuir teinté ou de tissu berbère. Les pieds tournés, les barreaux sculptés et les dossiers ajourés sont caractéristiques du style marrakchi. Ces chaises s\'intègrent aussi bien dans une salle à manger d\'un riad que dans un salon contemporain de Guéliz.',
        ],
      },
    ],
  },

  {
    slug: 'decoration-riad-marrakech',
    title: 'Décoration de Riad à Marrakech — Salon, Rideaux & Mobilier Sur Mesure',
    metaTitle: 'Décoration Riad Marrakech — Salon & Rideaux Sur Mesure | Filali',
    metaDescription: 'Décoration complète de riad à Marrakech. Salon marocain, rideaux, tables, chaises sur mesure. Artisans spécialisés. Devis gratuit.',
    city: 'Marrakech',
    category: 'decoration',
    tags: ['décoration riad', 'Marrakech', 'salon marocain', 'rideaux', 'mobilier sur mesure', 'artisanat'],
    date: '2026-02-12',
    readTime: 3,
    excerpt: 'Décorer un riad à Marrakech est un acte artistique qui demande expertise et sensibilité culturelle. Nos artisans créent des intérieurs de riad complets — du salon marocain aux rideaux de soie, en passant par les tables basses en cèdre sculpté.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Un riad à Marrakech mérite une décoration à la hauteur de son architecture exceptionnelle. Les arches en stuc, les plafonds en cèdre sculptés, les sols en zellige et les fontaines de patio créent un cadre unique qui demande un mobilier et des textiles de qualité équivalente. Notre équipe de décoration à Marrakech conçoit et réalise des intérieurs de riad complets.',
        ],
      },
      {
        heading: 'Le Salon Marocain de Riad : Pièce Maîtresse',
        paragraphs: [
          'Dans un riad de Marrakech, le salon marocain est l\'espace de réception principal. Nos artisans créent des salons marocains bas (style traditionnel marrakchi) ou hauts (style contemporain), avec des velours aux couleurs chaudes, des coussins brodés à la main, des galons en soie et des tables basses en cèdre zouaqué. Le salon marocain de riad est conçu pour impressionner et conforter.',
          'Les rideaux de riad à Marrakech complètent le salon marocain. Voilages en soie naturelle pour les fenêtres à moucharabieh, portières brodées pour les arches, doubles rideaux en velours pour les chambres — chaque espace a ses textiles sur mesure.',
        ],
      },
      {
        heading: 'Tables, Chaises & Mobilier de Patio à Marrakech',
        paragraphs: [
          'Le patio du riad reçoit des tables et des chaises artisanales qui résistent à l\'extérieur tout en restant esthétiques. Nous proposons des tables de patio en fer forgé avec plateaux en mosaïque de zellige, des chaises en osier tressé ou en bois traité, des banquettes de patio tapissées de tissu outdoor. Des pièces uniques pour un patio de riad à Marrakech mémorable.',
        ],
      },
    ],
  },

  // ─── RABAT (4) ────────────────────────────────────────────────────────────

  {
    slug: 'salon-marocain-rabat',
    title: 'Salon Marocain à Rabat — Prestige, Élégance & Artisanat de Qualité',
    metaTitle: 'Salon Marocain Rabat — Prestige & Élégance | Filali Design',
    metaDescription: 'Salon marocain sur mesure à Rabat. Velours premium, capitonnage, bois sculpté. Tapissiers artisans. Livraison Rabat & Salé. Devis gratuit.',
    city: 'Rabat',
    category: 'salon',
    tags: ['salon marocain Rabat', 'tapissier Rabat', 'velours', 'capitonnage', 'artisanat', 'Rabat Salé'],
    date: '2026-02-10',
    readTime: 3,
    excerpt: 'Capitale administrative du Maroc, Rabat abrite une clientèle exigeante qui recherche des salons marocains alliant prestige, fonctionnalité et raffinement. Notre atelier livre à Rabat et dans toute la région.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Rabat, capitale du Royaume du Maroc, est une ville où le prestige et la tradition se côtoient. Les résidents de l\'Agdal, de Hay Riad, de Souissi et de la Médina de Rabat recherchent des salons marocains d\'exception qui reflètent leur position sociale et leur attachement à la culture marocaine. Filali Design Co. répond à cette demande avec des salons marocains sur mesure d\'une qualité irréprochable.',
          'Nos artisans tapissiers à Rabat fabriquent des salons marocains dans les tissus les plus nobles : velours de soie, velours de laine, cuir pleine fleur, tissu jacquard. Les structures en bois sont en hêtre massif ou en cèdre de l\'Atlas, assemblées à la main et finies avec soin. Le garnissage en mousse HR60 garantit un confort optimal et une durabilité maximale.',
        ],
      },
      {
        heading: 'Salon Marocain Officiel & Salon de Réception à Rabat',
        paragraphs: [
          'À Rabat, le salon marocain officiel est souvent dédié à la réception des invités de marque. Ces salons marocains de prestige à Rabat demandent des finitions irréprochables : galons en fil d\'or 18K, broderies au point de Rabat, coussins en soie brodés, tables basses en marqueterie de bois précieux. Notre atelier réalise ces pièces d\'exception avec le savoir-faire de ses artisans.',
        ],
      },
      {
        heading: 'Livraison & Installation à Rabat',
        paragraphs: [
          'Nous livrons et installons vos salons marocains dans toute la région de Rabat-Salé-Kénitra : Rabat ville, Salé, Temara, Skhirate, Bouznika, Kénitra. Notre équipe assure la livraison avec soin et l\'installation dans le respect de votre intérieur. Contactez-nous pour un devis gratuit sur votre salon marocain à Rabat.',
        ],
      },
    ],
  },

  {
    slug: 'rideaux-sur-mesure-rabat',
    title: 'Rideaux Sur Mesure à Rabat — Voilages, Stores & Textiles de Luxe',
    metaTitle: 'Rideaux Sur Mesure Rabat — Voilages & Stores | Filali Design',
    metaDescription: 'Rideaux sur mesure à Rabat : voilages, doubles rideaux, stores. Tissus premium, confection et pose. Artisan tapissier depuis 1985. Devis Rabat.',
    city: 'Rabat',
    category: 'rideau',
    tags: ['rideaux Rabat', 'voilages', 'stores', 'rideaux sur mesure Rabat', 'confection rideaux'],
    date: '2026-02-08',
    readTime: 2,
    excerpt: 'Nos rideaux sur mesure à Rabat transforment chaque fenêtre en une composition textile élégante. Voilages en lin naturel, doubles rideaux en velours, stores motorisés — tout est confectionné selon vos mesures à Rabat.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'À Rabat, la douceur du climat atlantique invite à des rideaux légers qui laissent entrer la lumière tout en préservant l\'intimité. Nos artisans confectionnent des rideaux sur mesure à Rabat adaptés à cette lumière douce : voilages en lin et coton naturel, doubles rideaux en velours léger, voiles de coton égyptien. Des rideaux qui respirent et subliment chaque pièce de votre appartement ou villa à Rabat.',
          'Pour les grandes baies vitrées des appartements modernes de Rabat (Agdal, Hay Riad, Hassan), nous recommandons des stores motorisés Somfy qui s\'intègrent discrètement dans la décoration et se commandent via smartphone. Nos stores à Rabat sont disponibles en version enrouleur, vénitien bois, store bateau ou store plissé.',
        ],
      },
      {
        heading: 'Rideaux de Salon Marocain à Rabat',
        paragraphs: [
          'Les rideaux qui encadrent un salon marocain à Rabat doivent être en harmonie avec les velours et les broderies du salon. Nos couturières créent des rideaux assortis aux couleurs de votre salon marocain : même velours, même teinte, avec des finitions galons et franges qui prolongent le vocabulaire décoratif du salon. Une cohérence textile parfaite pour votre intérieur à Rabat.',
        ],
      },
    ],
  },

  {
    slug: 'tapissier-rabat-canapes',
    title: 'Tapissier à Rabat — Rénovation de Canapés, Fauteuils & Salon Marocain',
    metaTitle: 'Tapissier Rabat — Rénovation Canapé & Salon Marocain | Filali',
    metaDescription: 'Tapissier professionnel à Rabat. Rénovation canapé, fauteuil, salon marocain. Garnissage, tissu, capitonnage. Visite à domicile. Devis gratuit Rabat.',
    city: 'Rabat',
    category: 'tapissier',
    tags: ['tapissier Rabat', 'rénovation canapé Rabat', 'garnissage', 'tapisserie', 'salon marocain Rabat'],
    date: '2026-02-05',
    readTime: 2,
    excerpt: 'Notre tapissier à Rabat rénove canapés, fauteuils et salons marocains avec un savoir-faire reconnu. Visite à domicile, choix du tissu sur échantillons, rénovation clé en main — votre mobilier retrouve sa splendeur.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Faire appel à un tapissier professionnel à Rabat est la solution idéale pour rénover votre mobilier sans le remplacer. Nos tapissiers se déplacent à Rabat, Salé et Temara pour évaluer l\'état de vos canapés, fauteuils, banquettes et salons marocains, puis proposent une rénovation adaptée à votre budget.',
          'La rénovation par notre tapissier à Rabat comprend : diagnostic du meuble, déstockage du tissu usé, remplacement de la mousse de garnissage (ou ajout d\'une mousse supplémentaire pour améliorer le confort), pose du nouveau tissu avec finitions soignées (galons, capitonnage, décoration). Résultat garanti.',
        ],
      },
      {
        heading: 'Spécialiste Rénovation Salon Marocain à Rabat',
        paragraphs: [
          'La rénovation d\'un salon marocain à Rabat est notre spécialité. Nos tapissiers connaissent les spécificités de cette pièce emblématique : structure bois, mousse de siège et dossier, velours de couverture, capitonnage, galons et franges. Un salon marocain rénové par Filali Design Co. retrouve toute sa splendeur pour un coût bien inférieur au remplacement.',
        ],
      },
    ],
  },

  {
    slug: 'table-basse-rabat',
    title: 'Table Basse Artisanale à Rabat — Bois, Fer Forgé & Mosaïque Zellige',
    metaTitle: 'Table Basse Artisanale Rabat — Bois & Zellige | Filali Design',
    metaDescription: 'Tables basses artisanales à Rabat sur mesure. Bois sculpté, fer forgé, mosaïque zellige. Livraison Rabat. Artisans marocains. Devis gratuit.',
    city: 'Rabat',
    category: 'table-chaise',
    tags: ['table basse Rabat', 'fer forgé', 'zellige', 'bois sculpté', 'mobilier artisanal Rabat'],
    date: '2026-02-02',
    readTime: 2,
    excerpt: 'Tables basses artisanales sur mesure à Rabat. Bois de cèdre sculpté, fer forgé teinté, plateaux en mosaïque de zellige ou en verre trempé — nos artisans créent des pièces qui habillent votre salon marocain à Rabat.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'La table basse est le joyau central d\'un salon marocain. À Rabat, nos artisans fabriquent des tables basses uniques qui s\'accordent avec tous les styles d\'intérieur : classique marocain, contemporain, éclectique. Bois de cèdre sculpté aux motifs géométriques, fer forgé à la main, plateaux en mosaïque de zellige colorée — chaque table basse est une pièce d\'artisanat à part entière.',
          'Nos tables basses à Rabat sont disponibles en plusieurs tailles et hauteurs : table basse salon, table d\'appoint, console d\'entrée. Nous réalisons également des ensembles table basse + tables gigognes pour les salons marocains de grandes dimensions à Rabat.',
        ],
      },
      {
        heading: 'Chaises & Fauteuils Assortis à Rabat',
        paragraphs: [
          'Pour une décoration cohérente de votre salon marocain à Rabat, nous proposons des chaises et fauteuils assortis à vos tables basses. Des chaises en bois sculpté avec assises en cuir naturel, des fauteuils capitonnés en velours assorti à vos rideaux, des poufs en cuir teinté pour les coins lecture. Votre intérieur à Rabat gagne en cohérence et en luxe.',
        ],
      },
    ],
  },

  // ─── FÈS (3) ──────────────────────────────────────────────────────────────

  {
    slug: 'salon-marocain-fes-heritage-fassi',
    title: 'Salon Marocain à Fès — Héritage Fassi & Artisanat de la Médina',
    metaTitle: 'Salon Marocain Fès — Héritage Fassi & Artisanat | Filali Design',
    metaDescription: 'Salon marocain sur mesure à Fès. Tissu fassi, broderies de Fès, bois de cèdre. Artisans tapissiers. Devis gratuit pour Fès et environs.',
    city: 'Fès',
    category: 'salon',
    tags: ['salon marocain Fès', 'artisanat fassi', 'broderies de Fès', 'tapissier Fès', 'héritage', 'médina Fès'],
    date: '2026-01-30',
    readTime: 3,
    excerpt: 'Fès, capitale spirituelle et artisanale du Maroc, a une tradition de salon marocain inégalée. Nos artisans perpétuent l\'héritage fassi avec des salons marocains ornés de broderies de Fès, de velours de soie et de bois de cèdre sculpté.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Fès est la capitale de l\'artisanat marocain. Sa médina classée au patrimoine mondial de l\'UNESCO abrite des milliers d\'artisans — tisserands, brodeurs, menuisiers, tanneurs — qui perpétuent des savoir-faire millénaires. Un salon marocain à Fès est porteur de cet héritage unique : il intègre les broderies fassis, les tissus de soie de la médina, les sculptures en cèdre de l\'Atlas.',
          'Nos artisans tapissiers créent des salons marocains à Fès qui honorent cet héritage. Les velours et soieries sont sélectionnés dans les souks de Fès El Bali, les broderies sont réalisées par des brodeuses fassis traditionnelles, les structures en bois sont fabriquées par des menuisiers de la médina. Un salon marocain à Fès est un véritable objet d\'art.',
        ],
      },
      {
        heading: 'Le Salon Marocain Fassi : Styles & Techniques Traditionnelles',
        paragraphs: [
          'Le salon marocain fassi se distingue par l\'abondance des broderies et des motifs floraux. Les coussins sont brodés au point de Fès (point satin, point de tige, point de nœud), les galons sont tissés à la main sur des métiers traditionnels, les franges sont nouées une par une. Cette richesse décorative fait du salon marocain fassi une pièce d\'exception.',
          'Pour les intérieurs contemporains de Fès Nouvelle (Agdal, Route d\'Imouzzer), nous proposons des salons marocains qui interprètent la tradition fassi avec un œil moderne : lignes épurées, broderies sélectives, couleurs douces mais authentiques. Un hommage au patrimoine fassi adapté à la vie d\'aujourd\'hui.',
        ],
      },
    ],
  },

  {
    slug: 'artisan-tapissier-fes',
    title: 'Artisan Tapissier à Fès — Rénovation & Création de Mobilier Marocain',
    metaTitle: 'Artisan Tapissier Fès — Rénovation Mobilier Marocain | Filali',
    metaDescription: 'Artisan tapissier à Fès. Rénovation salon marocain, canapés, fauteuils. Garnissage, tissu, capitonnage. Devis gratuit Fès et périphérie.',
    city: 'Fès',
    category: 'tapissier',
    tags: ['tapissier Fès', 'artisan Fès', 'rénovation salon marocain', 'garnissage', 'mobilier marocain'],
    date: '2026-01-28',
    readTime: 2,
    excerpt: 'Notre artisan tapissier à Fès combine le savoir-faire fassi traditionnel avec les techniques modernes pour rénover et créer des salons marocains, canapés et fauteuils d\'exception.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'À Fès, l\'artisanat est une façon de vivre. Notre artisan tapissier à Fès perpétue cette tradition en rénovant et créant des meubles tapissés de qualité. Salons marocains anciens à rénover, canapés de famille à retapisser, fauteuils de valeur à restaurer — notre tapissier à Fès intervient avec le respect dû à chaque pièce.',
          'La rénovation d\'un salon marocain à Fès par notre tapissier comprend : démontage soigneux, nettoyage et traitement du bois, remplacement de la mousse et de la ouate, choix et pose du nouveau velours ou tissu fassi, re-capitonnage, pose des galons et franges artisanaux de Fès. Un travail de maître pour un résultat à la hauteur de l\'héritage fassi.',
        ],
      },
    ],
  },

  {
    slug: 'rideaux-textiles-fes',
    title: 'Rideaux & Textiles Artisanaux à Fès — Soie, Lin & Broderies Fassis',
    metaTitle: 'Rideaux Artisanaux Fès — Soie & Broderies Fassis | Filali Design',
    metaDescription: 'Rideaux et textiles artisanaux à Fès. Soieries, broderies fassis, voilages. Confection sur mesure et pose. Artisans de Fès. Devis gratuit.',
    city: 'Fès',
    category: 'rideau',
    tags: ['rideaux Fès', 'textiles artisanaux', 'soie', 'broderies fassis', 'voilages Fès'],
    date: '2026-01-25',
    readTime: 2,
    excerpt: 'Les rideaux artisanaux de Fès sont une synthèse unique de l\'art textile marocain. Soieries de la médina, broderies fassis au fil d\'or, voilages en coton naturel — des créations qui honorent l\'héritage de la capitale artisanale du Maroc.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Fès est le centre mondial de la soie marocaine et des broderies traditionnelles. Nos artisans confectionnent des rideaux à Fès en utilisant les soieries et les broderies de la médina fassi. Ces rideaux artisanaux sont des pièces uniques, impossibles à reproduire industriellement, qui apportent une valeur esthétique et culturelle exceptionnelle à votre intérieur.',
          'Nos rideaux à Fès incluent des portières brodées pour les arches des maisons traditionnelles, des rideaux en soie naturelle pour les salons de réception, des voilages en coton égyptien pour les chambres. Chaque rideau est confectionné à la main selon vos mesures, avec des finitions au galon fassi, au fil d\'or ou aux franges nouées.',
        ],
      },
    ],
  },

  // ─── TANGER (3) ───────────────────────────────────────────────────────────

  {
    slug: 'salon-marocain-tanger',
    title: 'Salon Marocain à Tanger — Design Contemporain & Tradition Andalouse',
    metaTitle: 'Salon Marocain Tanger — Design & Tradition | Filali Design',
    metaDescription: 'Salon marocain sur mesure à Tanger. Style contemporain, andalou. Velours, capitonnage. Artisans tapissiers. Livraison Tanger. Devis gratuit.',
    city: 'Tanger',
    category: 'salon',
    tags: ['salon marocain Tanger', 'tapissier Tanger', 'style andalou', 'velours', 'décoration Tanger'],
    date: '2026-01-22',
    readTime: 3,
    excerpt: 'Tanger, porte de l\'Afrique ouverte sur la Méditerranée, a une identité décorative unique mêlant influences andalouses, marocaines et européennes. Nos salons marocains à Tanger reflètent cette richesse culturelle.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Tanger est une ville cosmopolite où se rencontrent la tradition marocaine, l\'héritage andalou et l\'influence européenne. Cette richesse culturelle unique se reflète dans les intérieurs tangérois : les salons marocains y sont souvent plus raffinés, mêlant velours marocains, azulejos portugais, stucs andalous et mobilier contemporain. Filali Design Co. crée des salons marocains à Tanger qui capturent cette identité unique.',
          'Nos artisans proposent des salons marocains à Tanger en trois styles principaux : le style traditionnel marocain (velours bordeaux, galons dorés, bois sculpté), le style andalou (velours ivoire, broderies florales, arches en stuc), et le style méditerranéen contemporain (velours gris-bleu, lignes épurées, pieds en métal chromé).',
        ],
      },
      {
        heading: 'Salon Marocain Tanger : Vue sur le Détroit',
        paragraphs: [
          'Pour les appartements et villas avec vue sur le Détroit de Gibraltar à Tanger, nous créons des salons marocains qui dialogue avec l\'horizon. Des couleurs bleu-vert, des velours aux reflets nacrés, des rideaux voilages qui laissent entrer la lumière méditerranéenne — un salon marocain à Tanger qui est à la hauteur de son paysage exceptionnel.',
        ],
      },
    ],
  },

  {
    slug: 'rideaux-tanger-mediterraneen',
    title: 'Rideaux Sur Mesure à Tanger — Style Méditerranéen & Lumière du Détroit',
    metaTitle: 'Rideaux Sur Mesure Tanger — Style Méditerranéen | Filali Design',
    metaDescription: 'Rideaux sur mesure à Tanger. Style méditerranéen, voilages légers, stores. Confection et pose. Artisans tapissiers. Devis gratuit Tanger.',
    city: 'Tanger',
    category: 'rideau',
    tags: ['rideaux Tanger', 'style méditerranéen', 'voilages', 'stores', 'rideaux sur mesure Tanger'],
    date: '2026-01-20',
    readTime: 2,
    excerpt: 'La lumière du Détroit de Gibraltar est unique — intense et changeante. Nos rideaux sur mesure à Tanger sont conçus pour dompter et sublimer cette lumière méditerranéenne exceptionnelle.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'La lumière de Tanger, entre Atlantique et Méditerranée, est une lumière de peintre. Des rideaux sur mesure bien choisis à Tanger transforment cette lumière en un atout décoratif majeur : voilages légers qui filtrent sans bloquer, stores enrouleurs semi-transparents pour les grandes baies vitrées avec vue, doubles rideaux en lin naturel pour les intérieurs élégants.',
          'Nos artisans confectionnent des rideaux à Tanger en lin, coton, soie de synthèse et velours léger. Les teintes méditerranéennes (blanc, écru, bleu horizon, terracotta clair) sont nos favoris pour Tanger, car elles s\'harmonisent avec l\'environnement marin et la lumière du Détroit.',
        ],
      },
    ],
  },

  {
    slug: 'tapissier-tanger-ameublement',
    title: 'Tapissier & Ameublement Sur Mesure à Tanger — Artisanat Marocain',
    metaTitle: 'Tapissier Tanger — Ameublement Sur Mesure Marocain | Filali',
    metaDescription: 'Tapissier et ameublement sur mesure à Tanger. Salon marocain, canapé, fauteuil, rideaux. Artisans professionnels. Devis gratuit à Tanger.',
    city: 'Tanger',
    category: 'tapissier',
    tags: ['tapissier Tanger', 'ameublement sur mesure', 'salon marocain', 'canapé', 'fauteuil Tanger'],
    date: '2026-01-18',
    readTime: 2,
    excerpt: 'Nos tapissiers à Tanger créent et rénovent votre ameublement sur mesure : salon marocain, canapés, fauteuils, rideaux. Un service complet pour sublimer votre intérieur tangérois.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'À Tanger, notre atelier de tapisserie crée des meubles sur mesure et rénove les meubles existants. Salons marocains sur mesure, canapés en velours, fauteuils capitonnés, banquettes d\'entrée, têtes de lit tapissées, rideaux confectionnés — nous couvrons tous les besoins d\'ameublement textiles à Tanger.',
          'Notre service comprend : visite à domicile à Tanger pour prise de mesures et conseil, sélection de tissus sur échantillons, fabrication dans notre atelier, livraison et installation à Tanger. Tout l\'ameublement sur mesure de votre intérieur tangérois en un seul interlocuteur de confiance.',
        ],
      },
    ],
  },

  // ─── AGADIR (3) ───────────────────────────────────────────────────────────

  {
    slug: 'salon-marocain-agadir',
    title: 'Salon Marocain à Agadir — Décoration Moderne & Artisanat Souss',
    metaTitle: 'Salon Marocain Agadir — Design Moderne & Souss | Filali Design',
    metaDescription: 'Salon marocain sur mesure à Agadir. Style moderne et artisanat soussien. Velours, capitonnage. Tapissiers artisans. Livraison Agadir. Devis gratuit.',
    city: 'Agadir',
    category: 'salon',
    tags: ['salon marocain Agadir', 'tapissier Agadir', 'artisanat Souss', 'velours', 'décoration moderne Agadir'],
    date: '2026-01-15',
    readTime: 2,
    excerpt: 'Agadir, station balnéaire et capitale du Souss, a une décoration intérieure qui reflète son ouverture sur l\'Atlantique et son art de vivre détendu. Nos salons marocains à Agadir marient tradition soussienne et modernité.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Agadir est une ville moderne reconstruite dans les années 1960 après le tremblement de terre. Son architecture contemporaine et son art de vivre balnéaire ont créé un style de décoration intérieure unique : lumineux, aéré, mêlant influences marocaines et méditerranéennes. Nos salons marocains à Agadir s\'inscrivent dans cette identité solaire et contemporaine.',
          'Pour les appartements et villas d\'Agadir (Cité Founty, Hay Mohammadi, Anza, Aourir), nous créons des salons marocains en velours légers aux couleurs de l\'Atlantique (bleu, turquoise, blanc cassé) ou aux tons chauds du Souss (ocre, safran, terracotta). Des salons marocains confortables et lumineux, adaptés au style de vie agadiri.',
        ],
      },
    ],
  },

  {
    slug: 'rideaux-agadir',
    title: 'Rideaux Sur Mesure à Agadir — Lumière Atlantique & Stores Occultants',
    metaTitle: 'Rideaux Sur Mesure Agadir — Lumière & Stores | Filali Design',
    metaDescription: 'Rideaux sur mesure à Agadir. Voilages légers, stores occultants, doubles rideaux. Confection et pose. Artisans tapissiers. Devis Agadir.',
    city: 'Agadir',
    category: 'rideau',
    tags: ['rideaux Agadir', 'stores occultants', 'voilages', 'rideaux sur mesure Agadir', 'lumière atlantique'],
    date: '2026-01-12',
    readTime: 2,
    excerpt: 'La lumière atlantique d\'Agadir est généreuse mais intense. Nos rideaux sur mesure à Agadir sont conçus pour en profiter au maximum tout en protégeant de la chaleur : voilages légers, stores occultants, rideaux thermoréfléchissants.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'À Agadir, le soleil est roi — avec plus de 300 jours d\'ensoleillement par an. Des rideaux sur mesure bien choisis permettent de profiter de cette lumière atlantique tout en protégeant vos intérieurs de la chaleur. Chez Filali Design, nous confectionnons des rideaux à Agadir adaptés à ce climat exceptionnel.',
          'Notre gamme de rideaux à Agadir comprend : voilages thermoréfléchissants pour limiter la chaleur, stores enrouleurs en tissu screen qui filtrent UV sans bloquer la vue sur l\'Atlantique, rideaux occultants pour les chambres et les hôtels d\'Agadir, stores motorisés Somfy pour les grandes baies des villas balnéaires. Confection, livraison et pose à Agadir et Tiznit.',
        ],
      },
    ],
  },

  {
    slug: 'table-mobilier-agadir',
    title: 'Tables & Mobilier Artisanal à Agadir — Bois, Fer Forgé & Style Souss',
    metaTitle: 'Tables & Mobilier Artisanal Agadir — Bois & Fer | Filali Design',
    metaDescription: 'Tables et mobilier artisanal à Agadir sur mesure. Bois, fer forgé, rotin. Style Souss. Livraison Agadir. Artisans marocains. Devis gratuit.',
    city: 'Agadir',
    category: 'table-chaise',
    tags: ['table basse Agadir', 'mobilier artisanal', 'fer forgé', 'rotin', 'style Souss', 'Agadir'],
    date: '2026-01-10',
    readTime: 2,
    excerpt: 'Tables basses, chaises et mobilier artisanal à Agadir. Bois d\'arganier, fer forgé local, rotin tressé — des pièces uniques qui incarnent le style soussien alliant nature et artisanat.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Le mobilier artisanal d\'Agadir s\'inspire de la nature généreuse du Souss : l\'arganier, le palmier, le rotin. Nos artisans créent des tables basses et des chaises qui utilisent ces matières locales — bois d\'arganier, rotin tressé, fer forgé brut — pour créer un mobilier authentiquement Soussien, chaleureux et durable.',
          'Pour les terrasses et espaces extérieurs des villas et riad d\'Agadir, nous proposons du mobilier en fer forgé traité anti-rouille et en rotin synthétique UV-résistant : tables de jardin, chaises longues, banquettes de terrasse, tables basses de patio. Des pièces sur mesure qui résistent au climat atlantique d\'Agadir tout en restant élégantes.',
        ],
      },
    ],
  },

  // ─── MEKNÈS (2) ───────────────────────────────────────────────────────────

  {
    slug: 'salon-marocain-meknes',
    title: 'Salon Marocain à Meknès — Entre Histoire Royale & Design Contemporain',
    metaTitle: 'Salon Marocain Meknès — Histoire & Design | Filali Design',
    metaDescription: 'Salon marocain sur mesure à Meknès. Artisanat royal, velours, capitonnage. Tapissiers artisans. Livraison Meknès et région. Devis gratuit.',
    city: 'Meknès',
    category: 'salon',
    tags: ['salon marocain Meknès', 'tapissier Meknès', 'artisanat royal', 'velours', 'histoire Meknès'],
    date: '2026-01-08',
    readTime: 2,
    excerpt: 'Meknès, ville impériale fondée par Moulay Ismaïl, a une tradition artisanale royale incomparable. Nos salons marocains à Meknès s\'inspirent de cette grandeur pour créer des pièces dignes de la cité ismaïlienne.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Meknès est l\'une des quatre villes impériales du Maroc, fondée au XIe siècle et agrandie par le sultan Moulay Ismaïl au XVIIe siècle. Son héritage artisanal royal transparaît dans chaque aspect de l\'artisanat de Meknès : la céramique, la ferronnerie, la broderie, la tapisserie. Nos salons marocains à Meknès s\'inscrivent dans cette tradition impériale.',
          'Pour les maisons de la Médina de Meknès comme pour les appartements modernes de Ville Nouvelle, nous créons des salons marocains sur mesure qui allient l\'héritage artisanal meknassi et les tendances contemporaines. Velours aux couleurs royales (bordeaux, vert royal, violet), broderies dorées, structures en cèdre sculpté — un salon marocain à Meknès est toujours une pièce d\'exception.',
        ],
      },
    ],
  },

  {
    slug: 'tapissier-meknes-renovation',
    title: 'Tapissier à Meknès — Rénovation de Meubles Anciens & Patrimoine',
    metaTitle: 'Tapissier Meknès — Rénovation Meubles Anciens | Filali Design',
    metaDescription: 'Tapissier professionnel à Meknès. Rénovation meubles anciens, salon marocain. Respect du patrimoine. Devis gratuit Meknès et région.',
    city: 'Meknès',
    category: 'tapissier',
    tags: ['tapissier Meknès', 'rénovation meubles anciens', 'patrimoine', 'restauration', 'Meknès'],
    date: '2026-01-05',
    readTime: 2,
    excerpt: 'Notre tapissier à Meknès est spécialisé dans la rénovation de meubles anciens de valeur. Fauteuils Louis XV, canapés rococo, salons marocains historiques — nous restaurons avec respect du patrimoine artisanal meknassi.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Meknès abrite de nombreuses pièces de mobilier ancien de grande valeur — legs des palais impériaux, héritages de familles nobles, meubles de collection. Notre tapissier à Meknès est formé à la restauration de ces pièces précieuses, en utilisant des techniques et des matériaux authentiques pour préserver leur valeur patrimoniale.',
          'Fauteuils Louis XV en bois doré, canapés rococo en soie, salon marocain impérial en velours de Fès, chaises de salle à manger en bois sculpté — notre tapissier à Meknès restaure ces trésors avec la même dévotion que leur créateur d\'origine. Diagnostic, restauration de la structure, remplacement du garnissage, retapissage dans le tissu d\'origine ou dans une interprétation contemporaine.',
        ],
      },
    ],
  },

  // ─── OUJDA (1) ────────────────────────────────────────────────────────────

  {
    slug: 'salon-marocain-oujda',
    title: 'Salon Marocain à Oujda — Sur Mesure & Artisanat Oriental',
    metaTitle: 'Salon Marocain Oujda — Sur Mesure & Oriental | Filali Design',
    metaDescription: 'Salon marocain sur mesure à Oujda. Artisanat oriental, velours, capitonnage. Tapissiers professionnels. Livraison Oujda. Devis gratuit.',
    city: 'Oujda',
    category: 'salon',
    tags: ['salon marocain Oujda', 'artisanat oriental', 'velours', 'tapissier Oujda', 'salon sur mesure'],
    date: '2026-01-03',
    readTime: 2,
    excerpt: 'Oujda, porte de l\'Orient marocain à la frontière algérienne, a un style de décoration intérieure influencé par l\'Afrique du Nord et le Moyen-Orient. Nos salons marocains à Oujda incorporent cette richesse orientale.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Oujda, carrefour des cultures marocaine, berbère et arabe orientale, développe un style de salon marocain qui intègre des influences de l\'Orient. Les velours aux couleurs vives (rouge grenat, bleu royal, vert émeraude), les broderies orientales aux motifs floraux, les tables basses en cuivre ciselé — le salon marocain à Oujda est un spectacle de richesse et de couleurs.',
          'Nos artisans créent des salons marocains à Oujda sur mesure, adaptés aux dimensions et aux goûts de chaque client. La structure bois est fabriquée en hêtre massif, le garnissage en mousse HR40 ou HR60 selon le confort désiré, le tissu en velours ou cuir sélectionné parmi nos échantillons. Livraison à Oujda et dans tout l\'Oriental.',
        ],
      },
    ],
  },

  // ─── KÉNITRA (1) ──────────────────────────────────────────────────────────

  {
    slug: 'tapissier-kenitra',
    title: 'Tapissier à Kénitra — Salons Marocains, Rideaux & Rénovation',
    metaTitle: 'Tapissier Kénitra — Salons & Rideaux Sur Mesure | Filali Design',
    metaDescription: 'Tapissier professionnel à Kénitra. Salon marocain, rideaux, canapés sur mesure. Artisans de qualité. Livraison Kénitra. Devis gratuit.',
    city: 'Kénitra',
    category: 'tapissier',
    tags: ['tapissier Kénitra', 'salon marocain Kénitra', 'rideaux Kénitra', 'rénovation canapé', 'Kénitra'],
    date: '2025-12-28',
    readTime: 2,
    excerpt: 'Notre tapissier à Kénitra offre un service complet : création de salons marocains sur mesure, confection de rideaux, rénovation de canapés et fauteuils. Une expertise artisanale au service des résidents de Kénitra.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Kénitra, ville dynamique du corridor Rabat-Casablanca, est en plein développement résidentiel. De nombreuses nouvelles constructions et rénovations créent une forte demande en ameublement sur mesure. Notre tapissier à Kénitra répond à cette demande avec un service complet : salon marocain sur mesure, rideaux confectionnés, rénovation de canapés et fauteuils.',
          'Notre artisan tapissier se déplace à Kénitra pour prendre les mesures, présenter les échantillons de tissus et conseiller sur les styles et les couleurs. Salon marocain en velours pour le salon de réception, rideaux en lin pour les chambres, stores enrouleurs pour les cuisines — tout l\'ameublement textile sur mesure de votre domicile à Kénitra.',
        ],
      },
    ],
  },

  // ─── TÉTOUAN (1) ──────────────────────────────────────────────────────────

  {
    slug: 'salon-marocain-tetouan',
    title: 'Salon Marocain à Tétouan — Artisanat Andalou & Tradition Djeblie',
    metaTitle: 'Salon Marocain Tétouan — Andalou & Djeblie | Filali Design',
    metaDescription: 'Salon marocain sur mesure à Tétouan. Artisanat andalou, broderies tetouanies. Tapissiers artisans. Livraison Tétouan. Devis gratuit.',
    city: 'Tétouan',
    category: 'salon',
    tags: ['salon marocain Tétouan', 'artisanat andalou', 'broderies tetouanies', 'tapissier Tétouan', 'tradition djeblie'],
    date: '2025-12-25',
    readTime: 2,
    excerpt: 'Tétouan, "petite Andalousie du Nord", a préservé un art de vivre unique mêlant héritage marocain et andalou. Nos salons marocains à Tétouan honorent cette richesse culturelle exceptionnelle.',
    image: '/og-image.jpg',
    content: [
      {
        paragraphs: [
          'Tétouan est la seule médina du Maroc à avoir été construite principalement par des réfugiés andalous expulsés d\'Espagne au XVe siècle. Cette origine andalouse unique se retrouve dans l\'artisanat tetouani : des broderies aux motifs floraux espagnols-marocains, des carreaux de faïence aux motifs Mudéjar, une architecture qui rappelle l\'Alhambra de Grenade.',
          'Nos salons marocains à Tétouan s\'inspirent de cet héritage unique. Velours aux couleurs andalouses (vert profond, rouge sang de bœuf, bleu cobalt), broderies tetouanies aux fils de soie colorée, tables basses ornées de mosaïques de zellige aux motifs andalous — un salon marocain à Tétouan est un hommage vivant à l\'Andalousie marocaine.',
        ],
      },
    ],
  },

];

export const blogCategories = [
  { value: 'all', label: 'Tous les articles' },
  { value: 'salon', label: 'Salons Marocains' },
  { value: 'rideau', label: 'Rideaux & Stores' },
  { value: 'table-chaise', label: 'Tables & Chaises' },
  { value: 'tapissier', label: 'Tapissier & Rénovation' },
  { value: 'decoration', label: 'Décoration Intérieure' },
] as const;

export const blogCities = [
  'Casablanca', 'Marrakech', 'Rabat', 'Fès', 'Tanger', 'Agadir', 'Meknès', 'Oujda', 'Kénitra', 'Tétouan',
];
