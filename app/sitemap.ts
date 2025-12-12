import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://matiasjaubet.com';

    // Define las rutas principales de tu sitio
    const routes = ['', '/servicios', '/proceso', '/faq'];
    const locales = ['es', 'en'];

    const sitemap: MetadataRoute.Sitemap = [];

    // Generar URLs para cada combinación de ruta y locale
    locales.forEach(locale => {
        routes.forEach(route => {
            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1.0 : 0.8,
            });
        });
    });

    return sitemap;
}
