import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProject } from '../../context/ProjectContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import LuxuryButton from '../../components/LuxuryButton';
import Lightbox from '../../components/Lightbox';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getAlbum } = useProject();
    const album = getAlbum(id || '');

    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [photoIndex, setPhotoIndex] = React.useState(0);

    if (!album) {
        return (
            <div className="min-h-screen bg-riad-blue flex items-center justify-center text-white">
                Project not found
            </div>
        );
    }

    const openLightbox = (index: number) => {
        setPhotoIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="bg-riad-blue min-h-screen text-riad-white cursor-none">
            <CustomCursor />
            <Navbar />

            {/* Lightbox Component */}
            <Lightbox
                isOpen={lightboxOpen}
                initialIndex={photoIndex}
                images={album.images}
                onClose={() => setLightboxOpen(false)}
            />

            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-riad-blue via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 z-10">
                    <div className="container mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block text-riad-gold font-royal tracking-[0.25em] uppercase mb-4 bg-black/30 backdrop-blur px-4 py-2"
                        >
                            {album.category}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-royal text-white mb-6 max-w-4xl leading-tight"
                        >
                            {album.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-elegant text-gray-200 max-w-2xl leading-relaxed"
                        >
                            {album.description}
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="container mx-auto px-6 py-24">
                <div className="mb-12">
                    <LuxuryButton
                        onClick={() => navigate('/portfolio')}
                        variant="outline"
                        className="flex items-center gap-2 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Retour au Portfolio
                    </LuxuryButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {album.images.map((img, idx) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-4 cursor-pointer"
                            onClick={() => openLightbox(idx)}
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-sm relative group bg-white/5 border border-white/10">
                                <img
                                    src={img.src}
                                    alt={img.caption || 'Project Image'}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="text-white bg-black/50 px-4 py-2 rounded-full font-royal text-sm tracking-widest backdrop-blur-sm">AGRANDIR</span>
                                </div>
                            </div>
                            {img.caption && (
                                <p className="font-elegant text-lg text-riad-gold-light/80 italic border-l-2 border-riad-gold/30 pl-4">
                                    {img.caption}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetails;
