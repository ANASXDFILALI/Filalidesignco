import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import { HeritageSection, ModernitySection } from '../../components/Features';
import Gallery from '../../components/Gallery';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Background from '../../components/Background';
import IntroGate from '../../components/IntroGate';
import CapitoneSection from '../../components/CapitoneSection';
import BedSection from '../../components/BedSection';
import CurtainSection from '../../components/CurtainSection';
import ServicesSection from '../../components/ServicesSection';
import ProcessSection from '../../components/ProcessSection';
import CustomCursor from '../../components/CustomCursor';
import CuisinesSection from '../../components/CuisinesSection';
import WoodSection from '../../components/WoodSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import MoodboardIndicator from '../../components/MoodboardIndicator';
import LuxuryButton from '../../components/LuxuryButton';
import { motion, useScroll, useSpring } from 'framer-motion';
import SEO from '../../components/SEO';

const Home: React.FC = () => {
    const [hasEntered, setHasEntered] = useState(false);
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className="relative min-h-screen bg-riad-blue overflow-x-hidden cursor-none">
            <SEO titleKey="seo.home.title" descriptionKey="seo.home.description" isHomePage />

            {/* Custom Luxury Cursor */}
            <CustomCursor />

            {/* The 3D Entry Gate */}
            <IntroGate onEnter={() => setHasEntered(true)} />

            {/* Main Content - Only visible/interactive after entry starts */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={hasEntered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`relative w-full ${!hasEntered ? 'h-screen overflow-hidden' : ''}`}
            >
                <Background />

                {/* Scroll Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-riad-gold origin-left z-[100]"
                    style={{ scaleX }}
                />

                <Navbar />
                <Hero />

                <ServicesSection />

                {/* Collections — inline on home page */}
                <div id="collections">
                    <div id="salons">
                        <CapitoneSection />
                        <div className="flex justify-center pb-20 bg-[#261a14] border-b border-riad-gold/10">
                            <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=salons')}>
                                View Full Collection
                            </LuxuryButton>
                        </div>
                    </div>

                    <div id="beds">
                        <BedSection />
                        <div className="flex justify-center pb-20 bg-[#F5F2EB] border-b border-riad-gold/10">
                            <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=beds')}>
                                View Full Collection
                            </LuxuryButton>
                        </div>
                    </div>

                    <div id="curtains">
                        <CurtainSection />
                        <div className="flex justify-center pb-20 bg-riad-blue border-b border-riad-gold/10">
                            <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=curtains')}>
                                View Full Collection
                            </LuxuryButton>
                        </div>
                    </div>

                    <div id="wood">
                        <WoodSection />
                        <div className="flex justify-center pb-20 bg-riad-brown border-b border-riad-gold/10">
                            <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=wood_meubles')}>
                                View Full Collection
                            </LuxuryButton>
                        </div>
                    </div>

                    <div id="cuisines">
                        <CuisinesSection />
                        <div className="flex justify-center pb-20 bg-gray-900 border-b border-riad-gold/10">
                            <LuxuryButton variant="primary" onClick={() => navigate('/portfolio?filter=cuisines')}>
                                View Full Collection
                            </LuxuryButton>
                        </div>
                    </div>
                </div>

                <HeritageSection />
                <ModernitySection />

                <ProcessSection />
                <Gallery />
                <TestimonialsSection />
                <Contact />
                <Footer />

                {/* Moodboard Floating Indicator */}
                <MoodboardIndicator />

                {/* Floating Action Button - WhatsApp */}
                <a
                    href="https://wa.me/212600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300 z-50 border-2 border-riad-white cursor-pointer"
                    aria-label="Contact on WhatsApp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L0 24l6.335-1.51A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.032-1.388l-.36-.214-3.733.89.936-3.618-.235-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                    </svg>
                </a>
            </motion.div>
        </main>
    );
};

export default Home;
