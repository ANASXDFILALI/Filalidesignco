import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CapitoneSection from '../../components/CapitoneSection';
import BedSection from '../../components/BedSection';
import CurtainSection from '../../components/CurtainSection';
import WoodSection from '../../components/WoodSection';
import CuisinesSection from '../../components/CuisinesSection';
import SEO from '../../components/SEO';
import CustomCursor from '../../components/CustomCursor';
import LuxuryButton from '../../components/LuxuryButton';
import { useTranslation } from 'react-i18next';

const Collections: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    // Handle hash scrolling on mount or location change
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Slight delay for rendering
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="bg-riad-blue min-h-screen cursor-none">
            <SEO titleKey="nav.collections" descriptionKey="seo.home.description" />
            <CustomCursor />
            <Navbar />

            <main className="pt-20">

                {/* Header / Intro for Collections */}
                <div className="py-24 text-center px-6">
                    <h1 className="font-royal text-5xl md:text-7xl text-riad-gold mb-6 uppercase tracking-widest">
                        {t('nav.collections')}
                    </h1>
                    <p className="font-elegant text-xl text-riad-white/80 max-w-2xl mx-auto">
                        Explorez nos univers dédiés à l'art de vivre marocain.
                    </p>
                </div>

                {/* 1. Salons */}
                <div id="salons">
                    <CapitoneSection />
                    <div className="flex justify-center pb-20 bg-[#261a14] border-b border-riad-gold/10">
                        <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=salons')}>
                            {t('collections.salons.configure') || "Voir toute la collection"}
                        </LuxuryButton>
                    </div>
                </div>

                {/* 2. Beds (New) */}
                <div id="beds">
                    <BedSection />
                    <div className="flex justify-center pb-20 bg-[#F5F2EB] border-b border-riad-gold/10">
                        <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=beds')}>
                            Voir toute la collection
                        </LuxuryButton>
                    </div>
                </div>

                {/* 3. Curtains (Third) */}
                <div id="curtains">
                    <CurtainSection />
                    <div className="flex justify-center pb-20 bg-riad-blue border-b border-riad-gold/10">
                        <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=curtains')}>
                            Voir toute la collection
                        </LuxuryButton>
                    </div>
                </div>

                {/* 4. Wood */}
                <div id="wood">
                    <WoodSection />
                    <div className="flex justify-center pb-20 bg-riad-brown border-b border-riad-gold/10">
                        <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=wood_meubles')}>
                            Voir toute la collection
                        </LuxuryButton>
                    </div>
                </div>

                {/* 5. Cuisines (Last) */}
                <div id="cuisines">
                    <CuisinesSection />
                    <div className="flex justify-center pb-20 bg-gray-900 border-b border-riad-gold/10">
                        <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=cuisines')}>
                            Voir toute la collection
                        </LuxuryButton>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Collections;
