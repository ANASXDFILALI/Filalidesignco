import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxProps {
    images: { src: string; caption?: string }[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex, isOpen, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex, onClose]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setScale(1);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setScale(1);
    };

    const zoomIn = () => setScale((s) => Math.min(s + 0.5, 3));
    const zoomOut = () => setScale((s) => Math.max(s - 0.5, 1));

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                >
                    {/* Controls */}
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
                        <div className="text-white/70 font-royal text-sm tracking-widest">
                            {currentIndex + 1} / {images.length}
                        </div>
                        <div className="flex gap-4">
                            <button onClick={zoomOut} className="text-white/50 hover:text-white transition-colors"><ZoomOut size={24} /></button>
                            <button onClick={zoomIn} className="text-white/50 hover:text-white transition-colors"><ZoomIn size={24} /></button>
                            <button onClick={onClose} className="text-white/50 hover:text-red-500 transition-colors"><X size={32} /></button>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-riad-gold transition-colors z-50 rounded-full hover:bg-white/5"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-riad-gold transition-colors z-50 rounded-full hover:bg-white/5"
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Image Container */}
                    <div className="w-full h-full flex items-center justify-center p-4 md:p-20 overflow-hidden">
                        <motion.img
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: scale }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            src={images[currentIndex].src}
                            alt={images[currentIndex].caption || `Gallery Image ${currentIndex + 1}`}
                            className="max-w-full max-h-full object-contain shadow-2xl cursor-grab active:cursor-grabbing"
                        />
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none">
                        {images[currentIndex].caption && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                key={currentIndex}
                                className="inline-block bg-black/50 backdrop-blur-md px-6 py-3 rounded-full font-elegant text-riad-gold text-lg italic"
                            >
                                {images[currentIndex].caption}
                            </motion.p>
                        )}
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
