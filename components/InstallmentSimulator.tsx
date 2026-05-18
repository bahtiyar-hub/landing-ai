"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { whatsappUrl } from "@/lib/whatsapp";

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateInstallment(
  price: number,
  downPaymentPercent: number,
  annualRate: number,
  years: number,
) {
  const principal = price * (1 - downPaymentPercent / 100);
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;

  if (principal <= 0) {
    return { monthly: 0, total: 0, interest: 0, principal: 0 };
  }

  if (monthlyRate === 0) {
    const monthly = principal / months;
    return {
      monthly,
      total: monthly * months,
      interest: 0,
      principal,
    };
  }

  const factor = Math.pow(1 + monthlyRate, months);
  const monthly = (principal * monthlyRate * factor) / (factor - 1);
  const total = monthly * months;

  return {
    monthly,
    total,
    interest: total - principal,
    principal,
  };
}

export function InstallmentSimulator() {
  const [price, setPrice] = useState(1_500_000_000);
  const [downPayment, setDownPayment] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(15);

  const result = useMemo(
    () => calculateInstallment(price, downPayment, rate, years),
    [price, downPayment, rate, years],
  );

  const waMessage = `Halo Properti Surabaya, saya ingin simulasi KPR ${formatRupiah(price)}, DP ${downPayment}%, tenor ${years} tahun. Estimasi ${formatRupiah(result.monthly)}/bulan.`;

  return (
    <section
      id="simulasi"
      className="scroll-mt-28 border-t border-[var(--luxury-border)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          label="Private Financing"
          title="Simulasi Cicilan Eksklusif"
          description="Perencanaan finansial yang transparan — bekerja sama dengan mitra perbankan terpilih untuk program KPR premium."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={100}>
            <div className="luxury-card space-y-10 p-8 sm:p-10">
              <SliderField
                label="Nilai properti"
                value={price}
                min={500_000_000}
                max={5_000_000_000}
                step={50_000_000}
                display={formatRupiah(price)}
                onChange={setPrice}
              />
              <SliderField
                label="Uang muka"
                value={downPayment}
                min={10}
                max={50}
                step={5}
                display={`${downPayment}% · ${formatRupiah(price * (downPayment / 100))}`}
                onChange={setDownPayment}
              />
              <SliderField
                label="Suku bunga"
                value={rate}
                min={3}
                max={12}
                step={0.25}
                display={`${rate}% p.a.`}
                onChange={setRate}
              />
              <SliderField
                label="Tenor"
                value={years}
                min={5}
                max={25}
                step={1}
                display={`${years} tahun`}
                onChange={setYears}
              />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="luxury-card flex h-full flex-col justify-between border-[var(--luxury-gold)]/30 p-8 sm:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--luxury-gold)]">
                  Estimasi bulanan
                </p>
                <p className="font-display mt-4 text-5xl font-light text-white sm:text-6xl">
                  {formatRupiah(result.monthly)}
                </p>
                <p className="mt-2 text-sm text-stone-500">per bulan · indikatif</p>

                <dl className="mt-10 space-y-5 border-t border-[var(--luxury-border)] pt-10">
                  <Row label="Pokok pinjaman" value={formatRupiah(result.principal)} />
                  <Row label="Total bunga" value={formatRupiah(result.interest)} />
                  <Row
                    label="Total pembayaran"
                    value={formatRupiah(result.total)}
                    highlight
                  />
                </dl>
              </div>
              <a
                href={whatsappUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary mt-10 w-full text-center"
              >
                Konsultasi KPR Privat
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <dt className="text-stone-500">{label}</dt>
      <dd
        className={
          highlight
            ? "font-medium text-[var(--luxury-gold-light)]"
            : "text-white"
        }
      >
        {value}
      </dd>
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
        <label className="text-xs uppercase tracking-[0.2em] text-stone-400">
          {label}
        </label>
        <span className="font-display text-lg text-[var(--luxury-gold-light)]">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-px w-full cursor-pointer appearance-none bg-stone-700"
      />
    </div>
  );
}
