'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { business } from '@/data/business';
import { pillars } from '@/data/pillars';
import { aboutSection } from '@/data/sections/about';
import { IconWrapper } from '@/components/ui/IconWrapper';

const { eyebrow, title, description, image } = aboutSection;
const yearsOfOperation = new Date().getFullYear() - business.foundedYear;

export function About() {
  return (
    <section id="sobre" className="bg-white py-24 lg:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
            <Image
              src={image?.src ?? ''}
              alt={image?.alt ?? ''}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand-800 px-6 py-5 text-sand-50 shadow-card sm:-right-8">
            <p className="font-display text-3xl">{yearsOfOperation} anos</p>
            <p className="text-xs uppercase tracking-widest text-brand-200">cuidando de fórmulas</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />

          <div className="mt-10 space-y-7">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4">
                <IconWrapper>
                  <pillar.icon className="size-5" aria-hidden="true" />
                </IconWrapper>
                <div>
                  <h3 className="font-display text-lg text-ink-900">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
