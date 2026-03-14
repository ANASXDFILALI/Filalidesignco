import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
];

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <div className="flex items-center gap-4">
            {languages.map((lng) => (
                <button
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    className={`font-royal text-xs tracking-widest relative ${i18n.language.startsWith(lng.code)
                            ? 'text-riad-gold'
                            : 'text-white/50 hover:text-white'
                        } transition-colors uppercase`}
                >
                    {lng.label}
                    {i18n.language.startsWith(lng.code) && (
                        <motion.div
                            layoutId="lang-underline"
                            className="absolute -bottom-1 left-0 w-full h-[1px] bg-riad-gold"
                        />
                    )}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
