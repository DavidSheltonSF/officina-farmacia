'use client';

import { motion } from 'framer-motion';
import { MessageCircle, FileText } from 'lucide-react';
import { whatsappConfig } from '@/lib/config';
import { buildWhatsAppUrl } from '@/services/whatsapp';
import { units } from '@/data/units';
import { contactMethods } from '@/data/contact';
import { contactSection } from '@/data/sections/contact';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { IconWrapper } from '@/components/ui/IconWrapper';

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
            eyebrow={contactSection.eyebrow}
            title={contactSection.title}
            description={contactSection.description}
          />

          <div className="mt-9 space-y-5">
            {contactMethods.map((method) => (
              <div key={method.label} className="flex items-center gap-4">
                <IconWrapper>
                  <method.icon className="size-5" aria-hidden="true" />
                </IconWrapper>
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
              icon={<MessageCircle className="size-4" aria-hidden="true" />}
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
              icon={<FileText className="size-4" aria-hidden="true" />}
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
              className="size-full min-h-[420px]"
            />
          )}
        </motion.div>
      </Container>
    </section>
  );
}
