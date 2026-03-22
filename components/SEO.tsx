import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { CONTACT_PHONE, SOCIAL_LINKS, SITE_URL as CONST_SITE_URL } from '../lib/constants';

const SITE_URL = CONST_SITE_URL;

interface SEOProps {
    titleKey?: string;
    descriptionKey?: string;
    titleRaw?: string;
    descriptionRaw?: string;
    image?: string;
    isHomePage?: boolean;
}

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': SITE_URL,
    name: 'Filali Design Co.',
    foundingDate: '1985',
    description: 'Artisan tapissier à Casablanca — salons marocains sur mesure, rideaux, cuisines modernes, rénovation d\'intérieur de luxe.',
    url: SITE_URL,
    telephone: CONTACT_PHONE,
    priceRange: 'DH DH DH',
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    knowsLanguage: ['fr', 'ar'],
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Casablanca',
        addressLocality: 'Casablanca',
        addressRegion: 'Grand Casablanca-Settat',
        postalCode: '20000',
        addressCountry: 'MA',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.5731,
        longitude: -7.5898,
    },
    openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '18:00' },
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: CONTACT_PHONE,
        contactType: 'Customer Service',
        areaServed: 'MA',
        availableLanguage: ['fr', 'ar'],
    },
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.pinterest],
    areaServed: { '@type': 'Country', name: 'Maroc' },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '47',
        bestRating: '5',
        worstRating: '1',
    },
    review: [
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Youssef Benali' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'La rénovation de notre lobby a été métamorphosée par l\'expertise de Filali. Une fusion parfaite entre l\'âme traditionnelle marocaine et une élégance contemporaine absolue.',
        },
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Jean-Pierre L.' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Redonner vie à ce Riad historique demandait une sensibilité unique. Le travail du bois de cèdre et des tissus brodés main est tout simplement exceptionnel.',
        },
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Sarah B.' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'J\'ai trouvé chez Filali Design une écoute rare. Mes pièces de collection sont sublimées par leur travail sur mesure. Un véritable partenaire artistique.',
        },
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services Filali Design',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salon marocain sur mesure' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tapisserie et capitonnage' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rideaux et stores sur mesure' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cuisine moderne sur mesure' } },
        ],
    },
};

const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Filali Design Co.',
    url: SITE_URL,
    inLanguage: ['fr', 'ar'],
    publisher: { '@id': SITE_URL },
};

const SEO: React.FC<SEOProps> = ({
    titleKey,
    descriptionKey,
    titleRaw,
    descriptionRaw,
    image = `${SITE_URL}/og-image.jpg`,
    isHomePage = false,
}) => {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const title = titleRaw || (titleKey ? t(titleKey) : 'Filali Design Co.');
    const description = descriptionRaw || (descriptionKey ? t(descriptionKey) : t('seo.home.description'));
    const lang = i18n.language || 'fr';
    const path = location.pathname;
    const canonicalUrl = `${SITE_URL}${path}`;

    return (
        <Helmet>
            {/* Standard */}
            <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />

            {/* hreflang — tell Google which language to serve */}
            <link rel="alternate" hrefLang="fr" href={`${SITE_URL}${path}`} />
            <link rel="alternate" hrefLang="ar" href={`${SITE_URL}${path}`} />
            <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Filali Design Co." />
            <meta property="og:locale" content={lang === 'ar' ? 'ar_MA' : 'fr_MA'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* LocalBusiness + WebSite JSON-LD (homepage only) */}
            {isHomePage && (
                <>
                    <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                    <script type="application/ld+json">{JSON.stringify(webSiteSchema)}</script>
                </>
            )}
        </Helmet>
    );
};

export default SEO;
