

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
      <Navbar />

      <Hero />

      <div className="space-y-24 md:space-y-32 pb-24">
        <PainPoints />
        <Services />

        {/* Visual Break */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        <Portfolio />
        <Process />
        <Testimonials />
      </div>

      <Footer />
    </main>
  )
}
