import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="bg-slate-900 text-white pt-32 pb-24 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
        Your Complete Car Care Platform
      </h1>
      <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
        Book, track, and manage every car service — oil changes, tyres, repairs, and detailing — from one dashboard.
      </p>
      <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
        Explore Services
        <ArrowRight size={18} />
      </button>
    </section>
  );
}

export default Hero;