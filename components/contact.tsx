import Link from "next/link"
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contacto" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-balance text-3xl font-bold text-foreground md:text-5xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Cuentanos tu idea y te ayudamos a hacerla realidad. Nuestro equipo esta listo para darte la mejor asesoria.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">WhatsApp</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Escribenos directamente</p>
                  <Link
                    href="https://wa.me/573162851135?text=Hola%2C%20me%20interesa%20un%20software%20de%20KSoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    +57 316 285 1135
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Telefono</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Llamanos de lunes a viernes</p>
                  <Link
                    href="tel:+573162851135"
                    className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    +57 316 285 1135
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Respondemos en menos de 24 horas</p>
                  <Link
                    href="mailto:contacto@ksoft.com"
                    className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    contacto@ksoft.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Ubicacion</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Colombia - Servicio a toda Latinoamerica
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="flex items-center">
            <div className="w-full overflow-hidden rounded-2xl border border-border bg-background p-8 lg:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#25D366]">
                  <MessageCircle className="h-10 w-10 text-[#f0fdf4]" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                  Escribe por WhatsApp
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  La forma mas rapida de contactarnos. Escribe tu mensaje y te responderemos al instante con toda la informacion que necesitas.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-full bg-[#25D366] text-[#f0fdf4] hover:bg-[#20bd5a]"
                >
                  <Link
                    href="https://wa.me/573162851135?text=Hola%2C%20me%20interesa%20un%20software%20de%20KSoft"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Iniciar conversacion
                  </Link>
                </Button>

                <p className="mt-4 text-xs text-muted-foreground">
                  Respuesta promedio: menos de 5 minutos
                </p>

                <div className="mt-8 w-full border-t border-border pt-8">
                  <p className="text-sm font-medium text-foreground">
                    Tambien puedes solicitar:
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {[
                      "Demo gratuita",
                      "Cotizacion",
                      "Asesoria",
                      "Soporte",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
