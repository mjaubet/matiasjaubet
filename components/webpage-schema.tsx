interface WebPageSchemaProps {
    name: string;
    description: string;
    url: string;
}

export default function WebPageSchema({ name, description, url }: WebPageSchemaProps) {
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: name,
        description: description,
        url: url,
        inLanguage: 'es-AR',
        isPartOf: {
            '@type': 'WebSite',
            name: 'Matías Jaubet Web & IA',
            url: 'https://matiasjaubet.com'
        },
        about: {
            '@type': 'ProfessionalService',
            name: 'Matías Jaubet Web & IA',
            description: 'Desarrollo web profesional y automatización con IA'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
    );
}
