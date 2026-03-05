import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solutions />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
