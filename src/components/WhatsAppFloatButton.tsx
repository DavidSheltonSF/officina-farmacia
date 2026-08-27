'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappConfig } from '@/lib/config';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function WhatsAppFloatButton() {
  return (
    <motion.a
      href={buildWhatsAppUrl(whatsappConfig.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift sm:bottom-7 sm:right-7"
      aria-label="Falar com a Officina pelo WhatsApp"
    >
      <MessageCircle className="size-7" aria-hidden="true" fill="currentColor" strokeWidth={0} />
      <span className="sr-only">Enviar mensagem no WhatsApp</span>
    </motion.a>
  );
}
