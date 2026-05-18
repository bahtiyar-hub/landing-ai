import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  IconBath,
  IconBed,
  IconBolt,
  IconBuilding,
  IconCar,
  IconCertificate,
  IconGarden,
  IconLand,
  IconShield,
  IconSmartHome,
  IconWater,
} from "@/components/icons/SpecIcons";
import { whatsappUrl } from "@/lib/whatsapp";
import type { ComponentType } from "react";

type SpecItem = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  detail?: string;
};

const primarySpecs: SpecItem[] = [
  { icon: IconLand, label: "Luas tanah", value: "120 – 350 m²", detail: "Hook & corner tersedia" },
  { icon: IconBuilding, label: "Luas bangunan", value: "150 – 420 m²", detail: "2–3 lantai" },
  { icon: IconBed, label: "Kamar tidur", value: "3 – 5 suite", detail: "Master + family room" },
  { icon: IconBath, label: "Kamar mandi", value: "2 – 4", detail: "Rain shower & bathtub" },
  { icon: IconCar, label: "Carport", value: "2 – 3 mobil", detail: "Akses gerbang otomatis" },
  { icon: IconBolt, label: "Daya listrik", value: "4.400 – 7.700 VA", detail: "Siap AC multi-split" },
];

const premiumSpecs: SpecItem[] = [
  { icon: IconCertificate, label: "Legalitas", value: "SHM / SHGB", detail: "Proses PPJB–AJB jelas" },
  { icon: IconShield, label: "Keamanan", value: "One-gate system", detail: "CCTV 24 jam & patroli" },
  { icon: IconSmartHome, label: "Smart home", value: "Smart lock ready", detail: "IoT lighting & akses digital" },
  { icon: IconGarden, label: "Outdoor", value: "Taman privat", detail: "Rooftop / backyard opsional" },
  { icon: IconWater, label: "Utilitas", value: "PDAM & sumur bor", detail: "Water heater central" },
  {
    icon: IconBuilding,
    label: "Finishing",
    value: "Premium import",
    detail: "Homogenous tile & kitchen set",
  },
];

function SpecCard({ item, delay }: { item: SpecItem; delay: number }) {
  const Icon = item.icon;

  return (
    <Reveal delay={delay}>
      <article className="group luxury-card flex h-full gap-5 p-6 transition duration-500 hover:border-[var(--luxury-gold)]/50 sm:p-7">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--luxury-gold)]/30 bg-[var(--luxury-gold)]/5 text-[var(--luxury-gold)] transition group-hover:border-[var(--luxury-gold)] group-hover:bg-[var(--luxury-gold)]/10">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-500">
            {item.label}
          </p>
          <p className="font-display mt-2 text-xl font-medium text-white sm:text-2xl">
            {item.value}
          </p>
          {item.detail && (
            <p className="mt-2 text-xs leading-relaxed text-stone-500">{item.detail}</p>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function HouseSpecifications() {
  return (
    <section
      id="spesifikasi"
      className="scroll-mt-28 border-t border-[var(--luxury-border)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          label="Spesifikasi"
          title="Standar Hunian Premium"
          description="Setiap unit dirancang dengan spesifikasi teknis transparan — dari dimensi bangunan hingga sistem keamanan dan utilitas modern."
        />

        <div className="mt-16">
          <Reveal delay={50}>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--luxury-gold)]">
              Dimensi &amp; layout
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {primarySpecs.map((item, i) => (
              <SpecCard key={item.label} item={item} delay={i * 60} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Reveal delay={50}>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--luxury-gold)]">
              Fitur &amp; legalitas
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {premiumSpecs.map((item, i) => (
              <SpecCard key={item.label} item={item} delay={i * 60} />
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-[var(--luxury-border)] bg-[var(--luxury-elevated)]/50 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="font-display text-2xl text-white">
                Butuh brosur spesifikasi lengkap?
              </p>
              <p className="mt-2 text-sm text-stone-400">
                Kirim daftar unit favorit Anda — kami kirim PDF detail teknis &amp;
                denah lantai.
              </p>
            </div>
            <a
              href={whatsappUrl(
                "Halo Properti Surabaya, saya ingin brosur spesifikasi lengkap unit yang tersedia.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-outline shrink-0"
            >
              Minta Brosur
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
