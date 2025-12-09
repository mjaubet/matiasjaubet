
"use client"

import { Section } from "@/components/ui/section"

const steps = [
    {
        num: "01",
        title: "Diagnóstico",
        desc: "Charlamos 15 minutos. Me contás qué te duele y yo te digo si puedo curarlo. Sin vueltas."
    },
    {
        num: "02",
        title: "Propuesta",
        desc: "Te paso un plan de acción y un precio cerrado. Nada de 'costos sorpresa' a mitad de camino."
    },
    {
        num: "03",
        title: "Ejecución",
        desc: "Me pongo a trabajar. Vos seguí con lo tuyo. En pocos días te muestro avances reales."
    },
    {
        num: "04",
        title: "Entrega y Fiesta",
        desc: "Te entrego todo funcionando, te enseño a usarlo y brindamos (virtualmente). No te abandono ahí."
    }
]

export function Process() {
    return (
        <Section id="proceso">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    ¿Cómo <span className="text-gradient">Trabajamos?</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                    Simple, rápido y sin dolores de cabeza. Eliminé la burocracia para que podamos avanzar rápido.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -z-10" />

                {steps.map((step, idx) => (
                    <div key={idx} className="relative flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-purple-500/30 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-purple-500/10 z-10 glass-card">
                            <span className="text-gradient">{step.num}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-white/60 text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}
