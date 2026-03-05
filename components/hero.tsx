"use client"

import Image from "next/image"
import { ArrowRight, Code2, Cloud, Shield } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.75 0.15 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.15 195) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float animation-delay-500" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-fade-up backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Desarrollo de Software Profesional
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-up animation-delay-100">
          <div className="relative w-28 h-28 md:w-36 md:h-36 animate-float">
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl" />
            <Image
              src="/images/ksoft-logo.png"
              alt="KSoft Logo"
              width={144}
              height={144}
              className="relative mix-blend-screen drop-shadow-[0_0_20px_oklch(0.75_0.15_195_/_0.3)]"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight text-foreground mb-6 animate-fade-up animation-delay-200 text-balance">
          Software que impulsa
          <span className="block text-primary">tu negocio</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up animation-delay-300 leading-relaxed text-pretty">
          En KSoft creamos soluciones digitales a la medida. Desde sistemas de inventario hasta plataformas CRM, transformamos tus ideas en software funcional.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
          <a
            href="#productos"
            className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 animate-pulse-glow"
          >
            Ver Productos
            <ArrowRight size={18} />
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-base font-medium text-foreground transition-all duration-300 hover:bg-secondary backdrop-blur-sm"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* Feature pills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 animate-fade-up animation-delay-600">
          {[
            { icon: Code2, label: "Codigo Limpio" },
            { icon: Cloud, label: "Cloud Native" },
            { icon: Shield, label: "Seguro y Escalable" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <item.icon size={16} className="text-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
