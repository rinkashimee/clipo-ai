import { Navbar } from '@/sections/Navbar/Navbar';
import { Hero } from '@/sections/Hero/Hero';
import { Features } from '@/sections/Features/Features';
import { HowItWorks } from '@/sections/HowItWorks/HowItWorks';
import { Pricing } from './sections/Pricing/Pricing';
import { Testimonial } from './sections/Testimonials/Testimonials';
import { CTA } from './sections/CTA/CTA';

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <CTA />
    </>
  );
};
