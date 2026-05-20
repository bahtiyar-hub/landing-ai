import ServiceCard from "./ServiceCard"

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="grid md:grid-cols-3 gap-6 px-8 pb-24"
    >

      <ServiceCard
        title="Landing Page"
        description="Website modern cepat dan responsive untuk bisnis dan iklan."
      />

      <ServiceCard
        title="Automation"
        description="WhatsApp, CRM, AI follow up, dan workflow otomatis."
      />

      <ServiceCard
        title="AI System"
        description="Build tools modern dengan AI-assisted development."
      />

    </section>
  )
}