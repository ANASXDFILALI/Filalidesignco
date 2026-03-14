import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LuxuryButton from './LuxuryButton';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useProject } from '../context/ProjectContext';
import { useTranslation } from 'react-i18next';

const CapitoneSection: React.FC = () => {
  const { t } = useTranslation();
  const { albums } = useProject();
  const salonModels = albums.filter(album => album.category === 'salons');

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    if (salonModels.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % salonModels.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [salonModels.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % salonModels.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + salonModels.length) % salonModels.length);

  if (salonModels.length === 0) return null; // Or some fallback state

  const currentModel = salonModels[currentIndex];

  // SVG Pattern for Capitonné effect
  const capitonePattern = `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='60%25'%3E%3Cstop offset='0%25' stop-color='%233e2b22' stop-opacity='1'/%3E%3Cstop offset='100%25' stop-color='%23261a14' stop-opacity='1'/%3E%3C/radialGradient%3E%3Cfilter id='shadow' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeDropShadow dx='1' dy='2' stdDeviation='3' flood-color='black' flood-opacity='0.6'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='120' height='120' fill='%23261a14'/%3E%3C!-- Diamond shapes simulating the puff --%3E%3Cpath d='M0 0 Q60 10 120 0 L60 60 Z' fill='url(%23grad)' opacity='0.5'/%3E%3Cpath d='M0 120 Q60 110 120 120 L60 60 Z' fill='url(%23grad)' opacity='0.5'/%3E%3Cpath d='M0 0 Q10 60 0 120 L60 60 Z' fill='url(%23grad)' opacity='0.3'/%3E%3Cpath d='M120 0 Q110 60 120 120 L60 60 Z' fill='url(%23grad)' opacity='0.3'/%3E%3C!-- Buttons --%3E%3Ccircle cx='0' cy='0' r='6' fill='%2318100c' filter='url(%23shadow)'/%3E%3Ccircle cx='120' cy='0' r='6' fill='%2318100c' filter='url(%23shadow)'/%3E%3Ccircle cx='0' cy='120' r='6' fill='%2318100c' filter='url(%23shadow)'/%3E%3Ccircle cx='120' cy='120' r='6' fill='%2318100c' filter='url(%23shadow)'/%3E%3Ccircle cx='60' cy='60' r='6' fill='%2318100c' filter='url(%23shadow)'/%3E%3C/svg%3E`;

  return (
    <section id="signature" className="py-32 px-6 relative overflow-hidden border-y border-riad-gold/30">

      {/* CAPITONNÉ BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#261a14',
          backgroundImage: `url("${capitonePattern}")`,
          backgroundSize: '120px 120px'
        }}
      >
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            key={currentModel.id + '-arabic'}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-arabic text-7xl md:text-9xl text-riad-gold-light mb-6 drop-shadow-md leading-tight"
          >
            {t('collections.salons.arabic_title')}
          </motion.div>
          <h2 className={`font-royal text-5xl md:text-6xl uppercase tracking-[0.3em] text-riad-white font-light`}>
            {t('collections.salons.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Text Content - Dynamic */}
          <div className="relative h-[450px] flex items-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="text-left bg-black/60 backdrop-blur-md p-10 md:p-16 border border-riad-gold/20 shadow-2xl w-full"
              >
                <div className="flex items-center gap-4 mb-6 text-riad-gold-light/60 text-sm font-royal tracking-[0.2em] uppercase">
                  <span>{t('collections.salons.model')} {currentIndex + 1} / {salonModels.length}</span>
                  <div className="h-[1px] flex-grow bg-riad-gold-light/30"></div>
                </div>

                <h3 className="font-royal text-3xl md:text-5xl text-riad-white mb-4 tracking-wider font-light">
                  {currentModel.title}
                </h3>

                <div className={`font-elegant text-2xl text-riad-gold-light italic mb-10 font-light`}>
                  {t('collections.salons.subtitle')}
                </div>

                <p className={`font-elegant text-xl md:text-2xl text-riad-white/85 leading-loose mb-12 font-light`}>
                  {currentModel.description}
                </p>

                <div className="flex items-center gap-6">
                  <LuxuryButton
                    variant="outline"
                    className="!border-riad-gold-light !text-riad-gold-light hover:!bg-riad-gold-light hover:!text-riad-brown"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('collections.salons.configure')}
                  </LuxuryButton>

                  <div className="flex gap-2 ml-auto">
                    <button onClick={prevSlide} className="p-4 border border-riad-gold/30 rounded-full text-riad-gold hover:bg-riad-gold hover:text-riad-brown transition-colors">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="p-4 border border-riad-gold/30 rounded-full text-riad-gold hover:bg-riad-gold hover:text-riad-brown transition-colors">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual Showcase - Dynamic */}
          <div className="relative h-[600px] w-full order-1 lg:order-2">
            {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-riad-gold/30 m-4 z-20 pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentModel.coverImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                src={currentModel.coverImage}
                alt={currentModel.title}
                className="w-full h-full object-cover shadow-2xl"
              />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CapitoneSection;