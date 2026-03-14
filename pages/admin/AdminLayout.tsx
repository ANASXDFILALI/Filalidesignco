import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, LogOut, Lock, MessageSquareQuote, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/SEO';
import { supabase } from '../../lib/supabaseClient';
import type { Session } from '@supabase/supabase-js';

const LOCKOUT_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 60;

const AdminLayout: React.FC = () => {
    const [session, setSession] = useState<Session | null | undefined>(undefined); // undefined = loading
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [lockedUntil, setLockedUntil] = useState<number | null>(null);
    const [countdown, setCountdown] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const location = useLocation();

    // Restore session on mount + listen for auth changes
    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => setSession(data.session));
        const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
        return () => listener.subscription.unsubscribe();
    }, []);

    // Lockout countdown
    useEffect(() => {
        if (lockedUntil) {
            timerRef.current = setInterval(() => {
                const remaining = Math.ceil((lockedUntil - Date.now()) / 1000);
                if (remaining <= 0) {
                    setLockedUntil(null);
                    setAttempts(0);
                    setCountdown(0);
                    if (timerRef.current) clearInterval(timerRef.current);
                } else {
                    setCountdown(remaining);
                }
            }, 1000);
        }
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [lockedUntil]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (lockedUntil) return;

        setLoading(true);
        setError('');

        const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

        if (authError) {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            if (newAttempts >= LOCKOUT_ATTEMPTS) {
                setLockedUntil(Date.now() + LOCKOUT_SECONDS * 1000);
                setCountdown(LOCKOUT_SECONDS);
                setError(`Trop de tentatives. Réessayez dans ${LOCKOUT_SECONDS} secondes.`);
            } else {
                setError(`Identifiants incorrects. ${LOCKOUT_ATTEMPTS - newAttempts} tentative(s) restante(s).`);
            }
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    // Still loading session from storage
    if (session === undefined) {
        return (
            <div className="min-h-screen bg-riad-blue flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-riad-gold border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    // Not authenticated — show login
    if (!session) {
        return (
            <div className="min-h-screen bg-riad-blue flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 backdrop-blur-xl p-10 border border-riad-gold/30 rounded-lg max-w-md w-full shadow-2xl"
                >
                    <div className="text-center mb-8">
                        <Lock className="w-12 h-12 text-riad-gold mx-auto mb-4" />
                        <h1 className="font-royal text-2xl text-riad-white">Espace Administration</h1>
                        <p className="text-riad-gold-light/60 mt-2 font-elegant">Veuillez vous identifier</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Adresse e-mail"
                            required
                            disabled={!!lockedUntil}
                            className="w-full bg-black/20 border border-riad-gold/20 text-white px-4 py-3 focus:outline-none focus:border-riad-gold transition-colors font-mono disabled:opacity-50"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            required
                            disabled={!!lockedUntil}
                            className="w-full bg-black/20 border border-riad-gold/20 text-white px-4 py-3 focus:outline-none focus:border-riad-gold transition-colors font-mono disabled:opacity-50"
                        />

                        {error && (
                            <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded p-3 text-red-400 text-sm">
                                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                                <span>{lockedUntil ? `Compte verrouillé. Réessayez dans ${countdown}s.` : error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading || !!lockedUntil}
                            className="w-full bg-riad-gold text-riad-blue font-royal py-3 hover:bg-riad-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Connexion...' : lockedUntil ? `Verrouillé (${countdown}s)` : 'Connexion'}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    const navItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Portfolio', path: '/admin' },
        { icon: <MessageSquareQuote size={20} />, label: 'Témoignages', path: '/admin/testimonials' },
    ];

    return (
        <div className="flex h-screen bg-riad-blue text-riad-white font-sans overflow-hidden">
            <SEO titleKey="seo.admin.title" />
            <aside className="w-64 border-r border-riad-gold/10 bg-black/20 flex flex-col">
                <div className="p-6 border-b border-riad-gold/10">
                    <h2 className="font-royal text-xl text-riad-gold tracking-widest">FILALI ADMIN</h2>
                    <p className="text-xs text-gray-500 mt-1 truncate">{session.user.email}</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all ${
                                location.pathname === item.path
                                    ? 'bg-riad-gold/20 text-riad-gold border border-riad-gold/30'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {item.icon}
                            <span className="font-medium text-sm tracking-wide">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-riad-gold/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="font-medium text-sm">Déconnexion</span>
                    </button>
                </div>
            </aside>

            <main className="flex-1 overflow-auto bg-gradient-to-br from-riad-blue to-[#0e171b]">
                <div className="p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
