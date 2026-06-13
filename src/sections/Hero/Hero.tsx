import { Container } from '@/components/ui/Container';
import { HeroContent } from './HeroContent';
import { DashboardPreview } from '@/components/common/DashboardPreview';

export function Hero() {
  return (
    <section id="hero" className="pt-24">
      <Container>
        <div className="hero-layout">
          <HeroContent />
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
