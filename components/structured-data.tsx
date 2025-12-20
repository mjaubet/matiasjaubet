interface StructuredDataProps {
    description: string;
}

export default function StructuredData({ description }: StructuredDataProps) {
    const baseUrl = 'https://matiasjaubet.com';

    // Organization Schema
    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Matías Jaubet Web & IA',
        alternateName: 'Matías Jaubet',
        url: baseUrl,
        logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/favicon.png`,
            width: 512,
            height: 512
        },
        image: {
            '@type': 'ImageObject',
            url: `${baseUrl}/opengraph-image.png`,
            width: 1200,
            height: 630
        },
        description: description,
        founder: {
            '@type': 'Person',
            name: 'Matías Jaubet',
            jobTitle: 'Front End Developer & Automation Specialist',
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'AR',
        },
        sameAs: [
            // Add your social media profiles here
            // 'https://www.linkedin.com/in/matiasjaubet',
            // 'https://twitter.com/matiasjaubet',
            // 'https://github.com/matiasjaubet',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            availableLanguage: ['Spanish', 'English']
        }
    };

    // WebSite Schema with SearchAction
    const websiteData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Matías Jaubet Web & IA',
        description: description,
        publisher: {
            '@id': `${baseUrl}/#organization`
        },
        inLanguage: ['es', 'en'],
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    };

    // ProfessionalService Schema
    const professionalServiceData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${baseUrl}/#service`,
        name: 'Matías Jaubet Web & IA',
        description: description,
        url: baseUrl,
        logo: `${baseUrl}/favicon.png`,
        image: `${baseUrl}/opengraph-image.png`,
        provider: {
            '@id': `${baseUrl}/#organization`
        },
        serviceType: [
            'Web Development',
            'Artificial Intelligence',
            'Chatbot Development',
            'Business Automation',
            'Web Hosting',
            'SEO Optimization',
            'Frontend Development'
        ],
        areaServed: [
            {
                '@type': 'Country',
                name: 'Argentina',
            },
            {
                '@type': 'Country',
                name: 'Uruguay',
            },
            {
                '@type': 'Country',
                name: 'Chile',
            }
        ],
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceData) }}
            />
        </>
    );
}
