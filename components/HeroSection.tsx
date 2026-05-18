import Image from "next/image";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Reveal } from "@/components/Reveal";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85";

export function HeroSection() {
  const whatsappLink = whatsappUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Luxury residence Surabaya"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[var(--luxury-bg)]/85 to-[var(--luxury-bg)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,98,0.12),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 sm:px-10 sm:pb-28 lg:px-12 lg:pb-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--luxury-gold)]">
            Established 2014 · Surabaya
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display mt-6 max-w-4xl text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Redefining{" "}
            <span className="luxury-gold-text italic">Luxury Living</span>
            <br />
            in East Java
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
            Kurasi hunian eksklusif oleh pengembang premium — dari townhouse
            Darmo hingga estate hillside. Setiap detail dirancang untuk generasi
            berikutnya.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-primary"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Konsultasi Privat
            </a>
            <a href="#properti" className="btn-luxury-outline">
              Lihat Koleksi
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <dl className="mt-20 grid grid-cols-2 gap-8 border-t border-[var(--luxury-border)] pt-10 sm:grid-cols-4">
            {[
              { value: "120+", label: "Unit kurasi" },
              { value: "15", label: "Distrik premium" },
              { value: "500+", label: "Klien terpilih" },
              { value: "10", label: "Tahun warisan" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-light text-white sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-[10px] uppercase tracking-[0.25em] text-stone-500">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
