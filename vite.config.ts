import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        vitePrerenderPlugin({
          // Inject prerendered HTML into <div id="root">
          renderTarget: '#root',
          // Path to the prerender entry script
          prerenderScript: path.resolve(__dirname, 'prerender.tsx'),
          // Prerender all public routes (admin excluded)
          additionalPrerenderRoutes: [
            '/portfolio',
            '/collections',
            '/story',
            '/faq',
            '/contact',
            '/blog',
          ],
        }),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              // React + Router dans un chunk dédié
              'vendor-react': ['react', 'react-dom', 'react-router-dom'],
              // Framer Motion séparé (lourd)
              'vendor-motion': ['framer-motion'],
              // i18n séparé
              'vendor-i18n': ['i18next', 'react-i18next', 'i18next-http-backend'],
            },
          },
        },
      },
    };
});
