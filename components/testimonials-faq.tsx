
"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { MessageCircle, Star } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { AnimationWrapper, StaggerContainer, staggerItem } from "@/components/ui/animation-wrapper"


export function TestimonialsAndFAQ() {
    const t = useTranslations("TestimonialsAndFAQ")

    const testimonials = [
        {
            quote: t("testimonials.1.quote"),
            author: t("testimonials.1.author"),
            role: t("testimonials.1.role")
        },
        {
            quote: t("testimonials.2.quote"),
            author: t("testimonials.2.author"),
            role: t("testimonials.2.role")
        },
        {
            quote: t("testimonials.3.quote"),
            author: t("testimonials.3.author"),
            role: t("testimonials.3.role")
        }
    ]

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
        <Section id="faq" className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Testimonials */}
            <div className="space-y-8">
                <AnimationWrapper variant="fadeIn">
                    <h2 className="text-3xl font-bold mb-8">
                        {t("testimonials_title_start")} <span className="text-gradient">{t("testimonials_title_grad")}</span>
                    </h2>
                </AnimationWrapper>
                <StaggerContainer className="space-y-4">
                    {testimonials.map((t, idx) => (
                        <motion.div key={idx} variants={staggerItem}>
                            <Card className="bg-white/5 border-none">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-white/80 italic mb-4">"{t.quote}"</p>
                                <div>
                                    <div className="font-bold text-sm">{t.author}</div>
                                    <div className="text-white/40 text-xs">{t.role}</div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>

            {/* FAQ */}
            <div className="space-y-8">
                <AnimationWrapper variant="fadeIn">
                    <h2 className="text-3xl font-bold mb-8">
                        {t("faq_title_start")} <span className="text-gradient">{t("faq_title_grad")}</span>
                    </h2>
                </AnimationWrapper>
                <StaggerContainer className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div key={idx} variants={staggerItem}>
                            <Card className="group cursor-pointer hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4 text-purple-400" />
                                    {faq.q}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {faq.a}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </Section>
    )
}
