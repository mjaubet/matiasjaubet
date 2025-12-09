
"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Globe, Bot, Workflow, Server } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { AnimationWrapper, StaggerContainer, staggerItem } from "@/components/ui/animation-wrapper"

export function Services() {
    const t = useTranslations("Services")

    const services = [
        {
            icon: Globe,
            title: t("cards.1.title"),
            desc: t("cards.1.desc")
        },
        {
            icon: Bot,
            title: t("cards.2.title"),
            desc: t("cards.2.desc")
        },
        {
            icon: Workflow,
            title: t("cards.3.title"),
            desc: t("cards.3.desc")
        },
        {
            icon: Server,
            title: t("cards.4.title"),
            desc: t("cards.4.desc")
        }
    ]

    return (
        <Section id="servicios" className="relative">
            <AnimationWrapper variant="fadeIn">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t("title_start")} <br />
                        <span className="text-gradient">{t("title_grad")}</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        {t("desc")}
                    </p>
                </div>
            </AnimationWrapper>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                    <motion.div key={idx} variants={staggerItem}>
                        <Card className="hover:bg-white/5 transition-all group border-white/5 h-full">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
                        </Card>
                    </motion.div>
                ))}
            </StaggerContainer>
        </Section>
    )
}
