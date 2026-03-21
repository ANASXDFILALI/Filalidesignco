import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import CustomCursor from '../../components/CustomCursor';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
    const { t } = useTranslation();

    const questions = [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
        { q: t('faq.q4'), a: t('faq.a4') },
        { q: t('faq.q5'), a: t('faq.a5') },
    ];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
        })),
    };

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="bg-riad-blue min-h-screen cursor-none text-riad-white">
            <SEO titleKey="seo.faq.title" descriptionKey="seo.faq.description" />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <CustomCursor />
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-3xl">

                    <div className="text-center mb-20">
                        <h1 className="font-royal text-5xl md:text-7xl text-riad-gold mb-4 uppercase tracking-widest">
                            FAQ
                        </h1>
                        <p className="font-elegant text-xl opacity-80">
                            {t('faq.title')}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {questions.map((item, idx) => (
                            <div key={idx} className="border-b border-riad-gold/20">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                    className="w-full py-6 flex items-center justify-between text-left hover:text-riad-gold transition-colors focus:outline-none"
                                >
                                    <span className="font-royal text-lg tracking-wide uppercase pr-8">{item.q}</span>
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-riad-gold' : 'text-gray-500'}`}
                                    />
                                </button>
                                <motion.div
                                    animate={{
                                        height: activeIndex === idx ? "auto" : 0,
                                        opacity: activeIndex === idx ? 1 : 0,
                                    }}
                                    initial={false}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-8 font-elegant text-lg text-riad-white/70 leading-relaxed">
                                        {item.a}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FAQ;
