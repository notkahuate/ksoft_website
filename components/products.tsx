"use client"

import { useState } from "react"
import Image from "next/image"
import { useIntersection } from "@/hooks/use-intersection"
import {
  Package,
  CalendarCheck,
  Globe,
  ShoppingCart,
  Receipt,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react"

const products = [
  {
    id: "inventario",
    icon: Package,
    tab: "Inventario",
    title: "Software de Inventario",
    subtitle: "Gestiona tu inventario en tiempo real",
    description:
      "Gestiona tu inventario en tiempo real con alertas de stock bajo, seguimiento de productos, codigo de barras y reportes detallados. Ideal para tiendas, bodegas y distribuidoras.",
    features: [
      "Control de stock en tiempo real",
      "Alertas de inventario bajo",
      "Codigo de barras y QR",
      "Reportes y estadisticas",
      "Multiples bodegas",
      "Historial de movimientos",
    ],
    image: "/images/products/inventario.png",
    popular: false,
  },
  {
    id: "citas",
    icon: CalendarCheck,
    tab: "Citas",
    title: "Agendamiento de Citas",
    subtitle: "Organiza tu agenda facilmente",
    description:
      "Sistema completo para agendar, gestionar y recordar citas. Ideal para clinicas, salones de belleza, consultorios y cualquier negocio basado en citas.",
    features: [
      "Calendario interactivo",
      "Recordatorios automaticos",
      "Reservas en linea para clientes",
      "Gestion de horarios del equipo",
      "Historial de citas por cliente",
      "Integracion con WhatsApp",
    ],
    image: "/images/products/citas.png",
    popular: true,
  },
  {
    id: "productos",
    icon: Globe,
    tab: "Productos",
    title: "Paginas Web de Productos",
    subtitle: "Exhibe y vende tus productos en linea",
    description:
      "Diseno y desarrollo de paginas web profesionales para exhibir y vender tus productos. Con carrito de compras, pasarela de pagos y panel de administracion.",
    features: [
      "Catalogo de productos",
      "Carrito de compras",
      "Pasarela de pagos",
      "Panel de administracion",
      "Optimizado para SEO",
      "Diseno responsivo",
    ],
    image: "/images/products/paginas-web.png",
    popular: false,
  },
  {
    id: "crm",
    icon: ShoppingCart,
    tab: "Integrado",
    title: "CRM Integrado",
    subtitle: "Gestiona tus clientes y ventas",
    description:
      "Software CRM conectado a tu pagina web para gestionar clientes, seguimiento de ventas, pipeline comercial y mas. Todo integrado en una sola plataforma.",
    features: [
      "Gestion de contactos",
      "Pipeline de ventas",
      "Seguimiento de oportunidades",
      "Reportes de desempeno",
      "Integracion con email",
      "Automatizacion de tareas",
    ],
    image: "/images/products/crm.png",
    popular: true,
  },
  {
    id: "facturacion",
    icon: Receipt,
    tab: "Facturacion",
    title: "Contabilidad y Facturacion",
    subtitle: "Lleva tus cuentas al dia",
    description:
      "Lleva tus cuentas, genera facturas electronicas, controla gastos e ingresos con reportes financieros detallados. Cumple con la normativa fiscal vigente.",
    features: [
      "Facturas electronicas",
      "Control de gastos e ingresos",
      "Reportes financieros",
      "Cuentas por cobrar y pagar",
      "Exportacion PDF / XML",
      "Dashboard en tiempo real",
    ],
    image: "/images/products/facturacion.png",
    popular: false,
  },
]

export function Products() {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, isVisible } = useIntersection()
  const active = products[activeTab]

  return (
    <section id="productos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div ref={ref} className="text-center mb-12">
          <span
            className={`inline-block text-sm font-medium text-primary mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Nuestros Productos
          </span>
          <h2
            className={`text-3xl md:text-5xl font-bold font-mono text-foreground mb-4 text-balance ${
              isVisible ? "animate-fade-up animation-delay-100" : "opacity-0"
            }`}
          >
            Soluciones para cada necesidad
          </h2>
          <p
            className={`mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty ${
              isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"
            }`}
          >
            Desarrollamos software personalizado que se adapta a los procesos
            unicos de tu empresa.
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2 mb-10 ${
            isVisible ? "animate-fade-up animation-delay-300" : "opacity-0"
          }`}
        >
          {products.map((product, i) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <product.icon size={16} />
              {product.tab}
              {product.popular && activeTab !== i && (
                <span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
                  Popular
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured product showcase */}
        <div
          className={`rounded-2xl border border-border bg-card overflow-hidden mb-10 ${
            isVisible ? "animate-fade-up animation-delay-400" : "opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-2">
            {/* Product image */}
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-secondary/30">
              <Image
                key={active.id}
                src={active.image}
                alt={active.title}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 rounded-lg bg-background/80 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground">
                  <active.icon size={16} className="text-primary" />
                  {active.subtitle}
                </div>
              </div>
            </div>

            {/* Product details */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-3">
                {active.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                {active.description}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {active.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check
                      size={14}
                      className="text-primary shrink-0"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contacto"
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
                >
                  Solicitar cotizacion
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary"
                >
                  Mas informacion
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product mini cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(i)}
              className={`group relative rounded-xl border p-5 text-left transition-all duration-300 ${
                activeTab === i
                  ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/5"
                  : "border-border bg-card hover:border-primary/20 hover:bg-card/80"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`inline-flex rounded-lg p-2.5 transition-colors duration-300 ${
                    activeTab === i
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  <product.icon size={20} />
                </div>
                {product.popular && (
                  <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[11px] font-bold text-primary flex items-center gap-1">
                    <Sparkles size={10} />
                    Popular
                  </span>
                )}
              </div>
              <h4 className="text-base font-bold font-mono text-foreground mb-1.5">
                {product.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                {product.description}
              </p>
              <span
                className={`inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary"
                }`}
              >
                Ver detalles
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
