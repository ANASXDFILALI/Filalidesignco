import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';
import { blogArticles, blogCategories, blogCities, type BlogArticle } from '../../lib/blogData';

const SITE_URL = 'https://filalidesignco.space';

const categoryColors: Record<string, string> = {
  salon: 'bg-riad-red/20 text-riad-red border-riad-red/30',
  rideau: 'bg-riad-gold/20 text-riad-gold border-riad-gold/30',
  'table-chaise': 'bg-emerald-900/20 text-emerald-400 border-emerald-800/30',
  tapissier: 'bg-purple-900/20 text-purple-400 border-purple-800/30',
  decoration: 'bg-sky-900/20 text-sky-400 border-sky-800/30',
};

const categoryLabels: Record<string, string> = {
  salon: 'Salon',
  rideau: 'Rideaux',
  'table-chaise': 'Tables & Chaises',
  tapissier: 'Tapissier',
  decoration: 'Décoration',
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog Filali Design Co. — Conseils Décoration Maroc',
  description: 'Conseils et inspirations en décoration intérieure, salon marocain, rideaux, tapisserie pour toutes les grandes villes du Maroc.',
  url: `${SITE_URL}/blog`,
  publisher: {
    '@type': 'Organization',
    name: 'Filali Design Co.',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
};

const ArticleCard: React.FC<{ article: BlogArticle; idx: number }> = ({ article, idx }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: (idx % 6) * 0.08 }}
    className="group flex flex-col bg-riad-blue/60 border border-riad-gold/10 hover:border-riad-gold/40 transition-all duration-500 overflow-hidden"
  >
    {/* Card image area */}
    <div className="relative h-48 bg-gradient-to-br from-riad-brown/40 to-riad-blue overflow-hidden flex-shrink-0">
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-riad-blue/80 to-transparent" />
      {/* City badge */}
      <span className="absolute top-4 left-4 px-3 py-1 bg-riad-gold text-riad-blue text-[10px] font-royal uppercase tracking-[0.15em]">
        {article.city}
      </span>
      {/* Category badge */}
      <span className={`absolute top-4 right-4 px-3 py-1 border text-[10px] font-royal uppercase tracking-[0.1em] ${categoryColors[article.category]}`}>
        {categoryLabels[article.category]}
      </span>
    </div>

    {/* Card content */}
    <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center gap-3 text-riad-gold/50 text-xs font-royal tracking-widest mb-3">
        <time dateTime={article.date}>
          {new Date(article.date).toLocaleDateString('fr-MA', { day: 'numeric', month: 'short', year: 'numeric' })}
        </time>
        <span>·</span>
        <span>{article.readTime} min de lecture</span>
      </div>

      <h2 className="font-royal text-base uppercase tracking-wide text-riad-white group-hover:text-riad-gold transition-colors duration-300 mb-3 leading-snug flex-1">
        {article.title}
      </h2>

      <p className="font-elegant text-sm text-riad-white/60 leading-relaxed mb-5 line-clamp-3">
        {article.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {article.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] px-2 py-0.5 bg-riad-gold/10 text-riad-gold/70 font-royal tracking-wide">
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={`/blog/${article.slug}`}
        className="inline-flex items-center gap-2 text-xs font-royal tracking-[0.2em] uppercase text-riad-gold hover:text-riad-gold-light transition-colors duration-300 group/link"
      >
        Lire l'article
        <span className="h-[1px] w-6 bg-riad-gold group-hover/link:w-12 transition-all duration-300 inline-block" />
      </Link>
    </div>
  </motion.article>
);

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeCity, setActiveCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return blogArticles.filter(a => {
      const matchCat = activeCategory === 'all' || a.category === activeCategory;
      const matchCity = activeCity === 'all' || a.city === activeCity;
      const matchSearch = !searchQuery || (
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      return matchCat && matchCity && matchSearch;
    });
  }, [activeCategory, activeCity, searchQuery]);

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      <Helmet>
        <title>Blog Décoration Maroc | Salons, Rideaux, Tapissier — Filali Design</title>
        <meta name="description" content="Conseils décoration intérieure pour toutes les villes du Maroc. Salon marocain sur mesure, rideaux, tables, chaises, tapissier à Casablanca, Marrakech, Rabat, Fès..." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Blog Décoration Maroc | Filali Design Co." />
        <meta property="og:description" content="30 articles sur la décoration intérieure marocaine : salon, rideaux, tapissier dans toutes les grandes villes du Maroc." />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      <CustomCursor />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-riad-blue to-riad-brown/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="font-arabic text-[20rem] text-riad-gold leading-none">مدونة</span>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-arabic text-5xl sm:text-7xl text-riad-gold mb-4"
          >
            مدونة
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-royal text-2xl sm:text-4xl uppercase tracking-[0.15em] text-riad-white mb-4"
          >
            Décoration Intérieure au Maroc
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="font-elegant text-lg text-riad-white/70 max-w-2xl mx-auto"
          >
            Conseils & inspirations pour votre salon marocain, rideaux, tables et tapisserie —
            dans toutes les grandes villes du Maroc.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 max-w-md mx-auto"
          >
            <input
              type="search"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-riad-white/5 border border-riad-gold/20 focus:border-riad-gold/60 px-5 py-3 text-riad-white font-elegant text-base placeholder:text-riad-white/30 outline-none transition-colors duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div className="sticky top-0 z-40 bg-riad-blue/95 backdrop-blur-md border-b border-riad-gold/10 px-4 sm:px-6 py-4">
        <div className="container mx-auto max-w-7xl">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-3 justify-center">
            {blogCategories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-[11px] font-royal uppercase tracking-[0.15em] border transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-riad-gold text-riad-blue border-riad-gold'
                    : 'border-riad-gold/20 text-riad-gold/60 hover:border-riad-gold/50 hover:text-riad-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {/* City filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCity('all')}
              className={`px-3 py-1 text-[10px] font-royal uppercase tracking-[0.1em] border transition-all duration-300 ${
                activeCity === 'all' ? 'bg-riad-white/10 text-riad-white border-riad-white/30' : 'border-riad-white/10 text-riad-white/40 hover:text-riad-white/70'
              }`}
            >
              Toutes villes
            </button>
            {blogCities.map(city => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-3 py-1 text-[10px] font-royal uppercase tracking-[0.1em] border transition-all duration-300 ${
                  activeCity === city ? 'bg-riad-white/10 text-riad-white border-riad-white/30' : 'border-riad-white/10 text-riad-white/40 hover:text-riad-white/70'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── ARTICLES GRID ── */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-sm font-royal text-riad-gold/50 tracking-widest mb-8 text-center">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            {activeCity !== 'all' ? ` à ${activeCity}` : ''}
            {activeCategory !== 'all' ? ` · ${categoryLabels[activeCategory]}` : ''}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-riad-white/40 font-elegant text-xl">
              Aucun article trouvé pour cette recherche.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, idx) => (
                <ArticleCard key={article.slug} article={article} idx={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-riad-red/10 border-t border-riad-gold/10 text-center">
        <p className="font-elegant text-xl text-riad-white/80 mb-6">
          Vous avez un projet de décoration au Maroc ?
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 border border-riad-gold text-riad-gold font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold hover:text-riad-blue transition-all duration-500"
        >
          Demander un Devis Gratuit
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
