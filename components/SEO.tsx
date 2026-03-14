import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://filalidesignco.space';

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
    '@type': 'LocalBusiness',
    name: 'Filali Design Co.',
    description: 'Artisan tapissier à Casablanca — salons marocains sur mesure, rideaux, cuisines modernes, rénovation d\'intérieur de luxe.',
    url: SITE_URL,
    telephone: '+212-522-000000',
    priceRange: 'DH DH DH',
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
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
    sameAs: [],
    areaServed: { '@type': 'Country', name: 'Maroc' },
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

const SEO: React.FC<SEOProps> = ({
    titleKey,
    descriptionKey,
    titleRaw,
    descriptionRaw,
    image = `${SITE_URL}/og-image.jpg`,
    isHomePage = false,
}) => {
    const { t, i18n } = useTranslation();

    const title = titleRaw || (titleKey ? t(titleKey) : 'Filali Design Co.');
    const description = descriptionRaw || (descriptionKey ? t(descriptionKey) : t('seo.home.description'));
    const lang = i18n.language || 'fr';
    const path = typeof window !== 'undefined' ? window.location.pathname : '/';
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

            {/* LocalBusiness JSON-LD (homepage only) */}
            {isHomePage && (
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
