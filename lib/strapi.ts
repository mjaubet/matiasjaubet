const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

interface StrapiImage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    url: string;
    formats?: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
    };
}

interface Localization {
    id: number;
    documentId: string;
    title: string;
    description: string;
    category: string;
    stats: string | null;
    featured: boolean;
    publishedDate: string;
    clientName: string | null;
    locale: string;
}

export interface Project {
    id: number;
    documentId: string;
    title: string;
    description: string;
    category: 'web' | 'chatbot' | 'automatition' | 'hosting';
    stats: string | null;
    featured: boolean;
    publishedDate: string;
    clientName: string | null;
    image: StrapiImage;
    locale: string;
    localizations?: Localization[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

async function fetchAPI<T>(
    path: string,
    options: RequestInit = {}
): Promise<T> {
    const url = `${STRAPI_URL}/api${path}`;

    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        next: {
            revalidate: 60, // Revalidar cada 60 segundos
        },
    });

    if (!response.ok) {
        console.error(`Strapi API error: ${response.status} ${response.statusText}`);
        throw new Error(`Strapi API error: ${response.statusText}`);
    }

    return response.json();
}

// Helper para mapear locales de Next.js a Strapi
function mapLocale(locale: string): string {
    const localeMap: Record<string, string> = {
        'es': 'es-AR',
        'en': 'en'
    };
    return localeMap[locale] || locale;
}

// Obtener todos los proyectos
export async function getProjects(locale: string = 'en'): Promise<Project[]> {
    try {
        const strapiLocale = mapLocale(locale);
        const url = `/projects?locale=${strapiLocale}&populate=*&sort=publishedDate:desc`;
        console.log('Fetching projects from:', `${STRAPI_URL}/api${url}`);

        const response = await fetchAPI<StrapiResponse<Project[]>>(url);
        console.log('Projects received:', response.data.length);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}


// Obtener proyectos destacados (para el home)
export async function getFeaturedProjects(locale: string = 'en'): Promise<Project[]> {
    try {
        const strapiLocale = mapLocale(locale);
        const url = `/projects?locale=${strapiLocale}&filters[featured][$eq]=true&populate=*&sort=publishedDate:desc&pagination[limit]=3`;
        console.log('Fetching featured projects from:', `${STRAPI_URL}/api${url}`);

        const response = await fetchAPI<StrapiResponse<Project[]>>(url);
        console.log('Featured projects received:', response.data.length);
        return response.data;
    } catch (error) {
        console.error('Error fetching featured projects:', error);
        return [];
    }
}

// Obtener proyectos por categoría
export async function getProjectsByCategory(
    category: string,
    locale: string = 'en'
): Promise<Project[]> {
    try {
        const response = await fetchAPI<StrapiResponse<Project[]>>(
            `/projects?locale=${locale}&filters[category][$eq]=${category}&populate=*&sort=publishedDate:desc`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching projects by category:', error);
        return [];
    }
}

// Helper para obtener URL completa de imagen
export function getStrapiImageUrl(image: StrapiImage, size: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'medium'): string {
    if (!image) return '/placeholder-project.png';

    let imageUrl = image.url;

    // Usar formato específico si existe
    if (size !== 'original' && image.formats?.[size]) {
        imageUrl = image.formats[size].url;
    }

    // Si la URL ya es absoluta, retornarla
    if (imageUrl.startsWith('http')) {
        return imageUrl;
    }

    // Si es relativa, agregar el dominio de Strapi
    return `${STRAPI_URL}${imageUrl}`;
}

// Helper para obtener alt text de imagen
export function getStrapiImageAlt(image: StrapiImage, fallback: string = ''): string {
    return image?.alternativeText || fallback;
}
