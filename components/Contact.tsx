import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LuxuryButton from './LuxuryButton';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_NUMBER } from '../lib/constants';

const AnimatedInput = ({ label, type = "text", required = false, id, value, onChange }: { label: string, type?: string, required?: boolean, id: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative group pt-8">
      <input
        type={type}
        required={required}
        id={id}
        value={value}
        onChange={(e) => {
          setHasValue(e.target.value.length > 0);
          onChange?.(e);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        className="w-full bg-transparent border-none py-4 text-2xl font-elegant text-riad-white focus:outline-none relative z-10 font-light"
      />

      {/* Label Animation */}
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFocused || hasValue ? -36 : 0,
          scale: isFocused || hasValue ? 0.75 : 1,
          color: isFocused ? '#E6C76C' : 'rgba(248, 245, 240, 0.6)'
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-6 origin-left pointer-events-none text-2xl font-elegant tracking-wide font-light"
      >
        {label}
      </motion.label>

      {/* Base Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-riad-gold/30" />

      {/* Active Line Animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-riad-gold-light origin-center z-20"
      />
    </div>
  );
};

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const sendEmail = async (data: typeof formData) => {
    try {
      const serviceID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';

      if (!serviceID || !templateID || !publicKey) {
        console.warn('EmailJS keys manquantes dans .env.local — ajoutez VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY');
        return false;
      }

      await emailjs.send(serviceID, templateID, {
        from_name: data.name,
        from_email: data.email,
        message: data.project
      }, publicKey);

      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const sendWhatsApp = (data: typeof formData) => {
    // ... (keep existing WhatsApp logic)
    const message = encodeURIComponent(
      `Bonjour,\n\nNouveau contact depuis le site Filali Design Co.:\n\n` +
      `Nom: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Projet: ${data.project || 'Non spécifié'}\n\n` +
      `Merci de prendre contact avec ce client.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const success = await sendEmail(formData);

      if (success) {
        sendWhatsApp(formData);
        setFormState('success');
        setTimeout(() => {
          setFormData({ name: '', email: '', project: '' });
          setFormState('idle');
        }, 3000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-riad-blue text-riad-white relative overflow-hidden">
      {/* Decorative Water Effect at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-patio-fade z-10 pointer-events-none"></div>

      <div className="container mx-auto relative z-20 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-arabic text-7xl md:text-9xl text-riad-gold-light mb-8 drop-shadow-lg leading-tight"
        >
          {t('contact.title')}
        </motion.div>

        <p className="font-elegant text-2xl md:text-4xl italic opacity-90 mb-20 leading-loose font-light max-w-4xl mx-auto">
          {t('contact.text')}
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-16 text-left">
          <AnimatedInput
            id="name"
            label={t('contact.name')}
            required
            value={formData.name}
            onChange={handleInputChange('name')}
          />
          <AnimatedInput
            id="email"
            label={t('contact.email')}
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange('email')}
          />
          <AnimatedInput
            id="project"
            label={t('contact.project')}
            value={formData.project}
            onChange={handleInputChange('project')}
          />

          <div className="text-center pt-16">
            <LuxuryButton
              type="submit"
              variant="outline"
              className="min-w-[280px] !border-riad-gold-light !text-riad-gold-light text-sm"
            >
              <AnimatePresence mode="wait">
                {formState === 'idle' && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {t('contact.send')}
                  </motion.span>
                )}
                {formState === 'submitting' && (
                  <motion.span
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {t('contact.sending')}
                  </motion.span>
                )}
                {formState === 'success' && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {t('contact.sent')}
                  </motion.span>
                )}
                {formState === 'error' && (
                  <motion.span
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {t('contact.error')}
                  </motion.span>
                )}
              </AnimatePresence>
            </LuxuryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;