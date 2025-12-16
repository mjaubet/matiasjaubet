
import { Navbar } from "@/components/navbar"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { getTranslations } from "next-intl/server"
import WebPageSchema from "@/components/webpage-schema"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "Projects" })

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://matiasjaubet.com'
    const pageUrl = `${siteUrl}/${locale}/proyectos`
    const ogImageUrl = `${siteUrl}/opengraph-image.png`

    return {
        title: `${t("meta_title")} | Matías Jaubet`,
        description: t("meta_description"),
        keywords: "portfolio, proyectos web, desarrollo web, chatbots, automatización, casos de éxito, proyectos de IA",
        alternates: {
            canonical: `/${locale}/proyectos`,
            languages: {
                'es': '/es/proyectos',
                'en': '/en/proyectos',
            },
        },
        openGraph: {
            type: 'website',
            locale: locale,
            url: pageUrl,
            title: `${t("meta_title")} | Matías Jaubet`,
            description: t("meta_description"),
            siteName: 'Matías Jaubet Web & IA',
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: t("meta_title"),
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${t("meta_title")} | Matías Jaubet`,
            description: t("meta_description"),
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
    }
}

export default async function ProyectosPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "Projects" })
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://matiasjaubet.com'

    return (
        <>
            <WebPageSchema
                name={t("meta_title")}
                description={t("meta_description")}
                url={`${siteUrl}/${locale}/proyectos`}
            />
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: `${siteUrl}/${locale}` },
                    { name: t("meta_title"), url: `${siteUrl}/${locale}/proyectos` }
                ]}
            />
            <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
                <Navbar />

                <div className="space-y-24 md:space-y-32 pt-32 pb-24">
                    <Projects />
                </div>

                <Footer />
            </main>
        </>
    )
}
