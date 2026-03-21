import React from 'react';
import { SOCIAL_LINKS, CONTACT_PHONE, CONTACT_EMAIL } from '../lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-riad-red text-riad-sand pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto text-center relative z-10">

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src="/fd.png"
            alt="Filali Design Co."
            className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20 text-left md:text-center border-t border-riad-gold/20 pt-16">
          <div>
            <h4 className="font-royal text-sm text-riad-gold mb-6 uppercase tracking-[0.25em]">Contact</h4>
            <p className="font-elegant text-xl opacity-80 leading-loose">
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-riad-white transition-colors duration-300 block">{CONTACT_PHONE}</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-riad-white transition-colors duration-300 block">{CONTACT_EMAIL}</a>
            </p>
          </div>
          <div>
            <h4 className="font-royal text-sm text-riad-gold mb-6 uppercase tracking-[0.25em]">Adresse</h4>
            <p className="font-elegant text-xl opacity-80 leading-loose hover:text-riad-white transition-colors duration-300">
              Atelier Gauthier<br />
              Casablanca, Maroc
            </p>
          </div>
          <div>
            <h4 className="font-royal text-sm text-riad-gold mb-6 uppercase tracking-[0.25em]">Réseaux</h4>
            <div className="flex gap-6 justify-start md:justify-center">
              {([
                { label: 'Instagram', url: SOCIAL_LINKS.instagram },
                { label: 'LinkedIn',  url: SOCIAL_LINKS.linkedin  },
                { label: 'Pinterest', url: SOCIAL_LINKS.pinterest },
              ] as const).map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                  className="font-elegant text-xl opacity-80 hover:text-riad-gold-leaf hover:opacity-100 transition-colors duration-300 transform hover:-translate-y-1 inline-block">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-xs font-royal text-riad-gold/40 uppercase tracking-[0.2em] flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center">
          <span>© {new Date().getFullYear()} Filali Design Co.</span>
          <span className="hidden md:inline">•</span>
          <a href="/story" className="hover:text-riad-gold transition-colors">Notre Histoire</a>
          <span className="hidden md:inline">•</span>
          <a href="/faq" className="hover:text-riad-gold transition-colors">FAQ</a>
          <span className="hidden md:inline">•</span>
          <a href="/contact" className="hover:text-riad-gold transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;