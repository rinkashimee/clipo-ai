import { PricingCard } from '@/components/common/PricingCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Container } from '@/components/ui/Container';
import { PRICING_PLANS } from '@/data/pricing';

export function Pricing() {
  return (
    <section id="pricing" className="pt-24">
      <Container>
        <div className="flex flex-col gap-16 p-2.5">
          <SectionHeader
            pilltext="Pricing"
            title="Simple Plans For Every Creator"
            description="Choose the perfect plan for your content workflow and start creating viral clips faster with Clipo AI."
          />

          <div className="pricing-grid">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
