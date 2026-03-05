import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Products } from "@/components/products"
import { Technologies } from "@/components/technologies"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <Technologies />
      <About />
      <Process />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
