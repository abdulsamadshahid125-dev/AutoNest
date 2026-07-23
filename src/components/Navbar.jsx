function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white font-bold text-xl tracking-wide">AutoNest</span>
        <div className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;