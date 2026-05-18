"use client";

import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="animate-float group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--luxury-gold)] bg-[#25D366] text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition hover:scale-105 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full border border-[var(--luxury-gold)] opacity-60 animate-pulse-ring" />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-full mr-4 hidden whitespace-nowrap border border-[var(--luxury-border)] bg-[var(--luxury-elevated)] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[var(--luxury-gold-light)] opacity-0 shadow-xl transition group-hover:opacity-100 lg:block">
        WhatsApp
      </span>
    </a>
  );
}
