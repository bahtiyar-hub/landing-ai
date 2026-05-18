import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <Reveal>
      <div className={`max-w-3xl ${alignClass}`}>
        <p className="font-display text-xs font-medium uppercase tracking-[0.35em] text-[var(--luxury-gold)]">
          {label}
        </p>
        <div
          className={`mt-4 h-px w-16 bg-gradient-to-r from-[var(--luxury-gold)] to-transparent ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
        <h2 className="font-display mt-6 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-stone-400 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
