import { Navbar } from '@/sections/Navbar/Navbar';
import { Hero } from '@/sections/Hero/Hero';
import { Features } from '@/sections/Features/Features';
import { HowItWorks } from '@/sections/HowItWorks/HowItWorks';
import { Pricing } from '@/sections/Pricing/Pricing';
import { Testimonial } from '@/sections/Testimonials/Testimonials';
import { CTA } from '@/sections/CTA/CTA';
import { Footer } from '@/sections/Footer/Footer';
import { ScrollToTop } from '@/components/common/ScrollToTop';

export const App = () => {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <CTA />
      <Footer />

      <ScrollToTop />
    </div>
  );
};
