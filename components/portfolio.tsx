
"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export function Portfolio() {
    const t = useTranslations("Portfolio")

    const cases = [
        {
            category: t("cases.1.category"),
            title: t("cases.1.title"),
            color: "from-blue-500 to-cyan-500",
            stats: t("cases.1.stats"),
            desc: t("cases.1.desc")
        },
        {
            category: t("cases.2.category"),
            title: t("cases.2.title"),
            color: "from-orange-500 to-red-500",
            stats: t("cases.2.stats"),
            desc: t("cases.2.desc")
        },
        {
            category: t("cases.3.category"),
            title: t("cases.3.title"),
            color: "from-emerald-500 to-green-500",
            stats: t("cases.3.stats"),
            desc: t("cases.3.desc")
        }
    ]

    return (
        <Section id="portfolio" className="bg-white/5 border-y border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        {t("title_start")} <span className="text-gradient">{t("title_grad")}</span>
                    </h2>
                    <p className="text-white/60 max-w-xl">
                        {t("desc")}
                    </p>
                </div>
                <Link href="#" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    {t("link")} <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {cases.map((c, idx) => (
                    <Card key={idx} className="group overflow-hidden border-0 bg-neutral-900/50">
                        {/* Color banner */}
                        <div className={`h-2 w-full bg-gradient-to-r ${c.color}`} />

                        <div className="p-2">
                            <div className="text-xs font-medium text-white/40 mb-2 uppercase tracking-wide">{c.category}</div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{c.title}</h3>

                            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/90">
                                🚀 {c.stats}
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed">
                                {c.desc}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
