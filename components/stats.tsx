"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { useEffect, useState } from "react"

const stats = [
  { value: 50, suffix: "+", label: "Proyectos Entregados" },
  { value: 30, suffix: "+", label: "Clientes Satisfechos" },
  { value: 5, suffix: "", label: "Anos de Experiencia" },
  { value: 99, suffix: "%", label: "Tiempo de Actividad" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useIntersection(0.5)

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const increment = target / 40
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-mono text-primary mb-2">
        {count}
        {suffix}
      </div>
    </div>
  )
}

export function Stats() {
  const { ref, isVisible } = useIntersection()

  return (
    <section ref={ref} className="relative border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
