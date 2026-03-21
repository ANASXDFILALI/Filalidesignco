/**
 * Prerender script for vite-prerender-plugin
 *
 * This script is called during `npm run build` for each route.
 * It renders the React app to a static HTML string so Google can index it.
 *
 * Routes prerendered: /, /portfolio, /collections, /story, /faq, /contact
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { ProjectProvider } from './context/ProjectContext';
import { MoodboardProvider } from './context/MoodboardContext';
import { TestimonialProvider } from './context/TestimonialContext';
import AnimatedRoutes from './components/AnimatedRoutes';

// Import translations directly (no HTTP backend needed in SSR)
// @ts-ignore — JSON import
import frTranslations from './public/locales/fr/translation.json';

// Initialise i18n synchronously for SSR (no HttpBackend)
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: 'fr',
    fallbackLng: 'fr',
    resources: {
      fr: { translation: frTranslations },
    },
    interpolation: { escapeValue: false },
    initImmediate: false,
  });
}

export async function prerender(data: { url: string }) {
  const helmetContext: Record<string, unknown> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <ProjectProvider>
        <TestimonialProvider>
          <MoodboardProvider>
            <StaticRouter location={data.url}>
              <AnimatedRoutes />
            </StaticRouter>
          </MoodboardProvider>
        </TestimonialProvider>
      </ProjectProvider>
    </HelmetProvider>,
  );

  return {
    html,
    links: new Set<string>(),
  };
}
