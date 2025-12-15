
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
        <div className="relative w-full min-h-[90vh] overflow-hidden">
            {/* Animated Gradient Background - Full Screen */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-black animate-gradient-shift" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
            </div>

            {/* Subtle gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full animate-pulse-slow" />


            {/* Content */}
            <Section className="hero-section pt-32 md:pt-48 pb-16 min-h-[90vh] flex flex-col justify-center items-center text-center relative z-10">
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
                    className="space-y-6 max-w-3xl relative z-10"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 backdrop-blur-sm"
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

            {/* Smooth gradient transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#0a0a0a]/30 via-[#0a0a0a]/60 to-[#0a0a0a] pointer-events-none z-20" />
        </div>
    )
}
