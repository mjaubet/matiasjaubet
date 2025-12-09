
"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Clock, DollarSign, UserX } from "lucide-react"

const pains = [
    {
        icon: Clock,
        title: "Sitios lentos o caídos",
        desc: "Perdés ventas cuando tu web no carga o se vive rompiendo en el peor momento."
    },
    {
        icon: UserX,
        title: "Developers fantasmas",
        desc: "Empiezan el proyecto y desaparecen. O te hablan en chino cuando pedís un cambio."
    },
    {
        icon: DollarSign,
        title: "Presupuestos impagables",
        desc: "Agencias que cotizan fortunas por webs que podrías tener funcionando en días."
    }
]

export function PainPoints() {
    return (
        <Section id="problema">
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                    ¿Cansado de renegar con <span className="text-red-400">la tecnología?</span>
                </h2>
                <p className="text-white/60 max-w-xl mx-auto">
                    Sé lo frustrante que es querer digitalizar tu negocio y encontrarte con trabas, demoras y costos ocultos.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {pains.map((pain, idx) => (
                    <Card key={idx} className="relative group hover:border-red-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                            <pain.icon className="w-6 h-6 text-red-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{pain.title}</h3>
                        <p className="text-white/60">{pain.desc}</p>
                    </Card>
                ))}
            </div>

            {/* The Solution Bridge */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Mi propuesta es simple:</h3>
                    <p className="text-lg text-white/80">
                        Soporte humano real, tecnología que escala y <span className="text-white font-semibold">precios lógicos gracias a la IA.</span>
                    </p>
                </div>
            </div>
        </Section>
    )
}
