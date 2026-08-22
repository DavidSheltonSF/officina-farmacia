'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Pill } from 'lucide-react';
import { activeIngredientsSection } from '@/data/activeIngredients';
import { normalizeSearchText, cn } from '@/lib/utils';
import type { ActiveIngredientCategory } from '@/types';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ActiveIngredients() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ActiveIngredientCategory | 'Todos'>('Todos');

  const { eyebrow, title, description, activeIngredients, categories } = activeIngredientsSection;

  const filteredIngredients = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query);

    return activeIngredients.filter((ingredient) => {
      const matchesCategory = category === 'Todos' || ingredient.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        normalizeSearchText(ingredient.name).includes(normalizedQuery) ||
        normalizeSearchText(ingredient.description).includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="ativos" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} align="center" title={title} description={description} />

        <div className="mx-auto mt-10 max-w-xl">
          <label htmlFor="ingredient-search" className="sr-only">
            Pesquisar ativo
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-300"
              aria-hidden="true"
            />
            <input
              id="ingredient-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por nome do ativo, ex: melatonina"
              className="w-full rounded-full border border-brand-200 bg-sand-50 py-3.5 pl-12 pr-5 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            />
          </div>
        </div>

        <div
          className="mt-6 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filtrar por categoria"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors',
                category === item
                  ? 'border-brand-700 bg-brand-700 text-sand-50'
                  : 'border-brand-200 bg-white text-ink-500 hover:border-brand-400 hover:text-brand-700'
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {filteredIngredients.map((ingredient) => (
              <motion.div
                key={ingredient.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-brand-100 bg-sand-50 p-5 transition-colors hover:border-brand-300"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-base text-ink-900">{ingredient.name}</h3>
                  <Pill className="size-4.5 shrink-0 text-brand-500" aria-hidden="true" />
                </div>
                <span className="mt-2 inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                  {ingredient.category}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {ingredient.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredIngredients.length === 0 && (
          <p className="mt-10 text-center text-sm text-ink-500">
            Nenhum ativo encontrado para essa busca. Envie sua receita e confirmamos a
            disponibilidade para você.
          </p>
        )}
      </Container>
    </section>
  );
}
