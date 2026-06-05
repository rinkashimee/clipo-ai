import { Typography } from '@/components/ui/Typography';

interface SectionHeaderProps {
  pilltext: string;
  title: string;
  description: string;
}

export function SectionHeader({ pilltext, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-[720px] flex-col items-center text-center p-2.5">
      <div className="title-pill">
        <Typography variant="body-s" color="primary" cursor="default">
          {pilltext}
        </Typography>
      </div>

      <Typography as="h2" variant="h2" color="white" cursor="default" className="mt-4">
        {title}
      </Typography>

      <Typography variant="body-lg" color="gray-400" cursor="default" className="mt-4">
        {description}
      </Typography>
    </div>
  );
}
