'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { differentials } from '@/data/differentials';

import { differentialsSection } from '@/data/sections/differentials';

export function Differentials() {
  const { eyebrow, title, description } = differentialsSection;

  return (
    <section id="diferenciais" className="bg-sand-100 py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} align="center" title={title} description={description} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              className="group rounded-2xl border border-brand-200/70 bg-white p-7 shadow-soft hover:shadow-card"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-800 text-sand-50 transition-colors duration-300 group-hover:bg-brand-600">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
