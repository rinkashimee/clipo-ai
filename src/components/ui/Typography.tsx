import clsx from 'clsx';
import type { ReactNode } from 'react';

type TypographyVariant =
  | 'xl'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body-lg'
  | 'body-md'
  | 'body-s'
  | 'body-s-fw-md'
  | 'body-es'
  | 'body-es-fw-md';

type TypographyColor = 'primary' | 'white' | 'gray-300' | 'gray-400' | 'gray-500' | 'cyan';

type TypographyCursor = 'pointer' | 'default' | 'not-allowed' | 'wait' | 'text' | 'move' | 'help';

interface TypographyProps {
  as?: React.ElementType;
  variant?: TypographyVariant;
  color?: TypographyColor;
  children: ReactNode;
  className?: string;
  cursor?: TypographyCursor;
}

export function Typography({
  as: Component = 'p',
  variant = 'body-md',
  color = 'white',
  cursor = 'text',
  children,
  className,
}: TypographyProps) {
  return (
    <Component
      className={clsx(
        {
          'heading-xl': variant === 'xl',
          'heading-1': variant === 'h1',
          'heading-2': variant === 'h2',
          'heading-3': variant === 'h3',
          'heading-4': variant === 'h4',
          'heading-5': variant === 'h5',
          'body-lg': variant === 'body-lg',
          'body-md': variant === 'body-md',
          'body-s': variant === 'body-s',
          'body-s-fw-md': variant === 'body-s-fw-md',
          'body-es': variant === 'body-es',
          'body-es-fw-md': variant === 'body-es-fw-md',
        },
        {
          'text-primary': color === 'primary',
          'text-white': color === 'white',
          'text-gray-300': color === 'gray-300',
          'text-gray-400': color === 'gray-400',
          'text-gray-500': color === 'gray-500',
          'text-cyan': color === 'cyan',
        },
        {
          'cursor-pointer': cursor === 'pointer',
          'cursor-default': cursor === 'default',
          'cursor-not-allowed': cursor === 'not-allowed',
          'cursor-wait': cursor === 'wait',
          'cursor-text': cursor === 'text',
          'cursor-move': cursor === 'move',
          'cursor-help': cursor === 'help',
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
