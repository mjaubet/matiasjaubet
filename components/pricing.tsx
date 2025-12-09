
"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Check } from "lucide-react"

const plans = [
    {
        name: "Despegue",
        price: "Consultar",
        desc: "Ideal para arrancar con el pie derecho. Tu presencia digital profesional.",
        features: ["Landing Page One-Page", "Diseño Mobile First", "Formulario de Contacto", "Hosting incluido 1 año", "Dominio .com bonificado"]
    },
    {
        name: "Profesional",
        popular: true,
        price: "Consultar",
        desc: "Para negocios que quieren escalar. Web completa + Chatbot básico.",
        features: ["Web Multipágina (Hasta 5)", "Chatbot de Respuestas Frecuentes", "Optimización SEO Básica", "Integración con WhatsApp", "Blog autoadministrable"]
    },
    {
        name: "Automatizado",
        price: "Consultar",
        desc: "La máquina de ventas total. Web + IA + Automatizaciones.",
        features: ["Web E-commerce o a medida", "Chatbot con IA (GPT-4)", "Automatización de Turnos/Leads", "Dashboard de Métricas", "Soporte Prioritario"]
    }
]

export function Pricing() {
    return (
        <Section id="planes">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Inversión <span className="text-gradient">Clara y Transparente</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                    La implementación de IA reduce tus costos operativos a largo plazo. Esto no es un gasto, es una inversión que se paga sola.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, idx) => (
                    <Card
                        key={idx}
                        className={`flex flex-col relative ${plan.popular ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/10'}`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Más Elegido
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

                        <Button variant={plan.popular ? 'primary' : 'glass'} className="w-full">
                            Solicitar Cotización
                        </Button>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
