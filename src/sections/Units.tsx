'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import { units } from '@/data/units';
import { buildUnitWhatsAppUrl } from '@/services/whatsapp';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function Units() {
  return (
    <section id="unidades" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Unidades"
          align="center"
          title="Encontre a unidade Officina mais perto de você"
          description="Atendimento presencial ou retirada rápida em qualquer uma das nossas unidades no Rio de Janeiro e Niterói."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              className="flex flex-col rounded-2xl border border-brand-100 bg-sand-50 p-6 shadow-soft"
            >
              <h3 className="font-display text-lg text-ink-900">{unit.name}</h3>

              <div className="mt-4 space-y-3 text-sm text-ink-500">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                  <span>
                    {unit.address}, {unit.neighborhood} — {unit.city}/{unit.state}
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                  {unit.phone}
                </p>
                <p className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                  <span>
                    Seg. a Sex.: {unit.hours.weekdays}
                    <br />
                    Sáb.: {unit.hours.saturday}
                  </span>
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <Button
                  as="a"
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  icon={<Navigation className="h-4 w-4" aria-hidden="true" />}
                  className="w-full"
                >
                  Google Maps
                </Button>
                <Button
                  as="a"
                  href={buildUnitWhatsAppUrl(unit.whatsapp, unit.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
                  className="w-full"
                >
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
