import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = tone === 'dark';

  return (
    <div className={cn('max-w-2xl', isCenter && 'mx-auto text-center', className)}>
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]',
          isDark ? 'border-brand-300/40 text-brand-200' : 'border-brand-300 text-brand-700 bg-brand-100'
        )}
      >
        <span className={cn('h-1.5 w-1.5 rounded-full', isDark ? 'bg-brand-300' : 'bg-brand-500')} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          'mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]',
          isDark ? 'text-sand-50' : 'text-ink-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', isDark ? 'text-sand-200/80' : 'text-ink-500')}>
          {description}
        </p>
      )}
    </div>
  );
}
