import { Droplet, Disc, Wrench, Sparkles } from 'lucide-react';

const services = [
  { icon: Droplet, title: 'Oil Change', description: 'Quick, scheduled oil changes to keep your engine running smoothly.' },
  { icon: Disc, title: 'Tyre Replacement', description: 'All sizes stocked, fitted and balanced by certified technicians.' },
  { icon: Wrench, title: 'General Repair', description: 'Full diagnostics and repair for engine, brakes, and more.' },
  { icon: Sparkles, title: 'Detailing', description: 'Interior and exterior detailing to keep your car showroom-ready.' },
];

function ServiceCategories() {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-red-900 to-orange-600 text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 tracking-wide">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/10">
                <Icon size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-slate-200">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceCategories;