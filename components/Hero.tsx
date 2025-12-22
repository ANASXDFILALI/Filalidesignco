import React from 'react';
import { motion } from 'framer-motion';
import LuxuryButton from './LuxuryButton';
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
          className="w-full h-full object-cover animate-subtle-zoom"
        >
          {/* Using a high-quality video of Moroccan/Architectural details */}
          <source src={heroImages.video} type="video/mp4" />
          {/* Fallback Image */}
          <img src={heroImages.fallback} alt="Riad Background" className="w-full h-full object-cover" />
        </video>
        
        {/* Cinematic Overlay Gradients */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Deep gradient from bottom to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-riad-blue/95 via-riad-blue/40 to-black/40 z-10" />
        {/* Pattern Overlay for texture */}
        <div className="absolute inset-0 opacity-10 z-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url('${heroImages.pattern}')` }}></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto mt-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
            <div className="mb-6 overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="block font-arabic text-6xl md:text-8xl text-riad-gold-light drop-shadow-lg"
                >
                  مرحبا بكم
                </motion.span>
            </div>

            <h1 className="font-royal text-6xl md:text-8xl lg:text-9xl text-riad-white uppercase tracking-[0.25em] mb-6 drop-shadow-2xl font-light">
              Filali Design
            </h1>
            
            <div className="w-32 h-[2px] bg-riad-gold-light mb-10 mx-auto" />
            
            <h2 className="font-elegant text-3xl md:text-5xl text-riad-gold-light/90 italic mb-12 font-normal tracking-wide">
              Architecture d'Intérieur & Héritage
            </h2>

            <p className="max-w-3xl mx-auto font-elegant text-xl md:text-2xl text-riad-white/85 leading-loose mb-14 drop-shadow-lg font-light">
              Depuis trois générations à Casablanca, la famille Filali crée des intérieurs d'exception, mariant l'opulence de l'artisanat traditionnel au raffinement du design européen contemporain.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
                <LuxuryButton 
                    onClick={() => document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="primary"
                    className="!bg-riad-gold-light !text-riad-blue hover:!bg-riad-white transition-all shadow-[0_0_30px_rgba(230,199,108,0.4)] px-12"
                >
                    Nos Créations
                </LuxuryButton>
                
                <LuxuryButton 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="outline"
                    className="!border-riad-white !text-riad-white hover:!bg-white/10 backdrop-blur-sm px-12"
                >
                    Prendre Rendez-vous
                </LuxuryButton>
            </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-riad-gold-light/70 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-royal">Découvrir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-riad-gold-light to-transparent opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;