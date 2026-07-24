import Counter from './Counter';

const stats = [
  { value: 500, suffix: '+', label: 'Cars Serviced' },
  { value: 15, suffix: '+', label: 'Certified Technicians' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

function StatsSection() {
  return (
    <section className="bg-neutral-950 border-y border-red-900/40 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl md:text-5xl font-black text-amber-500 mb-2">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-neutral-400 text-sm uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;