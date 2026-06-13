import { Typography } from '@/components/ui/Typography';

interface DashboardStatCardProps {
  label: string;
  value: string;
}

export function DashboardStatCard({ label, value }: DashboardStatCardProps) {
  return (
    <div className="dashboard-stat-card">
      <Typography variant="body-s" color="gray-400" cursor="default">
        {label}
      </Typography>

      <Typography as="h2" variant="h2" color="white" cursor="default" className="stat-value">
        {value}
      </Typography>
    </div>
  );
}
