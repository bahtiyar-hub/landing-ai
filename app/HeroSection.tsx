import Button from "./Button"

export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">

      <p className="text-green-400 mb-4 uppercase tracking-widest">
        AI Builder Era
      </p>

      <h2 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        Build Modern Business
        <br />
        Faster With AI
      </h2>

      <p className="text-gray-400 mt-6 max-w-2xl text-lg">
        Website, automation, landing page, AI tools,
        dan sistem digital modern untuk bisnis masa kini.
      </p>

      <div className="flex gap-4 mt-10">
        <Button
          text="WhatsApp"
          link="https://wa.me/6285157292962?text=Halo%20saya%20tertarik%20dengan%20DIGISOLVE%20AI"
        />

        <Button
          text="Learn More"
          link="#services"
        />
      </div>

    </section>
  )
}