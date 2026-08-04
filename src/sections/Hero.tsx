'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { whatsappConfig } from '@/lib/config';
import { buildWhatsAppUrl } from '@/services/whatsapp';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const indicators = [
  'Atendimento personalizado',
  'Laboratórios certificados',
  'Qualidade garantida',
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-sand-50 pt-32 pb-20 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-100 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            Farmácia de manipulação
          </span>

          <h1 className="mt-5 text-balance font-display text-4xl leading-[1.08] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            Sua fórmula, preparada com a precisão que a sua saúde merece.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            Manipulamos medicamentos e cosméticos sob medida, com farmacêuticos especializados, matérias-primas
            premium e entrega em até 48 horas em toda a região.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <Button
              as="a"
              href={buildWhatsAppUrl(whatsappConfig.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              Enviar Receita
            </Button>
            <Button as="a" href="#unidades" variant="outline" size="lg" icon={<MapPin className="h-4 w-4" aria-hidden="true" />}>
              Encontrar Unidade
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {indicators.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lift sm:aspect-[5/5.5]">
            <Image
              src="/farmaceutica.png"
              alt="Farmacêutica preparando fórmula manipulada em laboratório"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="rx-ticket absolute -bottom-8 left-4 w-[calc(100%-2rem)] rounded-2xl px-6 py-5 shadow-card sm:left-8 sm:w-72">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">Entrega expressa</p>
            <div className="rx-divider mt-2" />
            <p className="mt-3 text-sm text-ink-500">
              <span className="font-display text-2xl text-ink-900">48h</span> para sua fórmula chegar até você
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
