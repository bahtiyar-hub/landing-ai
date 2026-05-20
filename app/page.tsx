export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        DIGISOLVE AI
        </span>
        </h1>

        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-110 transition duration-300 shadow-xl">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
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
          <a
            href="https://wa.me/6285157292962?text=Halo%20saya%20tertarik%20dengan%20DIGISOLVE%20AI"
            target="_blank"
            className="bg-green-500 hover:bg-green-400 hover:scale-110 text-black px-8 py-4 rounded-full font-bold transition duration-300 shadow-2xl"
          >
            WhatsApp
          </a>

          <button className="border border-gray-600 px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-24">

      <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Landing Page
          </h3>

          <p className="text-gray-400">
            Website modern cepat dan responsive untuk bisnis dan iklan.
          </p>
        </div>

        <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Automation
          </h3>

          <p className="text-gray-400">
            WhatsApp, CRM, AI follow up, dan workflow otomatis.
          </p>
        </div>

        <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">
            AI System
          </h3>

          <p className="text-gray-400">
            Build tools modern dengan AI-assisted development.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 DIGISOLVE AI. All rights reserved.
      </footer>

    </main>
  )
}