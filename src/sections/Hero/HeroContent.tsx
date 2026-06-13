import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

export function HeroContent() {
  return (
    <div className="hero-content">
      <Typography as="h1" variant="h1" color="white" cursor="default" className="hero-title">
        Turn Long Videos Into Viral Shorts With AI
      </Typography>

      <Typography
        variant="body-lg"
        color="gray-400"
        className="hero-description mt-6 max-w-[560px]"
        cursor="default"
      >
        Upload your content and let Clipo AI automatically find the best moments, generate captions,
        and create ready-to-post clips in seconds.
      </Typography>

      <div className="hero-actions">
        <Button>Start Free Trial</Button>
        <Button variant="secondary">Watch Demo</Button>
      </div>
    </div>
  );
}
