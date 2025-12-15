
"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Clock, DollarSign, UserX } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { AnimationWrapper, StaggerContainer, staggerItem } from "@/components/ui/animation-wrapper"

export function PainPoints() {
    const t = useTranslations("PainPoints")

    const pains = [
        {
            icon: Clock,
            title: t("cards.1.title"),
            desc: t("cards.1.desc")
        },
        {
            icon: UserX,
            title: t("cards.2.title"),
            desc: t("cards.2.desc")
        },
        {
            icon: DollarSign,
            title: t("cards.3.title"),
            desc: t("cards.3.desc")
        }
    ]

    return (
        <Section id="problema">
            <AnimationWrapper variant="fadeIn">
                <div className="text-center mb-2 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        {t("title_start")} <span className="text-red-400">{t("title_highlight")}</span>
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto">
                        {t("desc")}
                    </p>
                </div>
            </AnimationWrapper>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
                {pains.map((pain, idx) => (
                    <motion.div key={idx} variants={staggerItem}>
                        <Card className="relative group hover:border-red-500/30 transition-colors h-full">
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                                <pain.icon className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{pain.title}</h3>
                            <p className="text-white/60">{pain.desc}</p>
                        </Card>
                    </motion.div>
                ))}
            </StaggerContainer>

            {/* The Solution Bridge - Personal Touch */}
            <AnimationWrapper variant="slideUp" delay={0.3}>
                <div className="mt-16 rounded-3xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/5 border border-white/10 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12">
                        {/* Photo Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center md:justify-start"
                        >
                            <div className="relative group">
                                {/* Glow effect behind photo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />

                                {/* Photo container */}
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                                    <img
                                        src="/matias-profile.png"
                                        alt="Matías Jaubet"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Subtle overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-purple-400/30">
                                    ✨ Tu aliado digital
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center md:text-left space-y-4"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                {t("solution_title")}
                            </h3>
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                                {t("solution_desc_start")} <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t("solution_desc_bold")}</span>
                            </p>

                            {/* Key points */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                <div className="flex flex-col items-center md:items-start">
                                    <div className="text-3xl mb-1">🤝</div>
                                    <p className="text-sm text-white/70">Soporte humano real</p>
                                </div>
                                <div className="flex flex-col items-center md:items-start">
                                    <div className="text-3xl mb-1">🚀</div>
                                    <p className="text-sm text-white/70">Tecnología que escala</p>
                                </div>
                                <div className="flex flex-col items-center md:items-start">
                                    <div className="text-3xl mb-1">💡</div>
                                    <p className="text-sm text-white/70">Precios lógicos con IA</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </AnimationWrapper>
        </Section>
    )
}
