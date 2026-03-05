"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodriguez",
    role: "CEO, Distribuidora Global",
    content:
      "KSoft nos desarrollo un sistema de inventario que transformo completamente nuestra operacion. Ahora tenemos control total de nuestro stock en tiempo real.",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    role: "Directora, Clinica Dental Sonrie",
    content:
      "El sistema de agendamiento de citas ha sido un cambio total para nuestra clinica. Los pacientes agendan en linea y nosotros organizamos mejor nuestro tiempo.",
    rating: 5,
  },
  {
    name: "Andres Mejia",
    role: "Gerente, Tienda Online Plus",
    content:
      "La plataforma de e-commerce con CRM integrado que nos construyeron supero todas nuestras expectativas. Nuestras ventas aumentaron un 200%.",
    rating: 5,
  },
  {
    name: "Laura Torres",
    role: "Contadora, Soluciones Fiscales",
    content:
      "El software de facturacion electronica es increiblemente facil de usar y cumple con toda la normativa. Ahora genero facturas en segundos.",
    rating: 5,
  },
  {
    name: "Roberto Castillo",
    role: "Fundador, RestauranTech",
    content:
      "Gracias a KSoft pudimos digitalizar todo nuestro restaurante. El sistema de pedidos y contabilidad integrado es una maravilla.",
    rating: 5,
  },
  {
    name: "Patricia Luna",
    role: "Gerente, Inmobiliaria Premier",
    content:
      "El CRM que nos desarrollaron nos permite hacer seguimiento a cada cliente potencial. Hemos cerrado muchos mas negocios desde entonces.",
    rating: 5,
  },
]

export function Testimonials() {
  const { ref, isVisible } = useIntersection()

  return (
    <section
      id="testimonios"
      className="relative py-24 lg:py-32 bg-secondary/20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <span
            className={`inline-block text-sm font-medium text-primary mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Testimonios
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold font-mono text-foreground mb-4 text-balance ${
              isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
            }`}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p
            className={`mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty ${
              isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
            }`}
          >
            La satisfaccion de nuestros clientes es nuestra mejor carta de
            presentacion.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
  index: number
}) {
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <div
      ref={ref}
      className={`relative rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Quote icon */}
      <Quote
        size={32}
        className="text-primary/20 mb-4"
      />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-primary text-primary"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {`"${testimonial.content}"`}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm font-mono">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
