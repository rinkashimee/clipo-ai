import { Typography } from '../ui/Typography';
import { DashboardStatCard } from './DashboardStatCard';
import { GeneratedClipCard } from './GeneratedClipCard';

export function DashboardPreview() {
  return (
    <div className="flex justify-end">
      <div className="hero-dashboard">
        <div className="flex items-center justify-between p-2.5">
          <Typography as="h4" variant="h4" color="white" cursor="default">
            Dashboard
          </Typography>

          <div className="ai-active-pill">
            <Typography variant="body-s" color="primary" cursor="default">
              AI Active
            </Typography>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 p-2.5">
          <DashboardStatCard label="Generated Clips" value="248" />
          <DashboardStatCard label="Engagement Rate" value="+42%" />
        </div>

        <GeneratedClipCard />
      </div>
    </div>
  );
}
