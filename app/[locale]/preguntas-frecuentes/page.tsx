import { FAQSection } from "@/components/faq-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "FAQ" })

    return {
        title: t("meta_title"),
        description: t("meta_description"),
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
