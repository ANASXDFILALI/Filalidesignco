import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import imagesData from '../images.json';

const images = imagesData.gallery.images;

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  return (
    <section id="workshop" className="py-32 px-6 bg-gradient-to-br from-riad-white via-[#f8f5f0] to-[#f0ece3] overflow-hidden relative">
      {/* Subtle Moroccan pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/patterns/moroccan-pattern.svg')] bg-repeat mix-blend-multiply" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-arabic text-6xl md:text-8xl text-riad-gold mb-6 leading-none drop-shadow-md"
            >
              حيث يولد الإتقان
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-royal text-5xl md:text-7xl text-riad-red uppercase tracking-[0.2em] mb-10 font-light"
            >
              LE CŒUR BATTANT : NOS ATELIERS
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="font-elegant text-2xl md:text-3xl text-riad-brown/85 leading-loose font-light max-w-2xl"
            >
              Dans la pénombre sereine de nos ateliers casablancais, le temps semble suspendu. 
              Sous les mains expertes de nos maîtres-artisans, chaque geste, hérité et perpétué, 
              insuffle à nos créations l'âme immémoriale du Maroc et la signature unique de la Maison Filali.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            className="h-[3px] flex-grow bg-gradient-to-r from-transparent via-riad-gold/60 to-transparent hidden md:block"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              whileHover={{ y: -20, scale: 1.04 }}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-square overflow-hidden rounded-xl border-2 border-riad-gold/40 cursor-pointer shadow-2xl hover:shadow-3xl hover:border-riad-gold-light transition-all duration-700"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-all duration-1200 group-hover:scale-115 sepia-[0.5] group-hover:sepia-0 brightness-95 group-hover:brightness-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-riad-blue/98 via-riad-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="block text-riad-white font-royal text-xl tracking-[0.1em] uppercase border-b-2 border-riad-gold-light pb-2 mb-3 font-light">
                    {img.title}
                  </span>
                  <p className="text-riad-gold-light/95 text-base font-elegant tracking-wider leading-relaxed font-light">
                    {img.subtitle}
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-riad-gold/30 backdrop-blur-md rounded-full p-4 shadow-lg">
                  <svg className="w-6 h-6 text-riad-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="font-elegant text-2xl md:text-3xl text-riad-brown/75 italic max-w-5xl mx-auto leading-loose font-light">
            « Ici, chaque pièce naît du silence, du murmure du bois et de la mémoire des mains qui perpétuent les secrets d'autrefois. »
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-h-[80vh] w-auto object-contain border border-riad-gold/20 shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-riad-gold-light font-royal text-3xl uppercase tracking-widest mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 font-elegant text-xl italic">
                  {selectedImage.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;