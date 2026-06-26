import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { NavLink } from '@/components/ui/NavLink';
import { Typography } from '@/components/ui/Typography';
import { NAVIGATION_ITEMS } from '@/data/navigations';
import { useActiveSection } from '@/hooks/useActiveSection';
import Logo from '@/assets/images/clipo-ai-logo.svg';

export function Navbar() {
  const activeSection = useActiveSection();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <a href="#top" className="navbar-brand">
            <img src={Logo} alt="Clipo AI" className="navbar-brand-logo" />

            <Typography as="span" variant="h4" color="white" cursor="pointer" className="nav-logo">
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

          <button
            className="mobile-menu-button md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="mobile-menu-panel">
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}

            <Button className="w-full">Start Free</Button>
          </div>
        )}
      </Container>
    </header>
  );
}
