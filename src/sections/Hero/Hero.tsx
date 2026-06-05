import { Container } from '@/components/ui/Container';
import { HeroContent } from './HeroContent';
import { DashboardPreview } from '@/components/common/DashboardPreview';

export function Hero() {
  return (
    <section id="hero" className="pt-24">
      <Container>
        <div className="grid items-center gap-16 p-2.5 lg:grid-cols-2">
          <HeroContent />
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
