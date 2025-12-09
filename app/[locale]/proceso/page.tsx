
import { Navbar } from "@/components/navbar"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: { locale: string } }) {
    const t = await getTranslations({ locale: params.locale, namespace: "Process" })

    return {
        title: `${t("meta_title")} | Matías Jaubet`,
        description: t("meta_description"),
    }
}

export default function ProcesoPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="space-y-24 md:space-y-32 pt-32 pb-24">
                <Process />

                {/* Visual Break */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

                <Testimonials />
            </div>

            <Footer />
        </main>
    )
}
