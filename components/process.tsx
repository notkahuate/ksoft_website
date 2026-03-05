"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consulta Inicial",
    description:
      "Nos reunimos contigo para entender tus necesidades, objetivos y procesos actuales. Definimos el alcance del proyecto juntos.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Diseno y Prototipado",
    description:
      "Creamos wireframes y prototipos interactivos para que visualices tu software antes de comenzar el desarrollo.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Desarrollo Agil",
    description:
      "Desarrollamos tu solucion con metodologias agiles, entregando avances semanales y manteniendo comunicacion constante.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lanzamiento y Soporte",
    description:
      "Desplegamos tu software, capacitamos a tu equipo y brindamos soporte tecnico continuo para asegurar el exito.",
  },
]

export function Process() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="proceso" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <span
            className={`inline-block text-sm font-medium text-primary mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Nuestro Proceso
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold font-mono text-foreground mb-4 text-balance ${
              isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
            }`}
          >
            De la idea al software listo
          </h2>
          <p
            className={`mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty ${
              isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
            }`}
          >
            Un proceso claro y transparente para que tu proyecto se entregue a
            tiempo y con la calidad que mereces.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0]
  index: number
}) {
  const { ref, isVisible } = useIntersection(0.2)

  return (
    <div
      ref={ref}
      className={`relative text-center ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Step number circle */}
      <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-background text-primary font-mono font-bold text-lg transition-all duration-500 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
        {step.step}
        <div className="absolute -inset-1 rounded-full border border-primary/10" />
      </div>

      {/* Icon */}
      <div className="mx-auto mb-4 inline-flex rounded-lg bg-secondary p-3 text-primary">
        <step.icon size={22} />
      </div>

      <h3 className="text-base font-bold font-mono text-foreground mb-3">
        {step.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {step.description}
      </p>
    </div>
  )
}
