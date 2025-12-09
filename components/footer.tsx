
"use client"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
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
                            Desarrollador Full Stack & Especialista en Automatización.
                            Ayudo a negocios a escalar con tecnología real.
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
                            © {new Date().getFullYear()} Matías Web & IA. Todos los derechos reservados.
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full -z-10" />

                        <h3 className="text-2xl font-bold mb-4">¿Hablamos?</h3>
                        <p className="text-white/60 mb-6 text-sm">
                            Dejame tus datos y te escribo por WhatsApp. Sin compromiso.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="WhatsApp"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                                />
                            </div>
                            <textarea
                                placeholder="¿Qué necesitás?"
                                rows={3}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                            />
                            <Button className="w-full">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>

                </div>
            </Section>

            {/* Floating WhatsApp */}
            <Link
                href="https://wa.me/your-number"
                target="_blank"
                className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-lg shadow-emerald-500/20 transition-transform hover:scale-110 flex items-center justify-center"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </Link>
        </footer>
    )
}
