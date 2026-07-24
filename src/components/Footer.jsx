function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-10 px-6 border-t border-red-900/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white font-black uppercase tracking-wider text-lg">
          Auto<span className="text-red-600">Nest</span>
        </span>
        <div className="flex gap-6 text-sm uppercase tracking-wide">
          <a href="#home" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
        </div>
        <span className="text-sm">&copy; 2026 AutoNest. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;