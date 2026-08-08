import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  isActive: boolean
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function NavbarLink(props: Props) {
  const {isActive, children, className, ...anchorProps } = props

  const baseStyles = 'rounded-xl lg:rounded-none px-4 py-3 lg:py-2 text-base lg:text-sm font-medium transition-colors';
  const unactiveStyles = 'text-ink-700 lg:text-ink-500 bg-brand-50 lg:hover:text-brand-700';
  const activeStyles = 'bg-brand-100 lg:bg-inherit text-brand-800';

  return  <a
          className={cn(baseStyles, isActive ? activeStyles : unactiveStyles, className)}
          {...anchorProps}
          >
          {children}
        </a>
}