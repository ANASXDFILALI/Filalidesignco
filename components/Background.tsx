import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  // Zellige Pattern (SVG)
  const zelligePattern = `data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50,50 L150,50 L150,150 L50,150 Z' fill='none' stroke='%233d2719' stroke-width='0.3' opacity='0.03'/%3E%3Cpath d='M75,75 L125,75 L125,125 L75,125 Z' fill='none' stroke='%23b89446' stroke-width='0.2' opacity='0.02'/%3E%3Ccircle cx='100' cy='100' r='20' fill='none' stroke='%235c1a1a' stroke-width='0.2' opacity='0.02'/%3E%3C/svg%3E`;
  
  // Arabesque Pattern (SVG)
  const arabesquePattern = `data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M150,50 Q200,100 150,150 Q100,200 150,250 Q200,300 150,350' fill='none' stroke='%23b89446' stroke-width='0.5' opacity='0.015'/%3E%3Cpath d='M50,150 Q100,200 150,150 Q200,100 250,150 Q300,200 350,150' fill='none' stroke='%235c1a1a' stroke-width='0.5' opacity='0.015'/%3E%3C/svg%3E`;

  // Generate random dust particles
  const dustParticles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1, // 1px to 3px
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
      xOffset: (Math.random() - 0.5) * 50,
      yOffset: -(Math.random() * 100 + 50)
    }));
  }, []);

  return (
    <>
      <motion.div 
        style={{ y: y1 }}
        className="fixed top-0 left-0 w-full h-[120vh] z-[-2] pointer-events-none opacity-30"
      >
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("${zelligePattern}"), url("${arabesquePattern}")`,
            backgroundSize: '400px 400px, 600px 600px',
            backgroundPosition: 'center, 30% 70%'
          }}
        />
      </motion.div>

      {/* Plaster Texture Overlay */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none mix-blend-multiply opacity-50 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>

      {/* Ambient Dust Particles */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {dustParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-riad-gold"
            initial={{ 
              top: `${particle.top}%`, 
              left: `${particle.left}%`, 
              opacity: 0 
            }}
            animate={{ 
              y: [0, particle.yOffset],
              x: [0, particle.xOffset],
              opacity: [0, particle.opacity, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Decorative Floating Lanterns */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-10 h-10 rounded-full bg-gradient-to-br from-riad-gold to-riad-gold-leaf blur-sm opacity-10 shadow-gold animate-float`}
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 35}%`,
              animationDelay: `${i * 5}s`,
              animationDuration: `${15 + i * 5}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Background;