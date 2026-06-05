import { HowItWorksArrow } from '@/components/common/HowItWorksArrow';
import { HowItWorksCard } from '@/components/common/HowItWorksCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { HOW_IT_WORKS_STEPS } from '@/data/howItWorks';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-24">
      <Container>
        <div className="flex flex-col gap-16 p-2.5">
          <SectionHeader
            pilltext="How It Works"
            title="Create Viral Clips In Three Simple Steps"
            description="Clipo AI automates the entire short-form workflow so you can focus on creating content
              instead of editing."
          />

          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-5 lg:pt-14">
            <HowItWorksCard {...HOW_IT_WORKS_STEPS[0]} />
            <HowItWorksArrow />
            <HowItWorksCard {...HOW_IT_WORKS_STEPS[1]} />
            <HowItWorksArrow />
            <HowItWorksCard {...HOW_IT_WORKS_STEPS[2]} />
          </div>

          <div className="grid gap-5 pt-14 lg:hidden">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <HowItWorksCard key={step.title} {...step} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
