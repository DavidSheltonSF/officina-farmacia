'use client';

import Image from 'next/image';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { heroSection } from '@/data/hero';

export function Hero() {
  const { indicators, eyebrow, title, description, image, delivery } = heroSection;

  return (
    <section id="inicio" className="overflow-hidden bg-sand-50 pt-32 pb-20 lg:pb-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton icon={<ArrowRight className="size-4" aria-hidden="true" />}>
              Enviar Receita
            </WhatsAppButton>
            <Button
              as="a"
              href="#unidades"
              variant="outline"
              size="lg"
              icon={<MapPin className="size-4" aria-hidden="true" />}
            >
              Encontrar Unidade
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {indicators.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                <CheckCircle2 className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lift sm:aspect-[5/5.5]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              loading="eager"
            />
          </div>

          <div className="ml-4 mt-8 rounded-2xl px-6 py-5 shadow-card sm:ml-8 sm:w-72">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              {delivery.title}
            </p>
            <div className="rx-divider mt-2" aria-hidden="true" />
            <p className="mt-3 text-sm text-ink-500">
              <span className="font-display text-2xl text-ink-900">{delivery.highlight}</span>{' '}
              {delivery.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
