import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Ahmed Raza', location: 'Karachi', quote: 'Booked an oil change in two minutes and got a live status update the whole time. No more calling five workshops to compare.', avatar: 'https://picsum.photos/seed/ahmedraza/100/100' },
  { name: 'Sana Malik', location: 'Karachi', quote: 'The pricing was upfront before I even booked. My detailing came out better than I expected for the price.', avatar: 'https://picsum.photos/seed/sanamalik/100/100' },
  { name: 'Bilal Khan', location: 'Karachi', quote: 'Used the roadside assistance when my battery died at night. Technician arrived faster than I thought possible.', avatar: 'https://picsum.photos/seed/bilalkhan/100/100' },
];

function Testimonials() {
  return (
    <section className="bg-neutral-950 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-black uppercase tracking-wide text-white">What Our Customers Say</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black border border-red-900/40 rounded-md p-6"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
              ))}
            </div>
            <p className="text-neutral-300 text-sm mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-neutral-500 text-xs">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;