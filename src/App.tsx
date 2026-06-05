import { Navbar } from '@/sections/Navbar/Navbar';
import { Hero } from '@/sections/Hero/Hero';
import { Features } from '@/sections/Features/Features';
import { HowItWorks } from '@/sections/HowItWorks/HowItWorks';

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
    </>
  );
};
