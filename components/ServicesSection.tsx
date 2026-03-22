import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HammerIcon, SofaIcon, PaletteIcon, CompassIcon } from './Icons';

// Reuse existing icons or define specific ones inline for simplicity
const NeedleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 4 4-8.25 8.25c-.2.2-.5.3-.8.3h-2.2c-.6 0-1-.4-1-1v-2.2c0-.3.1-.6.3-.8L12 2Z" /><path d="m16 6 2 2" /><path d="M19.07 4.93 17 2.86a2.83 2.83 0 1 0-4 4l2.07-2.07" /><path d="M10 22h4" /></svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>
);

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <HammerIcon className="w-8 h-8" />,
      title: t('services.renovation.title'),
      desc: t('services.renovation.desc'),
    },
    {
      icon: <SofaIcon className="w-8 h-8" />,
      title: t('services.creation.title'),
      desc: t('services.creation.desc'),
    },
    {
      icon: <NeedleIcon />,
      title: t('services.upholstery.title'),
      desc: t('services.upholstery.desc'),
    },
    {
      icon: <CompassIcon className="w-8 h-8" />,
      title: t('services.curtains.title'),
      desc: t('services.curtains.desc'),
    },
    {
      icon: <PaletteIcon className="w-8 h-8" />,
      title: t('services.advice.title'),
      desc: t('services.advice.desc'),
    },
    {
      icon: <TruckIcon />,
      title: t('services.full_service.title'),
      desc: t('services.full_service.desc'),
    },
  ];

  return (
    <section className="py-14 md:py-24 px-4 sm:px-6 bg-riad-white text-riad-brown relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-arabic text-4xl sm:text-5xl text-riad-gold mb-2"
          >
            {t('services.arabic_title')}
          </motion.div>
          <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.12em] md:tracking-[0.2em] text-riad-red font-light">
            {t('services.title')}
          </h2>
          <div className="w-24 h-[1px] bg-riad-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 border border-riad-gold/10 hover:border-riad-gold/50 bg-white/50 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-gold"
            >
              <div className="w-16 h-16 bg-riad-blue text-riad-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className={`font-royal text-xl uppercase tracking-widest mb-4 text-riad-brown group-hover:text-riad-red transition-colors`}>
                {service.title}
              </h3>
              <p className={`font-elegant text-lg text-riad-brown/70 leading-relaxed`}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA tarifs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="/prix-tarifs"
            className="inline-block px-10 py-4 border border-riad-gold text-riad-brown font-royal text-sm uppercase tracking-[0.2em] hover:bg-riad-gold hover:text-white transition-all duration-500"
          >
            Voir nos Prix & Tarifs
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;