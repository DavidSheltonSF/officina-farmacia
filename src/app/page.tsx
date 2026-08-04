import type { Metadata } from 'next';
import { buildLocalBusinessSchema, buildFaqSchema, buildBreadcrumbSchema } from '@/lib/schema';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Differentials } from '@/sections/Differentials';
import { Laboratories } from '@/sections/Laboratories';
import { ActiveIngredients } from '@/sections/ActiveIngredients';
import { HowItWorks } from '@/sections/HowItWorks';
import { Units } from '@/sections/Units';
import { FAQ } from '@/sections/FAQ';
import { Contact } from '@/sections/Contact';

export const metadata: Metadata = {
  title: 'Fórmulas manipuladas com qualidade, agilidade e atendimento humano',
  description:
    'Envie sua receita e receba fórmulas manipuladas com precisão farmacêutica em até 48 horas. Laboratórios certificados, farmacêuticos especializados e entrega em toda a região.',
};

export default function HomePage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const faqSchema = buildFaqSchema();
  const breadcrumbSchema = buildBreadcrumbSchema();

  return (
    <>
      {localBusinessSchema.map((schema) => (
        <script
          key={schema['@id']}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero />
      <About />
      <Differentials />
      <Laboratories />
      <ActiveIngredients />
      <HowItWorks />
      <Units />
      <FAQ />
      <Contact />
    </>
  );
}
