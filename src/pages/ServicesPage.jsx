import { useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { services, categories } from '../data/services';

function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-black min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-black uppercase tracking-wide text-white text-center mb-2"
        >
          Our Services
        </motion.h1>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-4" />
        <p className="text-neutral-400 text-center mb-8">
          Browse and book from {services.length} services across 5 categories
        </p>

        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-md border border-red-900/40 bg-neutral-900 text-white font-semibold placeholder:text-neutral-500 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors ${
                selectedCategory === category
                  ? 'bg-red-600 text-white border border-amber-500/50'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-red-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {filteredServices.length === 0 ? (
          <p className="text-center text-neutral-400">No services match your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-neutral-900 border border-red-900/40 rounded-md overflow-hidden hover:border-amber-500/50 transition-colors"
              >
                <img src={service.image} alt={service.name} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <span className="inline-block text-xs font-bold uppercase tracking-wide text-amber-500 bg-red-950/40 border border-amber-500/30 px-3 py-1 rounded-md mb-3">
                    {service.category}
                  </span>
                  <h3 className="font-bold text-lg text-white mb-1">{service.name}</h3>
                  <p className="text-sm text-neutral-400 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">{service.duration}</span>
                    <span className="text-lg font-black text-amber-500">Rs. {service.price.toLocaleString()}</span>
                  </div>
                  <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wide py-2.5 rounded-md transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesPage;