import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { HeroSection } from "@/components/HeroSection";
import { InstallmentSimulator } from "@/components/InstallmentSimulator";
import { LocationAdvantages } from "@/components/LocationAdvantages";
import { Navbar } from "@/components/Navbar";
import { HouseSpecifications } from "@/components/HouseSpecifications";
import { PropertyGallery } from "@/components/PropertyGallery";
import { Testimonials } from "@/components/Testimonials";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/whatsapp";

export default function Home() {
  return (
    <>
      <div className="luxury-grain relative min-h-screen bg-[var(--luxury-bg)] text-stone-100">
        <Navbar />
        <main>
          <HeroSection />
          <LocationAdvantages />
          <PropertyGallery />
          <HouseSpecifications />
          <InstallmentSimulator />
          <Testimonials />

          <footer className="border-t border-[var(--luxury-border)] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-12">
              <p className="font-display text-3xl font-light text-white sm:text-4xl">
                Mulai Perjalanan Hunian Eksklusif
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm text-stone-500">
                Jadwalkan konsultasi privat dengan relationship manager kami.
              </p>
              <a
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary mt-10"
              >
                Hubungi Properti Surabaya
              </a>
              <p className="mt-16 text-[10px] uppercase tracking-[0.3em] text-stone-600">
                © {new Date().getFullYear()} Properti Surabaya
              </p>
            </div>
          </footer>
        </main>
      </div>
      <FloatingWhatsApp />
    </>
  );
}
