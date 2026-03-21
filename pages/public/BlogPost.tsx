import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';
import { blogArticles, type BlogArticle } from '../../lib/blogData';

const SITE_URL = 'https://filalidesignco.space';

const categoryLabels: Record<string, string> = {
  salon: 'Salon Marocain',
  rideau: 'Rideaux & Stores',
  'table-chaise': 'Tables & Chaises',
  tapissier: 'Tapissier & Rénovation',
  decoration: 'Décoration Intérieure',
};

const RelatedCard: React.FC<{ article: BlogArticle }> = ({ article }) => (
  <Link to={`/blog/${article.slug}`} className="group block border border-riad-gold/10 hover:border-riad-gold/40 p-5 transition-all duration-300 bg-riad-blue/40">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[10px] font-royal uppercase tracking-widest text-riad-gold">{article.city}</span>
      <span className="text-riad-gold/30">·</span>
      <span className="text-[10px] font-royal uppercase tracking-widest text-riad-white/40">{article.readTime} min</span>
    </div>
    <h3 className="font-royal text-sm uppercase tracking-wide text-riad-white group-hover:text-riad-gold transition-colors duration-300 leading-snug line-clamp-2">
      {article.title}
    </h3>
  </Link>
);

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="bg-riad-blue min-h-screen flex items-center justify-center text-riad-white">
        <div className="text-center">
          <h1 className="font-royal text-3xl mb-4">Article introuvable</h1>
          <Link to="/blog" className="text-riad-gold font-royal text-sm uppercase tracking-widest hover:underline">
            ← Retour au Blog
          </Link>
        </div>
      </div>
    );
  }

  const related = blogArticles
    .filter(a => a.slug !== article.slug && (a.city === article.city || a.category === article.category))
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    image: {
      '@type': 'ImageObject',
      url: article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`,
      width: 1200,
      height: 630,
    },
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'Filali Design Co.',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Filali Design Co.',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    url: `${SITE_URL}/blog/${article.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${article.slug}` },
    keywords: article.tags.join(', '),
    articleSection: categoryLabels[article.category],
    inLanguage: 'fr-MA',
    about: {
      '@type': 'Thing',
      name: article.city,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: `${SITE_URL}/blog/${article.slug}` },
    ],
  };

  return (
    <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/blog/${article.slug}`} />
        <link rel="alternate" hrefLang="fr" href={`${SITE_URL}/blog/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:url" content={`${SITE_URL}/blog/${article.slug}`} />
        <meta property="og:image" content={article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Filali Design Co." />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:section" content={categoryLabels[article.category]} />
        {article.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <CustomCursor />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-b from-riad-brown/20 to-riad-blue overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="font-arabic text-[18rem] text-riad-gold leading-none">{article.city[0]}</span>
        </div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-riad-gold/60 hover:text-riad-gold font-royal text-xs uppercase tracking-widest mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Retour au Blog
          </button>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] font-royal text-riad-white/30 mb-6 flex-wrap" aria-label="breadcrumb">
            <Link to="/" className="hover:text-riad-gold transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-riad-gold transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-riad-gold">{article.city}</span>
          </nav>

          {/* Category & city */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-riad-gold text-riad-blue text-[10px] font-royal uppercase tracking-[0.15em]">
              {article.city}
            </span>
            <span className="px-3 py-1 border border-riad-gold/30 text-riad-gold/70 text-[10px] font-royal uppercase tracking-[0.1em]">
              {categoryLabels[article.category]}
            </span>
            <span className="text-riad-white/30 text-xs font-royal">
              {new Date(article.date).toLocaleDateString('fr-MA', { day: 'numeric', month: 'long', year: 'numeric' })}
              &nbsp;·&nbsp;{article.readTime} min de lecture
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-royal text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.08em] text-riad-white leading-snug mb-6"
          >
            {article.title}
          </motion.h1>

          <p className="font-elegant text-lg text-riad-white/70 leading-relaxed border-l-2 border-riad-gold pl-4">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <article className="py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          {article.content.map((section, idx) => (
            <section key={idx} className="mb-10">
              {section.heading && (
                <h2 className="font-royal text-xl sm:text-2xl uppercase tracking-[0.1em] text-riad-gold mb-5 mt-8 pb-3 border-b border-riad-gold/20">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="font-elegant text-base sm:text-lg text-riad-white/80 leading-loose mb-5">
                  {para}
                </p>
              ))}
            </section>
          ))}

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-riad-gold/10">
            <p className="text-[11px] font-royal uppercase tracking-widest text-riad-white/40 mb-3">Mots-clés</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-riad-gold/10 border border-riad-gold/20 text-riad-gold/70 text-xs font-royal tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* ── CTA ── */}
      <section className="py-12 px-4 sm:px-6 bg-riad-red/10 border-y border-riad-gold/10">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-royal text-sm uppercase tracking-[0.2em] text-riad-gold mb-2">
            Vous êtes à {article.city} ?
          </p>
          <h2 className="font-royal text-xl sm:text-2xl uppercase tracking-wider text-riad-white mb-4">
            Obtenez votre Devis Gratuit
          </h2>
          <p className="font-elegant text-base text-riad-white/60 mb-6 max-w-md mx-auto">
            Nos artisans se déplacent à {article.city} pour mesures et consultation. Réponse sous 24h.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-riad-gold text-riad-blue font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold-light transition-all duration-500"
          >
            Contacter Filali Design
          </Link>
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      {related.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <h3 className="font-royal text-sm uppercase tracking-[0.25em] text-riad-gold/60 mb-6">
              Articles similaires
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map(a => <RelatedCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
