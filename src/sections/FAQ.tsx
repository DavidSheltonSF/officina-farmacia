'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/faq';
import { faqSection } from '@/data/sections/faq';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function FAQ() {
  const { eyebrow, title, description } = faqSection;
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="bg-sand-100 py-24 lg:py-32">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={eyebrow}
          align="center"
          title={title}
          description={description}
          className="mx-auto"
        />

        <div className="mt-12 divide-y divide-brand-200 rounded-2xl border border-brand-200 bg-white">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-trigger-${item.id}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base text-ink-900 sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300',
                        isOpen && 'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-500">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
