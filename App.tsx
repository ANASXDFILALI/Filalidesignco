import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HeritageSection, ModernitySection } from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import IntroGate from './components/IntroGate';
import CapitoneSection from './components/CapitoneSection';
import BedSection from './components/BedSection';
import CurtainSection from './components/CurtainSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-riad-blue overflow-x-hidden cursor-none">
      
      {/* Custom Luxury Cursor */}
      <CustomCursor />

      {/* The 3D Entry Gate */}
      <IntroGate onEnter={() => setHasEntered(true)} />

      {/* Main Content - Only visible/interactive after entry starts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`relative w-full ${!hasEntered ? 'h-screen overflow-hidden' : ''}`}
      >
          <Background />
          
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-riad-gold origin-left z-[100]"
            style={{ scaleX }}
          />

          <Navbar />
          <Hero />
          
          <ServicesSection />
          
          <HeritageSection />
          <ModernitySection />
          
          {/* Product Collections */}
          <CapitoneSection />
          <BedSection />
          <CurtainSection />
          
          <ProcessSection />
          
          <Gallery />
          <Contact />
          <Footer />
          
          {/* Floating Action Button - WhatsApp */}
          <a 
            href="https://wa.me/212600000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300 z-50 border-2 border-riad-white cursor-pointer"
            aria-label="Contact on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 1h4a.5.5 0 0 0 1-1v-1a.5.5 0 0 0 1-1h-1a.5.5 0 0 0-1 1v1a.5.5 0 0 0-1 1h-1a.5.5 0 0 0-1-1v-1a.5.5 0 0 0-1-1h-1a.5.5 0 0 0-1 1v1z" /> 
            </svg>
          </a>
      </motion.div>
    </main>
  );
}

export default App;