import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const advantages = [
  {
    num: "01",
    title: "Akses Tol & Bandara",
    description:
      "Konektivitas premium menuju Juanda, pelabuhan, dan koridor bisnis metropolitan.",
  },
  {
    num: "02",
    title: "Kawasan Pendidikan",
    description:
      "Lingkungan elite dengan institusi pendidikan internasional dan komunitas keluarga.",
  },
  {
    num: "03",
    title: "Lifestyle District",
    description:
      "Berdekatan flagship retail, fine dining, dan private club di West Surabaya.",
  },
  {
    num: "04",
    title: "Infrastruktur Masa Depan",
    description:
      "Proyek transportasi baru meningkatkan aksesibilitas dan nilai aset jangka panjang.",
  },
  {
    num: "05",
    title: "Growth Corridor",
    description:
      "Kawasan berkembang dengan permintaan hunian dan sewa kelas atas yang stabil.",
  },
  {
    num: "06",
    title: "Capital Appreciation",
    description:
      "Potensi apresiasi kuat untuk landed estate maupun branded residence.",
  },
];

export function LocationAdvantages() {
  return (
    <section id="lokasi" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          label="Keunggulan Lokasi"
          title="Alamat yang Mendefinisikan Status"
          description="Setiap proyek diposisikan di node strategis dengan ekosistem hidup yang matang dan reputasi kawasan yang teruji."
        />

        <div className="mt-16 grid gap-px bg-[var(--luxury-border)] sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <Reveal key={item.num} delay={i * 70}>
              <article className="group luxury-card flex h-full flex-col p-8 transition duration-500 hover:bg-[var(--luxury-elevated)] sm:p-10">
                <span className="font-display text-4xl font-light text-[var(--luxury-gold)]/40 transition group-hover:text-[var(--luxury-gold)]">
                  {item.num}
                </span>
                <h3 className="font-display mt-6 text-2xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400">
                  {item.description}
                </p>
                <div className="mt-8 h-px w-0 bg-[var(--luxury-gold)] transition-all duration-500 group-hover:w-12" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
