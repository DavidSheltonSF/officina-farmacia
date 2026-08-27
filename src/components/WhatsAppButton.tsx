import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Button, ButtonProps } from './ui/Button';
import { whatsappConfig } from '@/lib/config';
import { PropsWithChildren, ReactNode } from 'react';

interface Props {
  className?: string;
  icon?: ReactNode;
}

export function WhatsAppButton({ children, className, icon }: PropsWithChildren<Props>) {
  return (
    <Button
      className={className}
      as="a"
      href={buildWhatsAppUrl(whatsappConfig.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      size="md"
      icon={icon}
    >
      {children}
    </Button>
  );
}
