import { buildWhatsAppUrl } from "@/services/whatsapp";
import { Button, ButtonProps } from "./ui/Button";
import { whatsappConfig } from "@/lib/config";
import { PropsWithChildren } from "react";


interface Props {
  className?: string
}

export function WhatsAppButton({children, className}: PropsWithChildren<Props>) {
  return ( 
  <Button 
    className={className}
    as="a" 
    href={buildWhatsAppUrl(whatsappConfig.defaultMessage)} 
    target="_blank" 
    rel="noopener noreferrer" 
    size="md">
    {children}
  </Button>
  )
}