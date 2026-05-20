import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import ServicesSection from "./ServiceSection"
import AboutSection from "./AboutSection"
import Footer from "./Footer"
export default function Home() {    
  return (
    <>
{/* Navbar */}
    <Navbar />
    <main className="min-h-screen bg-black text-white overflow-hidden">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
     
      {/* Hero Section */}
      <HeroSection />
      <ServicesSection />
      {/* About Section */}
      <AboutSection />
      {/* Footer */}
      <Footer />
    </main>
    </>     
  )
}