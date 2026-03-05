import { Shield, Zap, HeartHandshake, Headphones } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Innovacion",
    description:
      "Utilizamos las ultimas tecnologias para crear soluciones modernas, rapidas y escalables para tu negocio.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Tus datos estan protegidos con los mas altos estandares de seguridad y buenas practicas de desarrollo.",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso",
    description:
      "Trabajamos de la mano contigo para entender tus necesidades y entregar exactamente lo que tu empresa requiere.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description:
      "Nuestro equipo esta disponible en todo momento para asegurar que tu software funcione sin problemas.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre nosotros
            </p>
            <h2 className="mt-3 font-display text-balance text-3xl font-bold text-foreground md:text-5xl">
              Tu socio en desarrollo de software
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              En KSoft somos un equipo apasionado por la tecnologia y comprometido con el exito de nuestros clientes. Desarrollamos software a la medida que resuelve problemas reales y genera resultados tangibles.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Desde pequenos emprendimientos hasta empresas consolidadas, hemos ayudado a negocios de todos los tamanos a digitalizar sus procesos y crecer de manera eficiente con soluciones tecnologicas de calidad.
            </p>
          </div>

          {/* Right side - Values grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Nuestro proceso
            </p>
            <h3 className="mt-3 font-display text-balance text-2xl font-bold text-foreground md:text-4xl">
              Del concepto a la realidad en 4 pasos
            </h3>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consulta",
                description:
                  "Escuchamos tus necesidades y analizamos los requerimientos de tu negocio.",
              },
              {
                step: "02",
                title: "Diseno",
                description:
                  "Creamos prototipos y disenos que reflejan tu vision y objetivos.",
              },
              {
                step: "03",
                title: "Desarrollo",
                description:
                  "Nuestro equipo desarrolla tu software con las mejores tecnologias.",
              },
              {
                step: "04",
                title: "Entrega",
                description:
                  "Implementamos, capacitamos y brindamos soporte continuo.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <span className="font-display text-xl font-bold">{item.step}</span>
                </div>
                <h4 className="mt-4 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
