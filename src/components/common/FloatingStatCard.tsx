import { Typography } from '../ui/Typography';

export function FloatingStatCard() {
  return (
    <div className="floating-stat-card">
      <Typography variant="body-s" color="gray-300" cursor="default">
        Engagement Boost
      </Typography>

      <Typography variant="h3" color="white" cursor="default" className="mt-2">
        +32%
      </Typography>

      <Typography variant="body-es" color="gray-400" cursor="default" className="mt-2">
        Average increase in short-form reach
      </Typography>
    </div>
  );
}
