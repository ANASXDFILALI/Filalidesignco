import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#courtyard' },
    { name: 'Savoir-Faire', href: '#heritage' },
    { name: 'Design', href: '#modernity' },
    { name: 'Atelier', href: '#workshop' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out border-b border-riad-gold/10
      bg-riad-blue shadow-lg h-24`} 
    >
      <div className="container mx-auto h-full px-8 flex items-center justify-between">
        {/* Logo Section - Text Only */}
        <div className="flex items-center gap-4">
          <a href="#" className="block group">
            <span className="block font-royal text-riad-white text-3xl md:text-4xl tracking-[0.2em] leading-none group-hover:text-riad-gold-light transition-colors">FILALI</span>
            <span className="block font-elegant text-riad-gold-light text-sm md:text-base tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity">DESIGN CO.</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative font-royal text-xs tracking-[0.15em] uppercase text-riad-white/80 hover:text-riad-gold-light transition-colors duration-300 group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-riad-gold-light group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
          
          <LuxuryButton 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="!px-8 !py-3 !text-riad-blue !bg-riad-gold-light hover:!bg-riad-white shadow-[0_0_20px_rgba(230,199,108,0.3)]"
            variant="primary"
          >
            <span className="group-hover:text-riad-blue transition-colors relative z-10">Contact</span>
          </LuxuryButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-riad-gold-light hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-riad-blue z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-riad-gold-light hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-royal text-2xl text-riad-white hover:text-riad-gold-light transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-16 h-[1px] bg-riad-gold-light/30 my-4"></div>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-royal text-xl text-riad-gold-light tracking-widest uppercase"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;