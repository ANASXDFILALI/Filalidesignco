import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import imagesData from '../images.json';

const heroImages = imagesData.hero;

const Hero: React.FC = () => {
  return (
    <section id="courtyard" className="h-screen w-full relative overflow-hidden flex items-center justify-center">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImages.poster}
          className="w-full h-full object-cover animate-subtle-zoom scale-105"
        >
          <source src={heroImages.video} type="video/mp4" />
          <img src={heroImages.fallback} alt="Artisanat marocain" className="w-full h-full object-cover" />
        </video>

        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-riad-blue via-riad-blue/40 to-black/20 z-10" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="block font-royal text-xs md:text-sm text-riad-gold uppercase tracking-[0.3em] md:tracking-[0.45em] mb-6"
          >
            Casablanca · Artisan depuis 1985
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-royal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-riad-white uppercase tracking-[0.06em] md:tracking-[0.1em] leading-tight mb-6 drop-shadow-2xl font-light"
          >
            L'art du salon marocain
            <br />
            <span className="text-riad-gold-light font-medium">façonné à la main.</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-riad-gold-light to-transparent my-6 md:my-8 mx-auto"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="font-elegant text-base sm:text-lg md:text-xl text-riad-white/70 max-w-xl leading-relaxed mb-10 px-2"
          >
            Velours, cèdre sculpté, zellige — chaque pièce naît
            dans notre atelier et vit dans votre foyer.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link
              to="/contact"
              className="px-10 py-4 bg-riad-gold text-riad-blue font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold-light transition-all duration-400 shadow-gold"
            >
              Devis gratuit
            </Link>
            <Link
              to="/portfolio"
              className="px-10 py-4 border border-riad-white/30 text-riad-white font-royal text-sm uppercase tracking-[0.2em] hover:border-riad-gold hover:text-riad-gold transition-all duration-400"
            >
              Voir nos réalisations
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-riad-gold-light/60 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.45em] font-royal">Découvrir</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-riad-gold-light to-transparent opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;
