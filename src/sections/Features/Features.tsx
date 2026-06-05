import { FeatureCard } from '@/components/common/FeatureCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { FEATURES } from '@/data/features';

export function Features() {
  return (
    <section id="features" className="pt-24">
      <Container>
        <div className="flex flex-col gap-16 p-2.5">
          <SectionHeader
            pilltext="Features"
            title="Everything You Need To Create Viral Clips"
            description="Powerful AI tools designed to help creators turn long videos into high-performing
              short-form content."
          />

          <div className="grid gap-5 pt-14 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
