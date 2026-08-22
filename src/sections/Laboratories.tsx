'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { laboratories } from '@/data/laboratories';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Laboratories() {
  return (
    <section id="laboratorios" className="bg-brand-950 py-24 text-sand-50 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Laboratórios parceiros"
          tone="dark"
          align="center"
          title="Ativos de procedência garantida, direto dos melhores laboratórios"
          description="Selecionamos parceiros certificados que compartilham nosso compromisso com pureza, estabilidade e rastreabilidade."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {laboratories.map((lab, index) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-brand-400/50 hover:bg-white/[0.06]"
            >
              <span className="relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-brand-800">
                <Image
                  src={lab.logo}
                  alt={`Logo do laboratório ${lab.name}`}
                  fill
                  className="h-full w-full object-cover"
                />
              </span>
              <h3 className="mt-5 font-display text-lg text-sand-50">{lab.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
                {lab.specialty}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-300">{lab.description}</p>
              <a
                href={lab.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
              >
                Saiba mais
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
