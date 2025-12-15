
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Outfit } from "next/font/google";
import type { Metadata } from 'next';
import StructuredData from '@/components/structured-data';
import { MouseSparkles } from '@/components/ui/mouse-sparkles';
import "../globals.css";

const outfit = Outfit({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://matiasjaubet.com';
    const ogImageUrl = `${siteUrl}/opengraph-image.png`;

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        authors: [{ name: t('author') }],
        creator: t('author'),
        publisher: t('author'),
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: '/',
            languages: {
                'es': '/es',
                'en': '/en',
            },
        },
        openGraph: {
            type: 'website',
            locale: locale,
            url: `${siteUrl}/${locale}`,
            title: t('og_title'),
            description: t('og_description'),
            siteName: t('og_site_name'),
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: t('og_title'),
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('twitter_title'),
            description: t('twitter_description'),
            images: [ogImageUrl],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            // Puedes agregar aquí tus códigos de verificación cuando los tengas
            // google: 'tu-codigo-de-verificacion-google',
            // yandex: 'tu-codigo-de-verificacion-yandex',
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    // Get metadata description for structured data
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return (
        <html lang={locale}>
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#7c3aed" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            </head>
            <body className={`${outfit.variable} antialiased min-h-screen selection:bg-purple-500/30`}>
                <MouseSparkles
                    frequency={0.25}
                    size={2.5}
                    opacity={0.45}
                    glowIntensity={15}
                    scale={2.5}
                />
                <StructuredData description={t('description')} />
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
