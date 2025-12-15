
"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Check } from "lucide-react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { AnimationWrapper, StaggerContainer, staggerItem } from "@/components/ui/animation-wrapper"

export function Pricing() {
    const t = useTranslations("Pricing")

    const plans = [
        {
            name: t("plans.1.name"),
            price: t("cta"),
            desc: t("plans.1.desc"),
            features: [
                t("plans.1.features.1"),
                t("plans.1.features.2"),
                t("plans.1.features.3"),
                t("plans.1.features.4"),
                t("plans.1.features.5")
            ]
        },
        {
            name: t("plans.2.name"),
            popular: true,
            price: t("cta"),
            desc: t("plans.2.desc"),
            features: [
                t("plans.2.features.1"),
                t("plans.2.features.2"),
                t("plans.2.features.3"),
                t("plans.2.features.4"),
                t("plans.2.features.5")
            ]
        },
        {
            name: t("plans.3.name"),
            price: t("cta"),
            desc: t("plans.3.desc"),
            features: [
                t("plans.3.features.1"),
                t("plans.3.features.2"),
                t("plans.3.features.3"),
                t("plans.3.features.4"),
                t("plans.3.features.5")
            ]
        }
    ]

    return (
        <Section id="planes">
            <AnimationWrapper variant="fadeIn">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t("title_start")} <span className="text-gradient">{t("title_grad")}</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        {t("desc")}
                    </p>
                </div>
            </AnimationWrapper>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, idx) => (
                    <motion.div key={idx} variants={staggerItem}>
                        <Card
                            className={`flex flex-col relative ${plan.popular ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/10'}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {t("popular")}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-white/60 text-sm h-10">{plan.desc}</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm">
                                        <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span className="text-white/80">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant={plan.popular ? 'primary' : 'glass'}
                                className="w-full"
                                onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        // Update URL with plan parameter
                                        const planParam = plan.name.toLowerCase().replace(/\s+/g, '-');
                                        window.history.pushState({}, '', `#contact?plan=${planParam}`);

                                        // Smooth scroll to contact form
                                        contactSection.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });

                                        // Trigger custom event to notify contact form
                                        window.dispatchEvent(new CustomEvent('planSelected', {
                                            detail: { plan: plan.name }
                                        }));
                                    }
                                }}
                            >
                                {t("cta")}
                            </Button>
                        </Card>
                    </motion.div>
                ))}
            </StaggerContainer>
        </Section>
    )
}
