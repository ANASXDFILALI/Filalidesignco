import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import { useTestimonials } from '../context/TestimonialContext';

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslation();
    const { testimonials: rawTestimonials } = useTestimonials();

    const testimonials = rawTestimonials.map((item, idx) => ({
        ...item,
        delay: idx * 0.2,
    }));

    return (
        <section className="py-24 bg-[#EBE8E0] text-riad-brown relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-riad-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-riad-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="font-royal text-sm text-riad-gold uppercase tracking-[0.25em] mb-2 block">{t('testimonials.title')}</span>
                    <h2 className="font-royal text-4xl md:text-5xl uppercase tracking-widest">{t('testimonials.subtitle')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {testimonials.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay }}
                            className="bg-white p-10 shadow-lg border-t-4 border-riad-gold/50 hover:shadow-xl transition-shadow duration-300 relative group"
                        >
                            <Quote className="text-riad-gold/20 w-12 h-12 mb-6 absolute top-8 right-8 group-hover:text-riad-gold/40 transition-colors" />

                            <p className="font-elegant text-lg leading-relaxed text-gray-600 mb-8 italic relative z-10">
                                "{item.text}"
                            </p>

                            <div>
                                <h4 className="font-royal text-sm uppercase tracking-widest font-bold mb-1">{item.author}</h4>
                                <span className="font-elegant text-xs text-riad-gold uppercase tracking-wider">{item.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
