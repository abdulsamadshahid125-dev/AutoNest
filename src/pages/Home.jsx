import Hero from '../components/Hero';
import ServiceCategories from '../components/ServiceCategories';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

function Home() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default Home;