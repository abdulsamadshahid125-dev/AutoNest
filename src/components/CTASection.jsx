import { motion } from 'motion/react';

function CTASection() {
  return (
    <section className="bg-red-800 text-white py-20 px-6 text-center border-t border-b border-amber-500/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-4">
          Ready to Book Your Service?
        </h2>
        <p className="text-red-100 mb-8 max-w-xl mx-auto">
          Join AutoNest today and manage every car service from one simple dashboard.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-black hover:bg-neutral-900 text-white font-bold uppercase tracking-wide px-8 py-3 rounded-md border border-amber-500/50 transition-colors"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}

export default CTASection;