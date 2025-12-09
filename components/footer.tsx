
"use client"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { ContactForm } from "@/components/contact-form"

export function Footer() {
    const t = useTranslations("Footer")

    return (
        <footer className="border-t border-white/10 bg-[#050505] relative z-10">
            <Section className="py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Brand & Social */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                            <span className="text-gradient">Matias Jaubet</span>
                            <span className="text-white/80 font-light">Web & IA</span>
                        </Link>
                        <p className="text-white/60 max-w-sm">
                            {t("desc")}
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/in/jaubet/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5 text-white/70" />
                            </Link>
                            <Link href="https://github.com/matiasjaubet/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5 text-white/70" />
                            </Link>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />

                </div>
            </Section>

            {/* Copyright Bar */}
            <div className="border-t border-white/10 bg-black/30">
                <Section className="py-2">
                    <div className="text-sm text-white/40 text-center">
                        © {new Date().getFullYear()} Matías Web & IA. Todos los derechos reservados.
                    </div>
                </Section>
            </div>
        </footer>
    )
}
