import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';

export function CTA() {
  return (
    <section id="cta" className="pt-24">
      <Container>
        <div className="cta-card">
          <div className="cta-glow" />

          <div className="cta-content">
            <Typography as="h2" variant="h2" color="white" cursor="default">
              Start Creating Viral Clips Today
            </Typography>

            <Typography
              variant="body-lg"
              color="gray-300"
              cursor="default"
              className="cta-description"
            >
              Join thousands of creators using Clipo AI to turn long-form content into
              high-performing short-form videos in minutes.
            </Typography>

            <div className="cta-actions">
              <Button>Start Free Trail</Button>
              <Button variant="secondary">Watch Demo</Button>
            </div>

            <Typography variant="body-s" color="gray-400" cursor="default">
              No credit card required • Cancel anytime
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
}
