"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#lokasi", label: "Lokasi" },
  { href: "#properti", label: "Properti" },
  { href: "#spesifikasi", label: "Spesifikasi" },
  { href: "#simulasi", label: "Simulasi" },
  { href: "#testimoni", label: "Testimoni" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--luxury-border)] bg-[var(--luxury-bg)]/90 py-3 backdrop-blur-xl"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-xl font-medium tracking-wide text-white sm:text-2xl">
            Properti
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--luxury-gold)]">
            Surabaya
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400 transition hover:text-[var(--luxury-gold-light)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#properti"
          className="hidden rounded-none border border-[var(--luxury-gold)]/60 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--luxury-gold-light)] transition hover:bg-[var(--luxury-gold)] hover:text-[var(--luxury-bg)] sm:inline-block"
        >
          Jelajahi
        </a>
      </nav>
    </header>
  );
}
