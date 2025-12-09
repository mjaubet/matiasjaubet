
"use client"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export function Hero() {
    const t = useTranslations("Hero")

    return (
        <Section className="pt-32 md:pt-48 pb-16 min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
                className="space-y-6 max-w-3xl"
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80"
                >
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>{t("badge")}</span>
                </motion.div>

                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                >
                    {t("title_start")} <br />
                    <span className="text-gradient">{t("title_grad")}</span>
                </motion.h1>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
                >
                    {t("desc")}
                </motion.p>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto" asChild>
                        <a href="#contact">
                            {t("cta_primary")} <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </Button>
                    <Button variant="glass" size="lg" className="h-12 px-8 text-base w-full sm:w-auto" asChild>
                        <a href="#portfolio">
                            {t("cta_secondary")}
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
        </Section>
    )
}
