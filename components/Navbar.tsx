import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LuxuryButton from './LuxuryButton';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavLink {
  name: string;
  href: string;
  isHash: boolean;
}

const navLinks: NavLink[] = [
  { name: 'Accueil', href: '/', isHash: false },
  { name: 'Collections', href: '/#collections', isHash: true },
  { name: 'Portfolio', href: '/portfolio', isHash: false },
  { name: 'Notre Histoire', href: '/story', isHash: false },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split('#');
    const targetPath = path || '/';
    if (location.pathname !== targetPath) {
      navigate(targetPath);
      setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 500);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleContact = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) =>
    !href.includes('#') && location.pathname === href;

  const linkClass = (href: string) =>
    `relative font-royal text-xs tracking-[0.15em] uppercase transition-colors duration-300 group py-2 cursor-pointer
    ${isActive(href) ? 'text-riad-gold-leaf' : 'text-riad-white/80 hover:text-riad-gold-leaf'}`;

  const underline = (href: string) =>
    `absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-riad-gold to-riad-gold-light transition-all duration-500 ease-out
    ${isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'}`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-riad-gold/10
      ${isScrolled ? 'bg-riad-blue/80 backdrop-blur-md shadow-glass py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto h-full px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="block group flex-shrink-0">
          <img
            src="/fd.png"
            alt="Filali Design Co."
            className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) =>
            link.isHash ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashLink(e, link.href)}
                className={linkClass(link.href)}
              >
                {link.name}
                <span className={underline(link.href)} />
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={linkClass(link.href)}
              >
                {link.name}
                <span className={underline(link.href)} />
              </Link>
            )
          )}

          <LanguageSwitcher />

          <LuxuryButton
            onClick={handleContact}
            className="!px-8 !py-3 !text-riad-blue !bg-riad-gold-light hover:!bg-white shadow-gold hover:shadow-gold-hover transition-all duration-300"
            variant="primary"
          >
            <span className="relative z-10 font-bold tracking-wider">Contactez-nous</span>
          </LuxuryButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-riad-gold-light hover:text-white transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
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
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-riad-blue/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-riad-gold-light hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) =>
                link.isHash ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleHashLink(e, link.href)}
                    className={`font-royal text-2xl transition-all duration-300 ${
                      isActive(link.href)
                        ? 'text-riad-gold-leaf'
                        : 'text-riad-white hover:text-transparent hover:bg-clip-text hover:bg-gold-gradient'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-royal text-2xl transition-all duration-300 ${
                      isActive(link.href)
                        ? 'text-riad-gold-leaf'
                        : 'text-riad-white hover:text-transparent hover:bg-clip-text hover:bg-gold-gradient'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}

              <div className="w-16 h-[1px] bg-riad-gold-light/30 my-2" />

              <button
                onClick={handleContact}
                className="font-royal text-xl text-riad-gold-light tracking-widest uppercase hover:scale-110 transition-transform duration-300"
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
