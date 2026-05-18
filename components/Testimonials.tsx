import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Rina Wijaya",
    role: "Pemilik · The Darmo Estate",
    quote:
      "Pengalaman membeli seperti di boutique hotel — personal, tenang, dan setiap pertanyaan dijawab dengan data yang jelas.",
    initials: "RW",
  },
  {
    name: "Budi Santoso",
    role: "Investor · Citraland Grand Villa",
    quote:
      "Portofolio properti saya bertambah dua unit dalam setahun. Tim Properti Surabaya memahami profil investor, bukan sekadar sales.",
    initials: "BS",
  },
  {
    name: "Dewi Anggraini",
    role: "Residen · Pakuwon Private",
    quote:
      "Simulasi KPR membantu kami merencanakan dengan percaya diri. Rumah impian keluarga akhirnya terwujud tanpa kompromi besar.",
    initials: "DA",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="scroll-mt-28 border-t border-[var(--luxury-border)] bg-[var(--luxury-surface)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          label="Testimoni"
          title="Dipercaya oleh Pemilik Terpilih"
          description="Kata mereka yang telah menempatkan kepercayaan pada standar pengembangan kami."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <blockquote className="luxury-card flex h-full flex-col p-8 sm:p-10">
                <span className="font-display text-5xl leading-none text-[var(--luxury-gold)]/30">
                  &ldquo;
                </span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-300">
                  {item.quote}
                </p>
                <footer className="mt-8 flex items-center gap-4 border-t border-[var(--luxury-border)] pt-8">
                  <div className="flex h-12 w-12 items-center justify-center border border-[var(--luxury-gold)]/40 font-display text-lg text-[var(--luxury-gold)]">
                    {item.initials}
                  </div>
                  <div>
                    <cite className="not-italic font-medium text-white">
                      {item.name}
                    </cite>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-stone-500">
                      {item.role}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
