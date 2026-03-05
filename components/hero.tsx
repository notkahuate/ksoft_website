import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="flex max-w-3xl flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Desarrollo de software a la medida</span>
          </div>

          <h1 className="font-display text-balance text-4xl font-bold leading-tight tracking-tight text-card md:text-6xl lg:text-7xl">
            Transformamos tu negocio con tecnologia
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-card/70 md:text-xl">
            En KSoft desarrollamos soluciones de software personalizadas que impulsan la productividad y el crecimiento de tu empresa. Desde inventarios hasta facturacion.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#soluciones">
                Ver soluciones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-card/20 bg-transparent text-card hover:bg-card/10 hover:text-card"
            >
              <Link
                href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20software%20de%20KSoft"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-8 border-t border-card/10 pt-8">
            <div>
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">50+</p>
              <p className="mt-1 text-sm text-card/60">Proyectos entregados</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">98%</p>
              <p className="mt-1 text-sm text-card/60">Clientes satisfechos</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">5+</p>
              <p className="mt-1 text-sm text-card/60">Anos de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
