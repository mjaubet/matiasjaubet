
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
                <div className="text-center mb-12 space-y-4">
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

            {/* The Solution Bridge */}
            <AnimationWrapper variant="slideUp" delay={0.3}>
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">{t("solution_title")}</h3>
                        <p className="text-lg text-white/80">
                            {t("solution_desc_start")} <span className="text-white font-semibold">{t("solution_desc_bold")}</span>
                        </p>
                    </div>
                </div>
            </AnimationWrapper>
        </Section>
    )
}
