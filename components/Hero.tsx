import React from 'react';
import { motion } from 'framer-motion';
import LuxuryButton from './LuxuryButton';
import { useTranslation } from 'react-i18next';
import imagesData from '../images.json';

const heroImages = imagesData.hero;

const Hero: React.FC = () => {
  const { t } = useTranslation();

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
          <img src={heroImages.fallback} alt="Riad Background" className="w-full h-full object-cover" />
        </video>

        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-riad-blue via-riad-blue/50 to-black/30 z-10" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-7xl mx-auto mt-16 md:mt-20">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="block font-royal text-xs md:text-sm text-riad-gold uppercase tracking-[0.2em] md:tracking-[0.35em] mb-4 md:mb-6"
          >
            Casablanca · Est. 1985
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-royal text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-riad-white uppercase tracking-[0.08em] md:tracking-[0.12em] mb-4 drop-shadow-2xl font-light leading-tight"
          >
            Filali <span className="text-riad-gold-light font-medium">Design</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-riad-gold-light to-transparent my-6 md:my-8 mx-auto"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-elegant text-base sm:text-lg md:text-2xl text-riad-white/75 italic tracking-wide max-w-xs sm:max-w-sm md:max-w-xl leading-relaxed mb-8 md:mb-12 px-2"
          >
            Salons sur mesure, mobilier bespoke & intérieurs d'exception —<br className="hidden md:block" /> créés par une famille, pour la vôtre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8"
          >
            <LuxuryButton
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
              className="!bg-riad-gold-light !text-riad-blue hover:!bg-riad-white transition-all shadow-gold hover:shadow-gold-hover px-10 py-4 text-lg"
            >
              {t('hero.cta')}
            </LuxuryButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-riad-gold-light/70 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-royal animate-pulse">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-riad-gold-light to-transparent opacity-60 rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;