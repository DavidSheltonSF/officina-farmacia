'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle, FileText } from 'lucide-react';
import { whatsappConfig } from '@/lib/config';
import { buildWhatsAppUrl } from '@/services/whatsapp';
import { units } from '@/data/units';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { business } from '@/data/business';

const contactMethods = [
  { icon: Phone, label: 'Telefone', value: business.phoneDisplay },
  { icon: Mail, label: 'E-mail', value: business.email },
  { icon: Clock, label: 'Horário', value: 'Seg. a Sex.: 08h às 19h · Sáb.: 08h às 13h' },
];

export function Contact() {
  const mainUnit = units[0];
  const mapsEmbedSrc = mainUnit
    ? `https://www.google.com/maps?q=${encodeURIComponent(`${mainUnit.address}, ${mainUnit.city}`)}&output=embed`
    : undefined;

  return (
    <section id="contato" className="bg-white py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a nossa equipe farmacêutica"
            description="Estamos disponíveis para tirar dúvidas sobre sua receita, orçamento ou acompanhamento de pedido."
          />

          <div className="mt-9 space-y-5">
            {contactMethods.map((method) => (
              <div key={method.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <method.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-300">
                    {method.label}
                  </p>
                  <p className="text-sm font-medium text-ink-900">{method.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              as="a"
              href={buildWhatsAppUrl(whatsappConfig.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
            >
              Falar no WhatsApp
            </Button>
            <Button
              as="a"
              href={buildWhatsAppUrl(whatsappConfig.budgetMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              icon={<FileText className="h-4 w-4" aria-hidden="true" />}
            >
              Enviar Receita
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="overflow-hidden rounded-3xl border border-brand-100 shadow-card"
        >
          {mapsEmbedSrc && (
            <iframe
              title="Mapa da unidade Officina"
              src={mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full"
            />
          )}
        </motion.div>
      </Container>
    </section>
  );
}
