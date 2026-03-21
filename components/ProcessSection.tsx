import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProcessSection: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    { id: '01', title: t('process_section.steps.0.title'), desc: t('process_section.steps.0.desc') },
    { id: '02', title: t('process_section.steps.1.title'), desc: t('process_section.steps.1.desc') },
    { id: '03', title: t('process_section.steps.2.title'), desc: t('process_section.steps.2.desc') },
    { id: '04', title: t('process_section.steps.3.title'), desc: t('process_section.steps.3.desc') },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-riad-blue text-riad-white border-t border-riad-gold/20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">

          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="font-royal text-3xl uppercase tracking-[0.2em] mb-4 text-riad-gold-light">
              {t('process_section.title')}
            </h2>
            <p className="font-elegant text-xl opacity-80 leading-relaxed">
              {t('process_section.desc')}
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-6 md:pl-0 pt-0 md:pt-6 border-l md:border-l-0 md:border-t border-riad-gold/30"
              >
                <div className="absolute -left-[5px] top-0 md:left-0 md:-top-[5px] w-2.5 h-2.5 bg-riad-gold rounded-full"></div>
                <div className="font-royal text-4xl text-riad-gold/20 mb-2 font-bold">{step.id}</div>
                <h3 className="font-royal text-lg uppercase tracking-wider mb-2">{step.title}</h3>
                <p className="font-elegant text-sm opacity-70">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;