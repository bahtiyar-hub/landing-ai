import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { whatsappUrl } from "@/lib/whatsapp";

const properties = [
  {
    title: "The Darmo Estate",
    location: "Darmo, Surabaya",
    price: "Rp 2,4 M",
    specs: "4 Suite · 380 m²",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
  },
  {
    title: "Citraland Grand Villa",
    location: "Citraland, Surabaya",
    price: "Rp 3,8 M",
    specs: "5 Suite · 520 m²",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
  },
  {
    title: "Pakuwon Private Residence",
    location: "Pakuwon, Surabaya",
    price: "Rp 1,9 M",
    specs: "3 Suite · 240 m²",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85",
  },
  {
    title: "East Coast Pavilion",
    location: "Rungkut, Surabaya",
    price: "Rp 1,5 M",
    specs: "3 Suite · 210 m²",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85",
  },
  {
    title: "West Surabaya Minimal",
    location: "Benowo, Surabaya",
    price: "Rp 1,2 M",
    specs: "2 Suite · 165 m²",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85",
  },
  {
    title: "Graha Famili Hillcrest",
    location: "Graha Famili, Surabaya",
    price: "Rp 4,5 M",
    specs: "5 Suite · 650 m²",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85",
  },
];

export function PropertyGallery() {
  return (
    <section
      id="properti"
      className="scroll-mt-28 border-t border-[var(--luxury-border)] bg-[var(--luxury-surface)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          label="Koleksi Properti"
          title="Residences of Distinction"
          description="Setiap unit dipresentasikan dengan standar galeri — arsitektur, finishing, dan lokasi yang tak perlu banyak dijelaskan."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 border border-[var(--luxury-gold)]/50 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--luxury-gold-light)] backdrop-blur-sm">
                    Available
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-display text-2xl text-[var(--luxury-gold-light)]">
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="mt-5 border-b border-[var(--luxury-border)] pb-5">
                  <h3 className="font-display text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">
                    {item.location}
                  </p>
                  <p className="mt-2 text-sm text-stone-400">{item.specs}</p>
                  <a
                    href={whatsappUrl(
                      `Halo, saya tertarik dengan ${item.title} di ${item.location}. Mohon jadwalkan private viewing.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-xs font-medium uppercase tracking-[0.2em] text-[var(--luxury-gold)] transition hover:text-[var(--luxury-gold-light)]"
                  >
                    Request Viewing →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
