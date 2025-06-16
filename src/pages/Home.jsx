import HeroSection from '../components/home/HeroSection.jsx';
import FeaturesGrid from '../components/home/FeaturesGrid.jsx';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel.jsx';
import CallToAction from '../components/home/CallToAction.jsx';

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <TestimonialsCarousel />
      <CallToAction />
    </>
  );
}

export default Home;
