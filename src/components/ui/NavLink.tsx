import clsx from 'clsx';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function NavLink({ children, className, ...props }: NavLinkProps) {
  return (
    <a className={clsx('nav-link', className)} {...props}>
      {children}
    </a>
  );
}
