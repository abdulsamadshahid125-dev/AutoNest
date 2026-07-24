import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative bg-black text-white pt-32 pb-24 px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://picsum.photos/seed/autonest-hero/1600/900')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/85 to-black" />
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-wide mb-6 max-w-3xl mx-auto leading-tight"
        >
          Your Complete <span className="text-red-600">Car Care</span> Platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-neutral-300 mb-10 max-w-xl mx-auto"
        >
          Book, track, and manage every car service — oil changes, tyres, repairs, and detailing — from one dashboard.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wide px-8 py-3 rounded-md border border-amber-500/40 transition-colors"
        >
          Explore Services
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;