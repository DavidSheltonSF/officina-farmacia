import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'md' | 'lg';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50 disabled:pointer-events-none disabled:opacity-50';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-brand-700 text-sand-50 shadow-soft hover:bg-brand-800 hover:shadow-card active:bg-brand-900',
  secondary: 'bg-gold-500 text-brand-950 shadow-soft hover:bg-gold-400 active:bg-gold-500',
  outline: 'border-2 border-brand-700 text-brand-800 hover:bg-brand-700 hover:text-sand-50',
  ghost: 'text-brand-800 hover:bg-brand-100',
};

const sizeStyles: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: ReactNode;
}

type ButtonAsButton =  {
  as?: 'button';
} & CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsAnchor =  {
    as: 'a';
  href: string
} & CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> 


export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function renderContent(icon: ReactNode, iconPosition: 'left' | 'right', children: ReactNode) {
  return (
    <>
      {icon && iconPosition === 'left' && <span aria-hidden="true">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span aria-hidden="true">{icon}</span>}
    </>
  );
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', icon, iconPosition = 'right', className } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (props.as === 'a') {
    const { as, variant: _v, size: _s, icon: _i, iconPosition: _ip, className: _c, children, ...anchorProps } = props;
    return (
      <a className={classes} {...anchorProps}>
        {renderContent(icon, iconPosition, children)}
      </a>
    );
  }

  const { as, variant: _v, size: _s, icon: _i, iconPosition: _ip, className: _c, children, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      {renderContent(icon, iconPosition, children)}
    </button>
  );
}
