import { Typography } from '../ui/Typography';
import thumbnailPreview from '@/assets/images/thumbnail-preview.png';
import { FloatingStatCard } from './FloatingStatCard';

export function GeneratedClipCard() {
  return (
    <div className="generated-clip-card">
      <div className="generated-clip-thumbnail-wrapper">
        <img
          src={thumbnailPreview}
          alt="Generated clip preview"
          className="generated-clip-thumbnail"
        />

        <div className="generated-clip-overlay" />
      </div>

      <div className="generated-clip-content">
        <div className="flex items-center gap-3 px-4.5">
          <div className="tag-primary">
            <Typography variant="body-es" color="primary" cursor="default">
              AI Generated
            </Typography>
          </div>

          <div className="tag-secondary">
            <Typography variant="body-es" color="cyan" cursor="default">
              Ready to Export
            </Typography>
          </div>
        </div>

        <Typography as="h5" variant="h5" color="white" cursor="default" className="mt-2">
          Top 5 Podcast Moments
        </Typography>

        <Typography variant="body-es" color="gray-400" cursor="default" className="mt-2">
          Automatically trimmed, captioned, and optimized for TikTok, Reels, and YouTube Shorts.
        </Typography>

        <div className="mt-2 gap-1">
          <div className="flex items-center justify-between">
            <Typography variant="body-es" color="gray-300" cursor="default">
              AI Processing
            </Typography>

            <Typography variant="body-es" color="white" cursor="default">
              70%
            </Typography>
          </div>

          <div className="progress-track mt-3">
            <div className="progress-fill" />
          </div>
        </div>
      </div>

      <FloatingStatCard />
    </div>
  );
}
