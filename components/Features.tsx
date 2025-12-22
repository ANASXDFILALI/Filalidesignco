import React from 'react';
import { motion } from 'framer-motion';
import { HammerIcon, GemIcon, CompassIcon, PaletteIcon, SofaIcon, LampIcon } from './Icons';

interface FeatureCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  theme: 'dark' | 'light' | 'red';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, icon, title, description, delay, theme }) => {
  const isDark = theme === 'dark';
  const isRed = theme === 'red';
  
  let bgClass = 'bg-riad-white/50 text-riad-brown';
  let numberColor = 'text-riad-brown';
  let titleColor = 'text-riad-red';

  if (isDark) {
    bgClass = 'bg-riad-blue/50 text-riad-white';
    numberColor = 'text-riad-gold';
    titleColor = 'text-riad-white';
  } else if (isRed) {
    bgClass = 'bg-black/20 text-riad-white border-riad-gold/30';
    numberColor = 'text-riad-gold';
    titleColor = 'text-riad-gold';
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative p-10 border border-riad-gold/20 hover:border-riad-gold-light/60 transition-colors duration-500 group overflow-hidden ${bgClass}`}
    >
      <div className={`absolute top-6 right-8 font-royal text-7xl opacity-10 leading-none select-none group-hover:scale-110 transition-transform duration-500 ${numberColor}`}>
        {number}
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-riad-gold mb-8 transform group-hover:-translate-y-2 transition-transform duration-500 group-hover:text-riad-gold-light">
          <div className="w-16 h-16 flex items-center justify-center [&>svg]:w-14 [&>svg]:h-14">
            {icon}
          </div>
        </div>
        
        <h3 className={`font-royal text-2xl tracking-[0.25em] uppercase mb-6 font-light ${titleColor}`}>
          {title}
        </h3>
        
        <p className="font-elegant text-xl leading-relaxed opacity-90 font-light">
          {description}
        </p>
      </div>
      
      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-riad-gold-light group-hover:w-full transition-all duration-700 ease-in-out"></div>
    </motion.div>
  );
};

export const HeritageSection: React.FC = () => {
  return (
    <section id="heritage" className="py-32 px-6 bg-riad-blue text-riad-white relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-arabic text-7xl md:text-9xl text-transparent bg-clip-text bg-gold-gradient mb-6 leading-normal"
          >
            الأصالة
          </motion.div>
          <h2 className="font-royal text-5xl md:text-7xl uppercase tracking-[0.3em] mb-8 font-light">Principes de la Tapisserie Traditionnelle</h2>
          <div className="w-32 h-[2px] bg-riad-gold mx-auto mb-10"></div>
          <p className="font-elegant text-3xl italic opacity-85 max-w-4xl mx-auto leading-relaxed font-light">
            Gardiens d'un savoir-faire ancestral, nos maîtres artisans perpétuent l'excellence des arts décoratifs marocains au service de vos projets résidentiels, de père en fils.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <FeatureCard 
            theme="dark"
            number="I"
            icon={<HammerIcon />}
            title="Transmission du Savoir-Faire"
            description="La tapisserie est un art hérité. Chaque geste, chaque couture et chaque technique de garnissage perpétuent un savoir ancestral transmis de maître à apprenti."
            delay={0.1}
          />
          <FeatureCard 
            theme="dark"
            number="II"
            icon={<GemIcon />}
            title="Respect des Matières Nobles"
            description="Les étoffes, cuirs et rembourrages sont choisis pour leur authenticité et leur durabilité. Aucune matière n'est utilisée sans comprendre son origine, son usage et son vieillissement."
            delay={0.3}
          />
          <FeatureCard 
            theme="dark"
            number="III"
            icon={<CompassIcon />}
            title="Harmonie des Proportions"
            description="Chaque salon, banquette ou assise respecte des proportions éprouvées par le temps, garantes du confort, de l'équilibre visuel et de la noblesse de l'ensemble."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export const ModernitySection: React.FC = () => {
  return (
    <section id="modernity" className="py-32 px-6 bg-riad-red text-riad-white relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-arabic text-7xl md:text-9xl text-riad-gold-light mb-6 leading-normal"
          >
            المعاصرة
          </motion.div>
          <h2 className="font-royal text-5xl md:text-7xl uppercase tracking-[0.3em] text-riad-white mb-8 font-light">Principes d'Évolution du Style Traditionnel</h2>
          <div className="w-32 h-[2px] bg-riad-gold-light mx-auto mb-10"></div>
          <p className="font-elegant text-3xl italic text-riad-white/90 max-w-4xl mx-auto leading-relaxed font-light">
             L'évolution ne rompt jamais avec la tradition. Une approche philosophique et patrimoniale qui préserve l'âme de l'artisanat ancien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <FeatureCard 
            theme="red"
            number="IV"
            icon={<PaletteIcon />}
            title="Continuité du Style"
            description="L'évolution ne rompt jamais avec la tradition. Les formes, couleurs et volumes anciens sont adaptés avec retenue pour répondre aux usages contemporains."
            delay={0.1}
          />
          <FeatureCard 
            theme="red"
            number="V"
            icon={<SofaIcon />}
            title="Unité de l'Ameublement"
            description="Salons, banquettes, têtes de lit, rideaux et coussins sont conçus comme un ensemble cohérent, afin de préserver l'âme et l'identité de l'espace."
            delay={0.3}
          />
          <FeatureCard 
            theme="red"
            number="VI"
            icon={<LampIcon />}
            title="Maîtrise de la Lumière"
            description="Les rideaux, voilages et stores textiles sont pensés pour filtrer la lumière avec douceur, protéger l'intimité et sublimer les matières et les couleurs."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};