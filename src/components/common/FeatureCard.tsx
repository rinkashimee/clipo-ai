import type { LucideIcon } from 'lucide-react';
import { Typography } from '@/components/ui/Typography';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="icon-container">
        <Icon size={24} />
      </div>

      <Typography
        as="h4"
        variant="h4"
        color="white"
        cursor="default"
        className="feature-card-title"
      >
        {title}
      </Typography>

      <Typography variant="body-md" color="gray-400" cursor="default" className="feature-card-desc">
        {description}
      </Typography>
    </article>
  );
}
