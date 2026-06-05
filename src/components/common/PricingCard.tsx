import { Check } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  cta: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  cta,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <article className={highlighted ? 'pricing-card pricing-card-highlighted' : 'pricing-card'}>
      <div className="flex items-center justify-between">
        <Typography as="h4" variant="h4" color="white">
          {name}
        </Typography>

        {highlighted && (
          <div className="title-pill">
            <Typography variant="body-es-fw-md" color="primary" cursor="default">
              Most Popular
            </Typography>
          </div>
        )}
      </div>

      <div className="pricing-price">
        <Typography as="h1" variant="h1" color="white" cursor="default">
          {price}
        </Typography>

        <Typography variant="body-s" color="gray-400" cursor="default">
          /month
        </Typography>
      </div>

      <Typography variant="body-md" color="gray-300" cursor="default">
        {description}
      </Typography>

      <Button variant="secondary" className="w-full">
        {cta}
      </Button>

      <div className="pricing-divider" />

      <ul className="pricing-features">
        {features.map((feature) => (
          <li key={feature} className="pricing-feature">
            <Check size={24} />
            <Typography variant="body-md" color="gray-300" cursor="default">
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
    </article>
  );
}
