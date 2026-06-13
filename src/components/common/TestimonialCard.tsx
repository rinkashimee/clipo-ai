import { Star } from 'lucide-react';

import { Typography } from '@/components/ui/Typography';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export function TestimonialCard({ name, role, quote, avatar }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-stars" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={24} />
        ))}
      </div>

      <Typography variant="body-md" color="white" cursor="default" className="qoute">
        {quote}
      </Typography>

      <div className="testimonial-author">
        <img src={avatar} alt={name} className="testimonial-avatar" />

        <div>
          <Typography variant="body-md" color="white" className="profile">
            {name}
          </Typography>

          <Typography variant="body-s" color="gray-400" className="position">
            {role}
          </Typography>
        </div>
      </div>
    </article>
  );
}
