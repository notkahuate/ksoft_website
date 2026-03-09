import Image from "next/image"

const footerLinks = {
  productos: [
    { label: "Sistema de Inventario", href: "#productos" },
    { label: "Agendamiento de Citas", href: "#productos" },
    { label: "Paginas Web", href: "#productos" },
    { label: "Software + CRM", href: "#productos" },
    { label: "Facturacion", href: "#productos" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Proceso", href: "#proceso" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/ksoft-logo.png"
                alt="KSoft Logo"
                width={36}
                height={36}
                className="mix-blend-screen drop-shadow-[0_0_8px_oklch(0.75_0.15_195_/_0.3)]"
              />
              <span className="text-lg font-bold font-mono text-foreground">
                KSoft
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
              Empresa de desarrollo de software especializada en crear
              soluciones digitales a la medida. Transformamos tus ideas en
              software funcional y escalable.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5731622851135"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label="WhatsApp"
              >
                
              </a>
              <a
                href="mailto:sales@ksoftcol.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Email"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold font-mono text-foreground mb-4">
              Productos
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold font-mono text-foreground mb-4">
              Empresa
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} KSoft. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Hecho con dedicacion en Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
