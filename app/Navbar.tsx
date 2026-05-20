export default function Navbar() {
    return (
      <nav className="w-full flex justify-between items-center px-10 py-6 bg-black border-b border-gray-800">
        
        <h1 className="text-2xl font-bold text-green-400">
          DIGISOLVE AI
        </h1>
  
        <div className="flex gap-6 text-white">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
  
      </nav>
    )
  }