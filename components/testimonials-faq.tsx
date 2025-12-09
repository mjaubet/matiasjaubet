
"use client"

import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { MessageCircle, Star } from "lucide-react"


const testimonials = [
    {
        quote: "Matías siempre contesta. Eso para mí vale oro. La web quedó increíble y se pagó sola en dos meses.",
        author: "Ricardo M.",
        role: "Dueño de Pyme Industrial"
    },
    {
        quote: "Me explicó fácil lo que otros me hacían sonar a ciencia nuclear. El chatbot nos salvó la vida en verano.",
        author: "Sofía L.",
        role: "Gerente de Marketing"
    },
    {
        quote: "Rápido, prolijo y sin vueltas. Entendió mi negocio mejor que yo.",
        author: "Martín G.",
        role: "Arquitecto"
    }
]

const faqs = [
    {
        q: "¿Tengo que saber de tecnología?",
        a: "Nada. Cero. Para eso estoy yo. Vos ocupate de tu negocio, yo me encargo de que todo lo técnico funcione."
    },
    {
        q: "¿Qué pasa si se rompe algo?",
        a: "Dificil que pase, pero si pasa, tenés garantía. Y si contratas el mantenimiento, yo lo arreglo antes de que te des cuenta."
    },
    {
        q: "¿Cuánto tardás?",
        a: "Depende el proyecto. Una Landing Page puede estar en 1 semana. Un sistema complejo, 3 o 4. Pero siempre cumplo las fechas."
    },
    {
        q: "¿Es muy caro mantener esto?",
        a: "No. Busco soluciones que escalen sin que te desangren. Te voy a ofrecer lo que necesites, ni más ni menos."
    }
]

export function TestimonialsAndFAQ() {
    return (
        <Section id="faq" className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Testimonials */}
            <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">
                    Lo que dicen <span className="text-gradient">mis clientes</span>
                </h2>
                <div className="space-y-4">
                    {testimonials.map((t, idx) => (
                        <Card key={idx} className="bg-white/5 border-none">
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
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">
                    Preguntas <span className="text-gradient">Frecuentes</span>
                </h2>
                <div className="space-y-4">
                    {/* Simple FAQ Layout without accordion lib dependence for simplicity first, or standard details/summary */}
                    {faqs.map((faq, idx) => (
                        <Card key={idx} className="group cursor-pointer hover:bg-white/5 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <MessageCircle className="w-4 h-4 text-purple-400" />
                                {faq.q}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {faq.a}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    )
}
