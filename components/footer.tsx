import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">K</span>
              </div>
              <span className="font-display text-xl font-bold text-card">KSoft</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-card/60">
              Desarrollo de software a la medida para empresas que quieren crecer con tecnologia.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-card">Soluciones</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                "Software de Inventario",
                "Agendamiento de Citas",
                "Paginas Web",
                "CRM Integrado",
                "Facturacion",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#soluciones"
                    className="text-sm text-card/60 transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-card">Empresa</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Soluciones", href: "#soluciones" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-card/60 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-card">Contacto</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-card/60 transition-colors hover:text-primary"
                >
                  WhatsApp: +57 300 123 4567
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contacto@ksoft.com"
                  className="text-sm text-card/60 transition-colors hover:text-primary"
                >
                  contacto@ksoft.com
                </Link>
              </li>
              <li>
                <span className="text-sm text-card/60">
                  Colombia - Servicio a toda Latinoamerica
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-card/10 pt-8 text-center">
          <p className="text-sm text-card/40">
            &copy; {new Date().getFullYear()} KSoft. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
