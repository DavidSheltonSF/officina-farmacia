import { whatsappConfig } from '@/lib/config';

/**
 * Monta a URL do WhatsApp (wa.me) com número e mensagem pré-preenchida.
 * Centraliza a lógica para que nenhum componente construa a URL manualmente.
 */
export function buildWhatsAppUrl(message: string = whatsappConfig.defaultMessage, phone?: string): string {
  const number = phone ?? whatsappConfig.number;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
}

export function buildUnitWhatsAppUrl(unitPhone: string, unitName: string): string {
  const digitsOnly = unitPhone.replace(/\D/g, '');
  const phone = digitsOnly.startsWith('55') ? digitsOnly : `55${digitsOnly}`;
  const message = `Olá! Vim pelo site e gostaria de falar com a unidade ${unitName}.`;
  return buildWhatsAppUrl(message, phone);
}
