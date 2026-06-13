import type { LucideIcon } from 'lucide-react';

import { Typography } from '@/components/ui/Typography';

interface HowItWorksCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function HowItWorksCard({ icon: Icon, title, description }: HowItWorksCardProps) {
  return (
    <article className="how-card">
      <div className="icon-container">
        <Icon size={24} />
      </div>

      <Typography as="h4" variant="h4" color="white" cursor="default" className="works-card-title">
        {title}
      </Typography>

      <Typography variant="body-md" color="gray-400" cursor="default" className="works-card-desc">
        {description}
      </Typography>
    </article>
  );
}
