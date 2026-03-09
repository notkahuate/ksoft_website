"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react"

export function Contact() {
  const { ref, isVisible } = useIntersection()
  const { ref: ref2, isVisible: isVisible2 } = useIntersection()

  const whatsappNumber = "573162851135"
  const whatsappMessage = encodeURIComponent(
    "Hola KSoft, estoy interesado en sus servicios de desarrollo de software. Me gustaria recibir mas informacion."
  )

  return (
    <section id="contacto" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <span
            className={`inline-block text-sm font-medium text-primary mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Contacto
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold font-mono text-foreground mb-4 text-balance ${
              isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
            }`}
          >
            Hablemos de tu proyecto
          </h2>
          <p
            className={`mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty ${
              isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
            }`}
          >
            Estamos listos para ayudarte a llevar tu negocio al siguiente nivel.
            Contactanos y recibe una cotizacion personalizada sin compromiso.
          </p>
        </div>

        <div ref={ref2} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`${
              isVisible2 ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <h3 className="text-xl font-bold font-mono text-foreground mb-6">
              Informacion de Contacto
            </h3>

            <div className="flex flex-col gap-6 mb-8">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    +57 316 285 1135
                  </p>
                </div>
              </a>

              <a
                href="tel:+573001234567"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Telefono</p>
                  <p className="text-sm text-muted-foreground">
                    +57 316 285 1135
                  </p>
                </div>
              </a>

              <a
                href="mailto:contacto@ksoft.dev"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">
                    contacto@ksoft.dev
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Ubicacion</p>
                  <p className="text-sm text-muted-foreground">
                    Colombia - Servicio Remoto Global
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`${
              isVisible2 ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
              <h3 className="text-xl font-bold font-mono text-foreground mb-6">
                Envia tu Mensaje
              </h3>
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const name = formData.get("name")
                  const email = formData.get("email")
                  const service = formData.get("service")
                  const message = formData.get("message")
                  const waText = encodeURIComponent(
                    `Hola KSoft! Soy ${name} (${email}). Estoy interesado en: ${service}. ${message}`
                  )
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${waText}`,
                    "_blank"
                  )
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Nombre Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Servicio de Interes
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="inventario">Sistema de Inventario</option>
                    <option value="citas">Agendamiento de Citas</option>
                    <option value="web">Pagina Web</option>
                    <option value="crm">Software + CRM</option>
                    <option value="facturacion">Facturacion Electronica</option>
                    <option value="contabilidad">Contabilidad y Reportes</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuentanos sobre tu proyecto..."
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 animate-pulse-glow"
                >
                  <Send size={16} />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
