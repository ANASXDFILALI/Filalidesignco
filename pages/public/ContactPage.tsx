import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import CustomCursor from '../../components/CustomCursor';
import LuxuryButton from '../../components/LuxuryButton';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, X } from 'lucide-react';
import { useMoodboard } from '../../context/MoodboardContext';

const MoodboardSection: React.FC = () => {
    const { items, removeItem } = useMoodboard();
    const { t } = useTranslation();

    if (items.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            id="moodboard"
            className="bg-riad-blue/20 border border-riad-gold/20 p-8 backdrop-blur-sm"
        >
            <h3 className="font-royal text-2xl text-riad-gold mb-6 uppercase tracking-wide">
                {t('moodboard.title')} ({items.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((item) => (
                    <div key={item.id} className="group relative">
                        <img
                            src={item.url}
                            alt={item.title}
                            className="w-full h-32 object-cover border border-riad-gold/30 group-hover:border-riad-gold transition-colors"
                        />
                        <button
                            onClick={() => removeItem(item.id)}
                            className="absolute top-2 right-2 bg-riad-red/90 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-riad-red"
                            aria-label={t('moodboard.remove')}
                        >
                            <X size={14} />
                        </button>
                        <p className="text-xs text-riad-white/70 mt-2 truncate font-elegant">{item.title}</p>
                    </div>
                ))}
            </div>
            <p className="text-sm text-riad-white/60 mt-4 font-elegant italic">
                ✨ Ces images seront incluses dans votre demande
            </p>
        </motion.div>
    );
};

const ContactPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#1a1a1a] min-h-screen cursor-none text-white">
            <SEO titleKey="seo.contact.title" descriptionKey="seo.contact.description" />
            <CustomCursor />
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <h1 className="font-royal text-5xl md:text-7xl text-riad-gold mb-4 uppercase tracking-widest">
                            {t('contact_page.title')}
                        </h1>
                        <p className="font-elegant text-xl opacity-70">
                            {t('contact_page.visit_text')}
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-7xl mx-auto">

                        {/* LEFT: Info & Process */}
                        <div className="lg:w-1/3 space-y-16">

                            {/* Contact Info */}
                            <div className="space-y-8">
                                <h3 className="font-royal text-2xl text-riad-gold border-b border-riad-gold/20 pb-4">Atelier Gauthier</h3>
                                <ul className="space-y-6 font-elegant text-lg opacity-80">
                                    <li className="flex items-start gap-4">
                                        <MapPin className="text-riad-gold mt-1" size={20} />
                                        <span>12 Rue des Artisans,<br />Quartier Gauthier, Casablanca</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Phone className="text-riad-gold" size={20} />
                                        <span>+212 5 22 45 67 89</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Mail className="text-riad-gold" size={20} />
                                        <span>famille@filalidesign.co</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Our Process */}
                            <div>
                                <h3 className="font-royal text-2xl text-riad-gold border-b border-riad-gold/20 pb-4 mb-6">{t('contact_page.process_title')}</h3>
                                <ul className="space-y-6">
                                    {[1, 2, 3, 4].map((step, idx) => (
                                        <li key={idx} className="flex gap-4 group">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full border border-riad-gold/30 text-riad-gold flex items-center justify-center font-royal text-sm group-hover:bg-riad-gold group-hover:text-black transition-colors">
                                                {step}
                                            </span>
                                            <span className="font-elegant text-lg pt-1 opacity-90 group-hover:text-riad-gold transition-colors">
                                                {t(`contact_page.step${step}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        {/* RIGHT: Detailed Form */}
                        <div className="lg:w-2/3 space-y-8">
                            {/* Moodboard Selection */}
                            <MoodboardSection />

                            {/* Contact Form */}
                            <div className="bg-[#222] p-8 md:p-12 border border-white/5 shadow-2xl">
                                <h3 className="font-royal text-3xl mb-8 uppercase tracking-wide">{t('contact_page.subtitle')}</h3>

                                <form className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-riad-gold/70">{t('contact.name')}</label>
                                            <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-riad-gold focus:outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-riad-gold/70">{t('contact.email')}</label>
                                            <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-riad-gold focus:outline-none transition-colors" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-riad-gold/70">{t('contact_page.form.service_label')}</label>
                                        <select className="w-full bg-transparent border-b border-white/20 py-3 focus:border-riad-gold focus:outline-none transition-colors text-white/80">
                                            <option className="bg-[#333]" value="salons">Salon Marocain</option>
                                            <option className="bg-[#333]" value="kitchen">Cuisine</option>
                                            <option className="bg-[#333]" value="upholstery">Tapisserie & Rénovation</option>
                                            <option className="bg-[#333]" value="other">Autre / Sur Mesure</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-riad-gold/70">{t('contact_page.form.desc_label')}</label>
                                        <textarea
                                            rows={4}
                                            className="w-full bg-transparent border-b border-white/20 py-3 focus:border-riad-gold focus:outline-none transition-colors resize-none"
                                            placeholder={t('contact_page.form.desc_placeholder')}
                                        ></textarea>
                                    </div>

                                    <LuxuryButton variant="primary" className="!w-full py-5 text-lg cursor-pointer">
                                        {t('contact_page.form.submit')}
                                    </LuxuryButton>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
