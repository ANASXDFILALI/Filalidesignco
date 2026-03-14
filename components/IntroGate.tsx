import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroGateProps {
  onEnter: () => void;
}

const IntroGate: React.FC<IntroGateProps> = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [canSkip, setCanSkip] = useState(false);

  // Check for return visitor
  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    // If visited in last 1 hour (3600000 ms), show skip option immediately
    if (lastVisit && now - parseInt(lastVisit) < 3600000) {
      setCanSkip(true);
    }
  }, []);

  // Pattern for the doors
  const doorPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b89446' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  const handleEnter = () => {
    setIsOpen(true);
    localStorage.setItem('lastVisit', Date.now().toString());
    // Delay the actual state change slightly to allow the light animation to start
    setTimeout(onEnter, 1200);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center overflow-hidden perspective-[2000px]">

          {/* THE GOLDEN LIGHT SEAM EFFECT - Made simpler and more impactful */}
          <motion.div
            initial={{ opacity: 0, width: '0%', height: '100%' }}
            exit={{
              opacity: [0, 1, 0],
              width: ['0px', '2px', '100vw'],
              transition: { duration: 1.8, ease: "circIn" }
            }}
            className="absolute z-40 bg-white shadow-[0_0_150px_40px_rgba(255,215,0,0.9)] pointer-events-none h-full"
          />

          {/* LEFT DOOR PANEL */}
          <motion.div
            initial={{ rotateY: 0, x: 0 }}
            exit={{
              rotateY: -110,
              x: -50,
              transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
            }}
            style={{ transformOrigin: 'left center' }}
            className="w-1/2 h-full bg-riad-blue relative shadow-2xl border-r border-riad-gold/30 z-20 flex items-center justify-end"
          >
            {/* Texture & Gradients */}
            <div className="absolute inset-0 opacity-100 bg-riad-blue" />
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("${doorPattern}")` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Inner Gold Trim */}
            <div className="absolute top-8 bottom-8 right-8 left-8 border border-riad-gold/20" />
            <div className="absolute top-10 bottom-10 right-10 left-10 border border-riad-gold/10" />

            {/* Handle/Knocker Base Left */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 bg-riad-blue border-l-2 border-t-2 border-b-2 border-riad-gold/50 rounded-l-full overflow-hidden mr-[-1px] shadow-lg">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("${doorPattern}")` }} />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>

          {/* RIGHT DOOR PANEL */}
          <motion.div
            initial={{ rotateY: 0, x: 0 }}
            exit={{
              rotateY: 110,
              x: 50,
              transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
            }}
            style={{ transformOrigin: 'right center' }}
            className="w-1/2 h-full bg-riad-blue relative shadow-2xl border-l border-riad-gold/30 z-20 flex items-center justify-start"
          >
            {/* Texture & Gradients */}
            <div className="absolute inset-0 opacity-100 bg-riad-blue" />
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("${doorPattern}")` }} />
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Inner Gold Trim */}
            <div className="absolute top-8 bottom-8 right-8 left-8 border border-riad-gold/20" />
            <div className="absolute top-10 bottom-10 right-10 left-10 border border-riad-gold/10" />

            {/* Handle/Knocker Base Right */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64 bg-riad-blue border-r-2 border-t-2 border-b-2 border-riad-gold/50 rounded-r-full overflow-hidden ml-[-1px] shadow-lg">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("${doorPattern}")` }} />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>

          {/* CENTRAL INTERACTION (The Lock) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.4 } }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleEnter}
            className="absolute z-50 cursor-pointer"
          >
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-riad-gold-light/20 rounded-full blur-xl transition-all duration-700 ${isHovered || canSkip ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}`} />

              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-riad-gold-light/40 border-dashed rounded-full"
              />

              {/* The "Knocker" Button */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-riad-blue to-zinc-900 rounded-full border border-riad-gold-light shadow-2xl flex flex-col items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-riad-gold-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  animate={isHovered ? { y: -2 } : { y: 0 }}
                  className="text-riad-gold-light font-royal text-sm tracking-[0.3em] uppercase mb-1 z-10"
                >
                  Entrer
                </motion.div>

                <motion.div
                  animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                  className="text-riad-gold-light/80 font-arabic text-4xl z-10 mt-1"
                >
                  بسم الله
                </motion.div>
              </div>
            </div>

            {/* Quick Skip Hint if returning visitor */}
            {canSkip && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-max text-riad-gold-light/50 font-royal text-xs tracking-widest uppercase"
              >
                Bon retour
              </motion.div>
            )}
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default IntroGate;