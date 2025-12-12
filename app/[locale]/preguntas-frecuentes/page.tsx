import { FAQSection } from "@/components/faq-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "FAQ" })

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://matiasjaubet.com'
    const pageUrl = `${siteUrl}/${locale}/preguntas-frecuentes`
    const ogImageUrl = `${siteUrl}/opengraph-image.png`

    return {
        title: t("meta_title"),
        description: t("meta_description"),
        alternates: {
            canonical: `/${locale}/preguntas-frecuentes`,
            languages: {
                'es': '/es/preguntas-frecuentes',
                'en': '/en/preguntas-frecuentes',
            },
        },
        openGraph: {
            type: 'website',
            locale: locale,
            url: pageUrl,
            title: t("meta_title"),
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
            title: t("meta_title"),
            description: t("meta_description"),
            images: [ogImageUrl],
        },
    }
}

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="pt-32 pb-20">
                <FAQSection />
            </div>

            <Footer />
        </main>
    )
}
