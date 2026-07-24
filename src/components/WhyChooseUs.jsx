import { motion } from 'motion/react';
import { ShieldCheck, Clock, Wallet, Award } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: 'Certified Technicians', description: 'Every mechanic is trained and certified for quality you can trust.' },
  { icon: Clock, title: 'Fast Turnaround', description: 'Most services completed same-day, tracked live from booking to pickup.' },
  { icon: Wallet, title: 'Transparent Pricing', description: 'No hidden charges — see the exact price before you book.' },
  { icon: Award, title: 'Genuine Parts', description: 'Only manufacturer-approved parts and fluids used on your vehicle.' },
];

function WhyChooseUs() {
  return (
    <section className="bg-black py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-black uppercase tracking-wide text-white">Why Choose AutoNest</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4" />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-md bg-red-950/40 border border-amber-500/30">
                <Icon size={26} className="text-amber-500" />
              </div>
              <h3 className="font-bold text-white uppercase tracking-wide mb-2">{reason.title}</h3>
              <p className="text-sm text-neutral-400">{reason.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;