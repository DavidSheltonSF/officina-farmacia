'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/data/steps';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-sand-100 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Como funciona"
          align="center"
          title="Da receita à sua porta, em cinco passos simples"
          description="Um processo pensado para ser rápido, transparente e sem burocracia do início ao fim."
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-9 hidden h-px w-[calc(100%-4rem)] -translate-x-1/2 bg-brand-200 lg:block"
          />
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex size-4.5 items-center justify-center rounded-full border-4 border-sand-100 bg-brand-800 text-sand-50 shadow-card">
                  <step.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                  Passo {step.order}
                </span>
                <h3 className="mt-2 font-display text-lg text-ink-900">{step.title}</h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-ink-500">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
