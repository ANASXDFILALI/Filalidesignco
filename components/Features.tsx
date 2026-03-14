import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HammerIcon, GemIcon, CompassIcon, PaletteIcon, SofaIcon, LampIcon } from './Icons';

interface FeatureCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  theme: 'dark' | 'light' | 'red';
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const FeatureCard: React.FC<FeatureCardProps> = ({ number, icon, title, description, delay, theme }) => {
  const isDark = theme === 'dark';
  const isRed = theme === 'red';

  let bgClass = 'bg-riad-white/50 text-riad-brown';
  let numberColor = 'text-riad-brown';
  let titleColor = 'text-riad-red';

  if (isDark) {
    bgClass = 'bg-riad-blue/40 text-riad-white backdrop-blur-sm';
    numberColor = 'text-riad-gold';
    titleColor = 'text-riad-white';
  } else if (isRed) {
    bgClass = 'bg-black/20 text-riad-white border-riad-gold/30 backdrop-blur-sm';
    numberColor = 'text-riad-gold';
    titleColor = 'text-riad-gold-light';
  }

  return (
    <motion.div
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={`relative p-10 border border-riad-gold/10 hover:border-riad-gold/40 transition-colors duration-500 group overflow-hidden ${bgClass} hover:shadow-gold rounded-sm`}
    >
      <div className={`absolute top-4 right-6 font-royal text-8xl opacity-[0.03] leading-none select-none group-hover:scale-110 group-hover:opacity-[0.07] transition-all duration-700 ${numberColor}`}>
        {number}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-riad-gold mb-8 transform group-hover:-translate-y-2 transition-transform duration-500 group-hover:text-riad-gold-light">
          <div className="w-16 h-16 flex items-center justify-center [&>svg]:w-14 [&>svg]:h-14 filter drop-shadow-md">
            {icon}
          </div>
        </div>

        <h3 className={`font-royal text-2xl tracking-[0.25em] uppercase mb-6 font-light ${titleColor}`}>
          {title}
        </h3>

        <p className="font-elegant text-xl leading-relaxed opacity-90 font-light group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-riad-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-riad-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-riad-gold to-riad-gold-light group-hover:w-full transition-all duration-700 ease-in-out"></div>
    </motion.div>
  );
};

export const HeritageSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="heritage" className="py-32 px-6 bg-riad-blue text-riad-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-riad-blue to-transparent pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-arabic text-7xl md:text-9xl text-transparent bg-clip-text bg-gold-gradient mb-6 leading-normal drop-shadow-lg"
          >
            الأصالة
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-royal text-4xl md:text-6xl uppercase tracking-[0.25em] mb-8 font-light"
          >
            {t('features.heritage.title_prefix')} <span className="text-riad-gold-light">{t('features.heritage.title_suffix')}</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-riad-gold to-transparent mx-auto mb-10"></div>
          <p className="font-elegant text-2xl md:text-3xl italic opacity-85 max-w-4xl mx-auto leading-relaxed font-light text-riad-white/90">
            {t('features.heritage.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <FeatureCard
            theme="dark"
            number="I"
            icon={<HammerIcon />}
            title={t('features.heritage.cards.transmission.title')}
            description={t('features.heritage.cards.transmission.desc')}
            delay={0}
          />
          <FeatureCard
            theme="dark"
            number="II"
            icon={<GemIcon />}
            title={t('features.heritage.cards.materials.title')}
            description={t('features.heritage.cards.materials.desc')}
            delay={0.2}
          />
          <FeatureCard
            theme="dark"
            number="III"
            icon={<CompassIcon />}
            title={t('features.heritage.cards.proportions.title')}
            description={t('features.heritage.cards.proportions.desc')}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export const ModernitySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="modernity" className="py-32 px-6 bg-riad-red text-riad-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-riad-red via-riad-red/90 to-riad-red/80 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-arabic text-7xl md:text-9xl text-riad-gold-light mb-6 leading-normal drop-shadow-md"
          >
            المعاصرة
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-royal text-4xl md:text-6xl uppercase tracking-[0.25em] text-riad-white mb-8 font-light"
          >
            {t('features.modernity.title_prefix')} <span className="text-riad-gold-leaf">{t('features.modernity.title_suffix')}</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-riad-gold-leaf to-transparent mx-auto mb-10"></div>
          <p className="font-elegant text-2xl md:text-3xl italic text-riad-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            {t('features.modernity.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <FeatureCard
            theme="red"
            number="IV"
            icon={<PaletteIcon />}
            title={t('features.modernity.cards.evolution.title')}
            description={t('features.modernity.cards.evolution.desc')}
            delay={0}
          />
          <FeatureCard
            theme="red"
            number="V"
            icon={<SofaIcon />}
            title={t('features.modernity.cards.unity.title')}
            description={t('features.modernity.cards.unity.desc')}
            delay={0.2}
          />
          <FeatureCard
            theme="red"
            number="VI"
            icon={<LampIcon />}
            title={t('features.modernity.cards.light.title')}
            description={t('features.modernity.cards.light.desc')}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};