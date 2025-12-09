
"use client"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { ContactForm } from "@/components/contact-form"

export function Footer() {
    const t = useTranslations("Footer")

    return (
        <footer className="border-t border-white/10 bg-[#050505] relative z-10">
            <Section className="py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Brand & Social */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                            <span className="text-gradient">Matías</span>
                            <span className="text-white/80 font-light">Web & IA</span>
                        </Link>
                        <p className="text-white/60 max-w-sm">
                            {t("desc")}
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5 text-white/70" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5 text-white/70" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5 text-white/70" />
                            </Link>
                        </div>
                        <div className="text-sm text-white/30 pt-4">
                            © {new Date().getFullYear()} {t("rights")}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />

                </div>
            </Section>


        </footer>
    )
}
