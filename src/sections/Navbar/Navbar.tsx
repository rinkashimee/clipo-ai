import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { NavLink } from '@/components/ui/NavLink';
import { Typography } from '@/components/ui/Typography';
import { NAVIGATION_ITEMS } from '@/data/navigations';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Navbar() {
  const activeSection = useActiveSection();

  return (
    <header className="navbar py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <a href="#top">
            <Typography as="span" variant="h3" color="white" cursor="pointer">
              Clipo AI
            </Typography>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className={
                  activeSection === item.id &&
                  activeSection !== 'hero' &&
                  activeSection !== 'cta' &&
                  activeSection !== 'footer'
                    ? 'nav-link-active'
                    : ''
                }
              >
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
