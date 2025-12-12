interface StructuredDataProps {
    description: string;
}

export default function StructuredData({ description }: StructuredDataProps) {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Matías Jaubet Web & IA',
        description: description,
        url: 'https://matiasjaubet.com',
        logo: 'https://matiasjaubet.com/favicon.png',
        image: 'https://matiasjaubet.com/opengraph-image.png',
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
            // Aquí puedes agregar tus redes sociales cuando las tengas
            // 'https://www.linkedin.com/in/matiasjaubet',
            // 'https://twitter.com/matiasjaubet',
            // 'https://github.com/matiasjaubet',
        ],
        serviceType: [
            'Web Development',
            'Artificial Intelligence',
            'Chatbot Development',
            'Business Automation',
            'Web Hosting',
        ],
        areaServed: {
            '@type': 'Country',
            name: 'Argentina',
        },
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
