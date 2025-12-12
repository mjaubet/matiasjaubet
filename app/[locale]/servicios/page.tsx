import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "ServicesPage" })

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://matiasjaubet.com'
    const pageUrl = `${siteUrl}/${locale}/servicios`
    const ogImageUrl = `${siteUrl}/opengraph-image.png`

    return {
        title: t("meta_title"),
        description: t("meta_description"),
        alternates: {
            canonical: `/${locale}/servicios`,
            languages: {
                'es': '/es/servicios',
                'en': '/en/servicios',
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

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="pt-32 pb-20 space-y-16">
                <Services />

                {/* Visual Break */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

                <Pricing />
            </div>

            <Footer />
        </main>
    )
}
