import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'KSoft | Desarrollo de Software a la Medida',
  description: 'KSoft es una empresa de desarrollo de software especializada en inventarios, agendamiento de citas, paginas web, CRM y facturacion. Soluciones tecnologicas para tu negocio.',
  keywords: ['software', 'desarrollo', 'inventario', 'CRM', 'facturacion', 'KSoft'],
}

export const viewport: Viewport = {
  themeColor: '#14b8a6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
