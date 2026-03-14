import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import { useMoodboard } from '../context/MoodboardContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MoodboardIndicator: React.FC = () => {
    const { items, removeItem } = useMoodboard();
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();

    if (items.length === 0) return null;

    const handleNavigateToContact = () => {
        navigate('/contact#moodboard');
        setIsExpanded(false);
    };

    return (
        <>
            {/* Floating Indicator Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="fixed bottom-24 right-8 z-50"
            >
                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative bg-riad-gold text-riad-blue rounded-full p-4 shadow-2xl border-2 border-riad-white hover:bg-riad-gold-light transition-colors"
                >
                    <Heart size={28} className="fill-riad-blue" />

                    {/* Count Badge */}
                    <motion.div
                        key={items.length}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-riad-red text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold border-2 border-white"
                    >
                        {items.length}
                    </motion.div>

                    {/* Pulse animation */}
                    <motion.div
                        className="absolute inset-0 bg-riad-gold rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.button>
            </motion.div>

            {/* Expanded Drawer */}
            <AnimatePresence>
                {isExpanded && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsExpanded(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full max-w-md bg-riad-blue border-l-2 border-riad-gold shadow-2xl z-50 overflow-y-auto"
                        >
                            <div className="p-8">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="font-royal text-3xl text-riad-gold-light tracking-widest uppercase">
                                            {t('moodboard.title')}
                                        </h2>
                                        <p className="font-elegant text-riad-white/70 text-sm mt-2">
                                            {t('moodboard.count', { count: items.length })}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setIsExpanded(false)}
                                        className="text-riad-white/70 hover:text-riad-gold transition-colors"
                                    >
                                        <X size={28} />
                                    </button>
                                </div>

                                {/* Items Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="relative group"
                                        >
                                            <img
                                                src={item.url}
                                                alt={item.title}
                                                className="w-full h-40 object-cover border border-riad-gold/20 group-hover:border-riad-gold/60 transition-colors"
                                            />

                                            {/* Remove button */}
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="absolute top-2 right-2 bg-riad-red/90 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-riad-red"
                                            >
                                                <X size={16} />
                                            </button>

                                            {/* Title */}
                                            <p className="text-riad-white/80 text-xs mt-2 font-elegant truncate">
                                                {item.title}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={handleNavigateToContact}
                                    className="w-full bg-riad-gold text-riad-blue font-royal uppercase tracking-widest py-4 hover:bg-riad-gold-light transition-colors border border-riad-gold-light"
                                >
                                    {t('moodboard.send_inquiry')}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default MoodboardIndicator;
