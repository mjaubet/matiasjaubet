
"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const cases = [
    {
        category: "Web Institucional",
        title: "Estudio Jurídico López & Asoc.",
        color: "from-blue-500 to-cyan-500",
        stats: "Lanzada en 2 semanas",
        desc: "Necesitaban seriedad y rapidez. Desarrollamos una web institucional que transmite confianza y autoridad, con un sistema de turnos integrado."
    },
    {
        category: "Chatbot & IA",
        title: "Burger King Local (Franquicia)",
        color: "from-orange-500 to-red-500",
        stats: "+45% Pedidos Automáticos",
        desc: "Se perdían pedidos en WhatsApp por demoras en contestar. Implementamos un bot que toma el pedido, confirma y envía a cocina."
    },
    {
        category: "Automatización",
        title: "Inmobiliaria Horizonte",
        color: "from-emerald-500 to-green-500",
        stats: "0 Leads perdidos",
        desc: "Automatizamos la captura de leads desde portales. Ahora cada consulta recibe respuesta inmediata y se agenda en el CRM sola."
    }
]

export function Portfolio() {
    return (
        <Section id="portfolio" className="bg-white/5 border-y border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Resultados <span className="text-gradient">Reales</span>
                    </h2>
                    <p className="text-white/60 max-w-xl">
                        Acá no hay teoría. Hay negocios que facturan más y dueños que duermen mejor.
                    </p>
                </div>
                <Link href="#" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    Ver todos los proyectos <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {cases.map((c, idx) => (
                    <Card key={idx} className="group overflow-hidden border-0 bg-neutral-900/50">
                        {/* Color banner */}
                        <div className={`h-2 w-full bg-gradient-to-r ${c.color}`} />

                        <div className="p-2">
                            <div className="text-xs font-medium text-white/40 mb-2 uppercase tracking-wide">{c.category}</div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{c.title}</h3>

                            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/90">
                                🚀 {c.stats}
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed">
                                {c.desc}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
