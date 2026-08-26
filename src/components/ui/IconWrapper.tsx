import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type IconWrapperShape = 'rounded' | 'square';
type IconWrapperColor = 'light' | 'dark';

interface Props {
  shape?: IconWrapperShape;
  color?: IconWrapperColor;
  className?: string;
}

const shapeStyles: Record<IconWrapperShape, string> = {
  rounded: 'rounded-full',
  square: 'rounded-xl',
};

const colorStyles: Record<IconWrapperColor, string> = {
  light: 'bg-brand-100 text-brand-700',
  dark: 'bg-brand-800 text-sand-50',
};

export function IconWrapper({
  shape = 'rounded',
  color = 'light',
  className,
  children,
}: PropsWithChildren<Props>) {
  const baseStyles = `flex items-center justify-center shrink-0 p-3 h-fit w-fit ${shapeStyles[shape]} ${colorStyles[color]}`;

  return <span className={cn(baseStyles, className)}>{children}</span>;
}
