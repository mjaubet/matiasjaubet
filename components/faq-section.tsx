"use client"

import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { AnimationWrapper, StaggerContainer, staggerItem } from "@/components/ui/animation-wrapper"
import FAQSchema from "@/components/faq-schema"

export function FAQSection() {
    const t = useTranslations("TestimonialsAndFAQ")

    const faqs = [
        {
            q: t("faqs.1.q"),
            a: t("faqs.1.a")
        },
        {
            q: t("faqs.2.q"),
            a: t("faqs.2.a")
        },
        {
            q: t("faqs.3.q"),
            a: t("faqs.3.a")
        },
        {
            q: t("faqs.4.q"),
            a: t("faqs.4.a")
        }
    ]

    return (
        <>
            <FAQSchema
                faqs={faqs.map(faq => ({
                    question: faq.q,
                    answer: faq.a
                }))}
            />
            <Section className="max-w-4xl mx-auto">
                <AnimationWrapper variant="fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        {t("faq_title_start")} <span className="text-gradient">{t("faq_title_grad")}</span>
                    </h1>
                    <p className="text-white/60 text-center mb-12 text-lg">
                        {t("faq_subtitle")}
                    </p>
                </AnimationWrapper>

                <StaggerContainer className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <motion.div key={idx} variants={staggerItem}>
                            <Card className="group cursor-pointer hover:bg-white/5 transition-all duration-300 border-white/10 hover:border-purple-500/30">
                                <h3 className="font-bold text-xl mb-3 flex items-start gap-3">
                                    <MessageCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                                    <span>{faq.q}</span>
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed pl-9">
                                    {faq.a}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </Section>
        </>
    )
}
