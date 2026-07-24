import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const MotionLink = motion(Link);

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-red-900/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-white font-black text-xl uppercase tracking-wider">
          Auto<span className="text-red-600">Nest</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-white text-sm font-semibold uppercase tracking-wide">
          <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
          <Link to="/services" className="hover:text-amber-500 transition-colors">Services</Link>
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
        </div>
        <MotionLink
          to="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wide px-5 py-2 rounded-md border border-amber-500/40 transition-colors"
        >
          Book Now
        </MotionLink>
      </div>
    </nav>
  );
}

export default Navbar;