import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { NavLink } from '@/components/ui/NavLink';
import { Typography } from '@/components/ui/Typography';
import { NAVIGATION_ITEMS } from '@/data/navigations';

export function Navbar() {
  return (
    <header className="navbar py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <Typography as="span" variant="h3" color="white" cursor="pointer">
            Clipo AI
          </Typography>

          <div className="hidden items-center gap-8 md:flex">
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}

            <div className="hidden md:block">
              <Button>Start Free</Button>
            </div>
          </div>

          <button className="text-[var(--white)] md:hidden">☰</button>
        </nav>
      </Container>
    </header>
  );
}
