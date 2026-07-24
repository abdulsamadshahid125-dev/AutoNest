import { motion } from 'motion/react';
import { Droplet, Disc, Wrench, Sparkles } from 'lucide-react';

const services = [
  { icon: Droplet, title: 'Oil Change', description: 'Quick, scheduled oil changes to keep your engine running smoothly.' },
  { icon: Disc, title: 'Tyre Replacement', description: 'All sizes stocked, fitted and balanced by certified technicians.' },
  { icon: Wrench, title: 'General Repair', description: 'Full diagnostics and repair for engine, brakes, and more.' },
  { icon: Sparkles, title: 'Detailing', description: 'Interior and exterior detailing to keep your car showroom-ready.' },
];

function ServiceCategories() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-black uppercase tracking-wide">Our Services</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4" />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-neutral-900 border border-red-900/40 rounded-md p-6 text-center hover:border-amber-500/50 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-md bg-red-950/40 border border-amber-500/30">
                <Icon size={24} className="text-amber-500" />
              </div>
              <h3 className="font-bold text-lg uppercase tracking-wide mb-2">{service.title}</h3>
              <p className="text-sm text-neutral-400">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceCategories;