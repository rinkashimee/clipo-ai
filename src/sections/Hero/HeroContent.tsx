import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

export function HeroContent() {
  return (
    <div className="flex flex-col">
      <Typography as="h1" variant="h1" color="white" cursor="default">
        Turn Long Videos Into Viral Shorts With AI
      </Typography>

      <Typography
        variant="body-lg"
        color="gray-400"
        className="mt-6 max-w-[560px]"
        cursor="default"
      >
        Upload your content and let Clipo AI automatically find the best moments, generate captions,
        and create ready-to-post clips in seconds.
      </Typography>

      <div className="mt-8 flex items-center gap-4">
        <Button>Start Free Trial</Button>
        <Button variant="secondary">Watch Demo</Button>
      </div>
    </div>
  );
}
