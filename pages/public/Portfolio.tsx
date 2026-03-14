import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { useProject, Category } from '../../context/ProjectContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';

const Portfolio: React.FC = () => {
    const { albums } = useProject();
    const location = useLocation();

    // Parse query parameter ?filter=...
    const searchParams = new URLSearchParams(location.search);
    const initialFilter = searchParams.get('filter') as Category | 'all' | null;

    const [filter, setFilter] = useState<Category | 'all'>(initialFilter || 'all');

    // Update filter if URL changes (optional, or just on mount)
    React.useEffect(() => {
        if (initialFilter) {
            setFilter(initialFilter);
        }
    }, [initialFilter]);

    const filteredAlbums = filter === 'all'
        ? albums
        : albums.filter(album => album.category === filter);

    return (
        <div className="bg-riad-blue min-h-screen text-riad-white cursor-none">
            <CustomCursor />
            <Navbar />

            <div className="container mx-auto px-6 py-32">
                <header className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-royal text-5xl md:text-7xl mb-6 text-riad-gold-light"
                    >
                        Portfolio
                    </motion.h1>
                    <p className="font-elegant text-2xl text-riad-white/80 max-w-2xl mx-auto italic">
                        Découvrez nos réalisations d'exception, classées par univers.
                    </p>
                </header>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {(['all', 'salons', 'beds', 'curtains', 'cuisines', 'wood_meubles', 'gallery'] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-3 border border-riad-gold/30 font-royal tracking-widest text-sm uppercase transition-all duration-300 ${filter === cat
                                ? 'bg-riad-gold text-riad-blue'
                                : 'hover:bg-riad-gold/10 text-riad-gold-light'
                                }`}
                        >
                            {cat === 'all' ? 'Tout Voir' :
                                cat === 'wood_meubles' ? 'Bois & Meubles' :
                                    cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredAlbums.map((album) => (
                        <Link key={album.id} to={`/portfolio/${album.id}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                layout
                                className="group relative bg-riad-blue/40 border border-riad-gold/20 overflow-hidden cursor-pointer"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={album.coverImage}
                                        alt={album.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-riad-blue via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-riad-gold text-xs font-royal tracking-[0.2em] uppercase mb-2 block">
                                        {album.category}
                                    </span>
                                    <h3 className="text-2xl font-elegant text-white mb-2">{album.title}</h3>
                                    <div className="h-[1px] w-0 group-hover:w-full bg-riad-gold transition-all duration-700" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Portfolio;
