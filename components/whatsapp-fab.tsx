"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppFab() {
  return (
    <Link
      href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20software%20de%20KSoft"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-[#f0fdf4]" />
    </Link>
  )
}
