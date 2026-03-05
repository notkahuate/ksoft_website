"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Target, Lightbulb, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Enfoque al Cliente",
    description:
      "Cada solucion esta disenada pensando en las necesidades especificas de tu negocio.",
  },
  {
    icon: Lightbulb,
    title: "Innovacion Constante",
    description:
      "Utilizamos las tecnologias mas modernas para crear software de vanguardia.",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description:
      "Contamos con profesionales altamente capacitados en desarrollo de software.",
  },
  {
    icon: Zap,
    title: "Entrega Rapida",
    description:
      "Metodologias agiles que nos permiten entregar resultados en tiempos record.",
  },
]

export function About() {
  const { ref, isVisible } = useIntersection()
  const { ref: ref2, isVisible: isVisible2 } = useIntersection()

  return (
    <section id="nosotros" className="relative py-24 lg:py-32 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div ref={ref}>
            <span
              className={`inline-block text-sm font-medium text-primary mb-4 ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              Sobre Nosotros
            </span>
            <h2
              className={`text-3xl md:text-5xl font-bold font-mono text-foreground mb-6 text-balance ${
                isVisible ? "animate-slide-left animation-delay-100" : "opacity-0"
              }`}
            >
              Transformamos ideas en{" "}
              <span className="text-primary">software real</span>
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-6 text-pretty ${
                isVisible ? "animate-slide-left animation-delay-200" : "opacity-0"
              }`}
            >
              KSoft es una empresa de desarrollo de software dedicada a crear
              soluciones digitales que potencien el crecimiento de tu negocio.
              Con mas de 5 anos de experiencia, hemos ayudado a decenas de
              empresas a digitalizar y automatizar sus procesos.
            </p>
            <p
              className={`text-muted-foreground leading-relaxed ${
                isVisible ? "animate-slide-left animation-delay-300" : "opacity-0"
              }`}
            >
              Nos especializamos en software a la medida: desde sistemas de
              inventario y agendamiento, hasta plataformas conectadas con CRM y
              herramientas de facturacion electronica. Tu exito es nuestro objetivo.
            </p>
          </div>

          {/* Right - Values Grid */}
          <div ref={ref2} className="grid grid-cols-2 gap-4">
            {values.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                  isVisible2 ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="mb-3 inline-flex rounded-lg bg-secondary p-2.5 text-primary">
                  <item.icon size={20} />
                </div>
                <h3 className="text-sm font-bold font-mono text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
