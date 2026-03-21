import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/public/Home';
import Portfolio from '../pages/public/Portfolio';
import ProjectDetails from '../pages/public/ProjectDetails';
import Collections from '../pages/public/Collections';
import AdminLayout from '../pages/admin/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import AlbumEditor from '../pages/admin/AlbumEditor';
import Story from '../pages/public/Story';
import FAQ from '../pages/public/FAQ';
import ContactPage from '../pages/public/ContactPage';
import TestimonialsEditor from '../pages/admin/TestimonialsEditor';
import Blog from '../pages/public/Blog';
import BlogPost from '../pages/public/BlogPost';

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<ProjectDetails />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/story" element={<Story />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="album/new" element={<AlbumEditor />} />
                    <Route path="album/:id" element={<AlbumEditor />} />
                    <Route path="testimonials" element={<TestimonialsEditor />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
