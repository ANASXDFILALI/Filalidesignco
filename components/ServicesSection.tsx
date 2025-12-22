import React from 'react';
import { motion } from 'framer-motion';
import { HammerIcon, SofaIcon, PaletteIcon, CompassIcon } from './Icons';

// Reuse existing icons or define specific ones inline for simplicity
const NeedleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 4 4-8.25 8.25c-.2.2-.5.3-.8.3h-2.2c-.6 0-1-.4-1-1v-2.2c0-.3.1-.6.3-.8L12 2Z"/><path d="m16 6 2 2"/><path d="M19.07 4.93 17 2.86a2.83 2.83 0 1 0-4 4l2.07-2.07"/><path d="M10 22h4"/></svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
);

const services = [
  {
    icon: <HammerIcon className="w-8 h-8" />,
    title: "Rénovation & Restauration",
    desc: "Réparation de structures en bois, remplacement de rembourrage et restauration complète de fauteuils anciens.",
  },
  {
    icon: <SofaIcon className="w-8 h-8" />,
    title: "Création Sur Mesure",
    desc: "Fabrication de salons marocains ou modernes adaptés exactement aux dimensions de votre espace.",
  },
  {
    icon: <NeedleIcon />,
    title: "Tapissage & Revêtement",
    desc: "Pose experte de tissus, cuirs et velours avec options de capitonnage et finitions couture.",
  },
  {
    icon: <CompassIcon className="w-8 h-8" />,
    title: "Rideaux & Textiles",
    desc: "Confection de rideaux, stores et voilages sur mesure pour une harmonie textile parfaite.",
  },
  {
    icon: <PaletteIcon className="w-8 h-8" />,
    title: "Conseil en Décoration",
    desc: "Accompagnement dans le choix des matières, des couleurs et l'agencement de votre intérieur.",
  },
  {
    icon: <TruckIcon />,
    title: "Service Complet A-Z",
    desc: "Prise de mesures à domicile, fabrication, livraison et installation finale par nos équipes.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-riad-white text-riad-brown relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-arabic text-5xl text-riad-gold mb-2"
          >
            خدماتنا
          </motion.div>
          <h2 className="font-royal text-4xl uppercase tracking-[0.2em] text-riad-red font-light">
            Nos Services Exclusifs
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
              <h3 className="font-royal text-xl uppercase tracking-widest mb-4 text-riad-brown group-hover:text-riad-red transition-colors">
                {service.title}
              </h3>
              <p className="font-elegant text-lg text-riad-brown/70 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;