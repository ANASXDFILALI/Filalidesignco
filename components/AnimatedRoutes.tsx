import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// ── Eager (routes critiques / au-dessus du fold) ─────────────────────────────
import Home from '../pages/public/Home';
import Portfolio from '../pages/public/Portfolio';
import ProjectDetails from '../pages/public/ProjectDetails';
import Blog from '../pages/public/Blog';
import BlogPost from '../pages/public/BlogPost';

// ── Lazy (routes secondaires — chargées à la demande) ────────────────────────
const Collections       = lazy(() => import('../pages/public/Collections'));
const Story             = lazy(() => import('../pages/public/Story'));
const FAQ               = lazy(() => import('../pages/public/FAQ'));
const ContactPage       = lazy(() => import('../pages/public/ContactPage'));
const Avis              = lazy(() => import('../pages/public/Avis'));
const PrixTarifs        = lazy(() => import('../pages/public/PrixTarifs'));
const SalonMarocainPilier = lazy(() => import('../pages/public/SalonMarocainPilier'));

// Services
const SalonMarocain     = lazy(() => import('../pages/public/services/SalonMarocain'));
const Tapisserie        = lazy(() => import('../pages/public/services/Tapisserie'));
const Rideaux           = lazy(() => import('../pages/public/services/Rideaux'));
const Cuisine           = lazy(() => import('../pages/public/services/Cuisine'));

// Villes
const Casablanca        = lazy(() => import('../pages/public/cities/Casablanca'));
const Marrakech         = lazy(() => import('../pages/public/cities/Marrakech'));
const Rabat             = lazy(() => import('../pages/public/cities/Rabat'));

// Admin
const AdminLayout       = lazy(() => import('../pages/admin/AdminLayout'));
const Dashboard         = lazy(() => import('../pages/admin/Dashboard'));
const AlbumEditor       = lazy(() => import('../pages/admin/AlbumEditor'));
const TestimonialsEditor = lazy(() => import('../pages/admin/TestimonialsEditor'));

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={null}>
                <Routes location={location} key={location.pathname}>
                    {/* Public */}
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:id" element={<ProjectDetails />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/avis" element={<Avis />} />
                    <Route path="/prix-tarifs" element={<PrixTarifs />} />
                    <Route path="/salon-marocain" element={<SalonMarocainPilier />} />

                    {/* Services */}
                    <Route path="/services/salon-marocain" element={<SalonMarocain />} />
                    <Route path="/services/tapisserie" element={<Tapisserie />} />
                    <Route path="/services/rideaux" element={<Rideaux />} />
                    <Route path="/services/cuisine" element={<Cuisine />} />

                    {/* Villes */}
                    <Route path="/casablanca" element={<Casablanca />} />
                    <Route path="/marrakech" element={<Marrakech />} />
                    <Route path="/rabat" element={<Rabat />} />

                    {/* Admin */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="album/new" element={<AlbumEditor />} />
                        <Route path="album/:id" element={<AlbumEditor />} />
                        <Route path="testimonials" element={<TestimonialsEditor />} />
                    </Route>
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
