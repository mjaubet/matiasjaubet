
"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Globe, Bot, Workflow, Server } from "lucide-react"

const services = [
    {
        icon: Globe,
        title: "Sitios Web Profesionales",
        desc: "Tu vidriera digital abierta 24/7. Webs rápidas, seguras y autoadministrables. No dependés de mí para cambiar una foto."
    },
    {
        icon: Bot,
        title: "Chatbots & Atención 24/7",
        desc: "Configuro bots inteligentes que responden dudas, agendan turnos y venden mientras vos dormís. Basta de perder clientes por no contestar."
    },
    {
        icon: Workflow,
        title: "Automatización (n8n)",
        desc: "Empleados digitales que hacen el trabajo aburrido. Facturación, seguimiento de leads, posteos en redes... todo automático."
    },
    {
        icon: Server,
        title: "Hosting & Mantenimiento",
        desc: "Yo me ocupo de que no se caiga nunca. Copias de seguridad, actualizaciones y seguridad para que duermas tranquilo."
    }
]

export function Services() {
    return (
        <Section id="servicios" className="relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Soluciones Reales <br />
                    <span className="text-gradient">Sin Tecnicismos</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                    No te vendo código, te vendo tiempo libre y herramientas para facturar más.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                    <Card key={idx} className="hover:bg-white/5 transition-all group border-white/5">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <service.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
