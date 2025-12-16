
"use client"

import { Section } from "@/components/ui/section"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { AnimationWrapper, StaggerContainer, staggerItem } from "@/components/ui/animation-wrapper"

export function Process() {
    const t = useTranslations("Process")

    const steps = [
        {
            num: "01",
            title: t("steps.1.title"),
            desc: t("steps.1.desc")
        },
        {
            num: "02",
            title: t("steps.2.title"),
            desc: t("steps.2.desc")
        },
        {
            num: "03",
            title: t("steps.3.title"),
            desc: t("steps.3.desc")
        },
        {
            num: "04",
            title: t("steps.4.title"),
            desc: t("steps.4.desc")
        }
    ]

    return (
        <Section id="proceso">
            <AnimationWrapper variant="fadeIn">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        {t("title_start")} <span className="text-gradient">{t("title_grad")}</span>
                    </h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        {t("desc")}
                    </p>
                </div>
            </AnimationWrapper>

            <StaggerContainer className="grid md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -z-10" />

                {steps.map((step, idx) => (
                    <motion.div key={idx} variants={staggerItem} className="relative flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-purple-500/30 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-purple-500/10 z-10 glass-card">
                            <span className="text-gradient">{step.num}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-white/60 text-sm">{step.desc}</p>
                    </motion.div>
                ))}
            </StaggerContainer>
        </Section>
    )
}
