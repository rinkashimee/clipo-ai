import { SectionHeader } from '@/components/common/SectionHeader';
import { TestimonialCard } from '@/components/common/TestimonialCard';
import { Container } from '@/components/ui/Container';
import { TESTIMONIALS } from '@/data/testimonials';

export function Testimonial() {
  return (
    <section id="testimonials" className="pt-24">
      <Container>
        <div className="flex flex-col gap-16 p-2.5">
          <SectionHeader
            pilltext="Testimonials"
            title="Loved By Creators Worldwide"
            description="Thousands of creators use Clipo AI to turn long-form content into viral short-form videos faster than ever."
          />

          <div className="grid gap-6 pt-14 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
