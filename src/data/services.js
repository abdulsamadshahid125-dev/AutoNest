const categoryImages = {
  'Oil Change': 'https://placehold.co/400x250/1e293b/ffffff?text=Oil+Change',
  'Tyre Replacement': 'https://placehold.co/400x250/1e293b/ffffff?text=Tyre+Service',
  'General Repair': 'https://placehold.co/400x250/1e293b/ffffff?text=General+Repair',
  'Detailing': 'https://placehold.co/400x250/1e293b/ffffff?text=Detailing',
  'Roadside Assistance': 'https://placehold.co/400x250/1e293b/ffffff?text=Roadside+Assistance',
};

const rawServices = [
  { id: 1, category: 'Oil Change', name: 'Conventional Oil Change', duration: '30 min', price: 2500, description: 'Basic mineral oil + filter replacement' },
  { id: 2, category: 'Oil Change', name: 'Synthetic Oil Change', duration: '30 min', price: 5000, description: 'Full synthetic oil for better engine protection' },
  { id: 3, category: 'Oil Change', name: 'Oil Filter Replacement', duration: '15 min', price: 800, description: 'Standalone filter swap' },
  { id: 4, category: 'Oil Change', name: 'Multi-Point Inspection', duration: '45 min', price: 1500, description: '20-point vehicle health check' },
  { id: 5, category: 'Tyre Replacement', name: 'Tyre Replacement (per tyre)', duration: '20 min', price: 15000, description: 'Avg. for a Corolla/City/Civic-segment tyre, incl. fitting' },
  { id: 6, category: 'Tyre Replacement', name: 'Wheel Alignment', duration: '40 min', price: 1200, description: 'Corrects steering and tyre wear angle' },
  { id: 7, category: 'Tyre Replacement', name: 'Tyre Rotation', duration: '20 min', price: 600, description: 'Evens out tyre wear' },
  { id: 8, category: 'Tyre Replacement', name: 'Puncture Repair', duration: '15 min', price: 300, description: 'Quick patch for minor punctures' },
  { id: 9, category: 'General Repair', name: 'Brake Inspection & Pad Replacement', duration: '1 hr', price: 3500, description: 'Full brake check + pad swap' },
  { id: 10, category: 'General Repair', name: 'Battery Replacement', duration: '20 min', price: 6000, description: 'New battery install + old disposal' },
  { id: 11, category: 'General Repair', name: 'Engine Diagnostics', duration: '1 hr', price: 2000, description: 'Computer scan for fault codes' },
  { id: 12, category: 'General Repair', name: 'AC Repair & Recharge', duration: '1.5 hr', price: 3000, description: 'Gas refill + cooling system check' },
  { id: 13, category: 'General Repair', name: 'Suspension Repair', duration: '2 hr', price: 8000, description: 'Shocks/struts inspection and repair' },
  { id: 14, category: 'General Repair', name: 'Denting & Painting (per panel)', duration: '2-3 hr', price: 4500, description: 'Dent removal + repaint for one panel (door/bumper/fender)' },
  { id: 15, category: 'General Repair', name: 'Full Vehicle Inspection', duration: '1 hr', price: 5000, description: '200+ point check - engine, body, paint depth, suspension' },
  { id: 16, category: 'Detailing', name: 'Exterior Wash & Wax', duration: '45 min', price: 1500, description: 'Hand wash + protective wax coat' },
  { id: 17, category: 'Detailing', name: 'Interior Deep Cleaning', duration: '1 hr', price: 2500, description: 'Vacuum, upholstery shampoo, dashboard polish' },
  { id: 18, category: 'Detailing', name: 'Full Detailing', duration: '3 hr', price: 6000, description: 'Complete interior + exterior package' },
  { id: 19, category: 'Detailing', name: 'Ceramic Coating', duration: '4 hr', price: 25000, description: 'Long-lasting paint protection layer' },
  { id: 20, category: 'Roadside Assistance', name: 'Emergency Towing', duration: 'Response-based', price: 5000, description: 'Tow to nearest workshop or home, city-wide' },
  { id: 21, category: 'Roadside Assistance', name: 'Battery Jump-Start (On-site)', duration: '20 min', price: 1500, description: 'On-location battery boost, no towing needed' },
  { id: 22, category: 'Roadside Assistance', name: 'Fuel Delivery', duration: '30 min', price: 1000, description: 'Emergency fuel drop (fuel cost extra)' },
  { id: 23, category: 'Roadside Assistance', name: 'On-Site Puncture/Spare Change', duration: '20 min', price: 1000, description: 'Spare tyre fitting at breakdown location' },
];

export const services = rawServices.map((service) => ({
  ...service,
  image: categoryImages[service.category],
}));

export const categories = ['All', 'Oil Change', 'Tyre Replacement', 'General Repair', 'Detailing', 'Roadside Assistance'];