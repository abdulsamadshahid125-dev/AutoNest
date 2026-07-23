function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white font-bold text-lg">AutoNest</span>
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <span className="text-sm">&copy; 2026 AutoNest. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;