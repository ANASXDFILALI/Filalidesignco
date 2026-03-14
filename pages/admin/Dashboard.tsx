import React from 'react';
import { useProject } from '../../context/ProjectContext';
import { Link } from 'react-router-dom';
import { Edit2, Trash2, Plus } from 'lucide-react';

const Dashboard: React.FC = () => {
    const { albums, deleteAlbum } = useProject();

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-royal text-white mb-2">Projets</h1>
                    <p className="text-gray-400">Gérez votre portfolio et vos collections.</p>
                </div>
                <Link
                    to="/admin/album/new"
                    className="flex items-center gap-2 bg-riad-gold text-riad-blue px-6 py-3 rounded font-bold hover:bg-white transition-colors"
                >
                    <Plus size={20} />
                    Nouveau Projet
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album) => (
                    <div key={album.id} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden group hover:border-riad-gold/50 transition-colors">
                        <div className="h-48 overflow-hidden relative">
                            <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs text-white uppercase tracking-wider">
                                {album.category}
                            </div>
                        </div>

                        <div className="p-5">
                            <h3 className="text-xl font-royal text-white mb-2 truncate">{album.title}</h3>
                            <p className="text-gray-400 text-sm line-clamp-2 mb-6">{album.description}</p>

                            <div className="flex gap-3 mt-auto">
                                <Link
                                    to={`/admin/album/${album.id}`}
                                    className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 rounded transition-colors text-sm"
                                >
                                    <Edit2 size={16} /> Éditer
                                </Link>
                                <button
                                    onClick={() => {
                                        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
                                            void deleteAlbum(album.id);
                                        }
                                    }}
                                    className="flex items-center justify-center p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
