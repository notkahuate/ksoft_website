"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Package,
  CalendarCheck,
  Globe,
  Users,
  Receipt,
  ArrowRight,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const solutions = [
  {
    id: "inventario",
    icon: Package,
    title: "Software de Inventario",
    subtitle: "Control total de tu stock",
    description:
      "Gestiona tu inventario en tiempo real con alertas de stock bajo, seguimiento de productos, codigo de barras y reportes detallados. Perfecto para tiendas, bodegas y distribuidoras.",
    image: "/images/inventory.png",
    features: [
      "Control de stock en tiempo real",
      "Alertas de stock minimo",
      "Escaneo de codigo de barras",
      "Reportes y estadisticas",
      "Multi-bodega y multi-sucursal",
      "Historial de movimientos",
    ],
    popular: false,
  },
  {
    id: "citas",
    icon: CalendarCheck,
    title: "Agendamiento de Citas",
    subtitle: "Organiza tu agenda facilmente",
    description:
      "Sistema completo para agendar, gestionar y recordar citas. Ideal para clinicas, salones de belleza, consultorios y cualquier negocio basado en citas.",
    image: "/images/scheduling.png",
    features: [
      "Calendario interactivo",
      "Recordatorios automaticos",
      "Reservas en linea para clientes",
      "Gestion de horarios del equipo",
      "Historial de citas por cliente",
      "Integracion con WhatsApp",
    ],
    popular: true,
  },
  {
    id: "web",
    icon: Globe,
    title: "Paginas Web de Productos",
    subtitle: "Tu tienda en linea",
    description:
      "Diseno y desarrollo de paginas web profesionales para exhibir y vender tus productos. Con carrito de compras, pasarela de pagos y panel de administracion.",
    image: "/images/webpages.png",
    features: [
      "Diseno responsivo y moderno",
      "Catalogo de productos",
      "Carrito de compras",
      "Pasarela de pagos integrada",
      "Panel de administracion",
      "Optimizado para SEO",
    ],
    popular: false,
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM Integrado",
    subtitle: "Conecta todo con tus clientes",
    description:
      "Software CRM conectado a tu pagina web para gestionar clientes, seguimiento de ventas, pipeline comercial y automatizacion de marketing.",
    image: "/images/crm.png",
    features: [
      "Gestion de contactos y leads",
      "Pipeline de ventas visual",
      "Automatizacion de seguimiento",
      "Integracion con tu web",
      "Reportes de ventas",
      "Segmentacion de clientes",
    ],
    popular: true,
  },
  {
    id: "facturacion",
    icon: Receipt,
    title: "Contabilidad y Facturacion",
    subtitle: "Tus cuentas en orden",
    description:
      "Lleva tus cuentas, genera facturas electronicas, controla gastos e ingresos con reportes financieros completos. Cumple con la normativa vigente.",
    image: "/images/billing.png",
    features: [
      "Facturacion electronica",
      "Control de ingresos y gastos",
      "Reportes financieros",
      "Gestion de impuestos",
      "Conciliacion bancaria",
      "Exportar a Excel y PDF",
    ],
    popular: false,
  },
]

export function Solutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id)
  const active = solutions.find((s) => s.id === activeSolution) ?? solutions[0]

  return (
    <section id="soluciones" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            Nuestras Soluciones
          </Badge>
          <h2 className="font-display text-balance text-3xl font-bold text-foreground md:text-5xl">
            Software que impulsa tu negocio
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Desarrollamos software a la medida para cada necesidad. Elige la solucion que mejor se adapte a tu empresa.
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveSolution(solution.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeSolution === solution.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              <solution.icon className="h-4 w-4" />
              {solution.title.split(" ").slice(-1)[0]}
              {solution.popular && activeSolution !== solution.id && (
                <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                  Popular
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Solution Detail */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative aspect-video lg:aspect-auto">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/20" />
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-2 rounded-lg bg-card/90 px-4 py-2 backdrop-blur-sm">
                  <active.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{active.subtitle}</span>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {active.description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link
                    href={`https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20el%20software%20de%20${encodeURIComponent(active.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar cotizacion
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                  <Link href="#contacto">
                    Mas informacion
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* All Solutions Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => {
                setActiveSolution(solution.id)
                document.getElementById("soluciones")?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`group relative overflow-hidden rounded-xl border p-6 text-left transition-all hover:shadow-lg ${
                activeSolution === solution.id
                  ? "border-primary/50 bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {solution.popular && (
                <div className="absolute right-4 top-4">
                  <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                </div>
              )}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                  activeSolution === solution.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                }`}
              >
                <solution.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 font-display text-lg font-bold text-foreground">
                {solution.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {solution.description.slice(0, 100)}...
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Ver detalles
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
