"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappNumber = "573162851135"
  const whatsappMessage = encodeURIComponent(
    "Hola KSoft! Me gustaria recibir informacion sobre sus servicios de desarrollo de software."
  )

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000)
      return () => clearTimeout(tooltipTimer)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative animate-fade-up bg-card border border-border rounded-xl p-4 shadow-xl max-w-[260px]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            aria-label="Cerrar"
          >
            <X size={14} />
          </button>
          <p className="text-sm text-foreground font-medium mb-1">
            Necesitas ayuda?
          </p>
          <p className="text-xs text-muted-foreground">
            Escribenos por WhatsApp y te respondemos al instante.
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 animate-fade-up"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  )
}
