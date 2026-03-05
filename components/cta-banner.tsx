"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.75 0.15 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.15 195) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <h2
          className={`text-3xl md:text-5xl font-bold font-mono text-foreground mb-6 text-balance ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Listo para digitalizar tu negocio?
        </h2>
        <p
          className={`mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed mb-10 text-pretty ${
            isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
          }`}
        >
          Agenda una consulta gratuita con nuestro equipo y descubre como
          KSoft puede transformar tus procesos con software a la medida.
        </p>
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
          }`}
        >
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 animate-pulse-glow"
          >
            Hablar con un Experto
            <ArrowRight size={18} />
          </a>
          <a
            href="#productos"
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 text-base font-medium text-foreground transition-all duration-300 hover:border-primary/40"
          >
            Ver Todos los Productos
          </a>
        </div>
      </div>
    </section>
  )
}
