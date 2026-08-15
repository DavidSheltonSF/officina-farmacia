import { HeartHandshake, Sparkles, Target } from 'lucide-react';

export const about = {
  eyebrow: 'Sobre a Officina',
  title: 'Farmácia de manipulação feita por gente que entende de gente.',
  description:
    'Combinamos rigor técnico e cuidado humano para transformar cada receita em uma fórmula pensada exclusivamente para você.',
  pillars: [
    {
      title: 'História',
      description: `Nascemos em 2011 a partir do encontro entre farmacêuticos e médicos que acreditavam em um cuidado mais individual. Hoje somos referência em manipulação magistral no Rio de Janeiro.`,
      icon: Sparkles,
    },
    {
      title: 'Missão',
      description:
        'Transformar prescrições em fórmulas precisas, seguras e acessíveis, aproximando a ciência farmacêutica da rotina de cada paciente.',
      icon: Target,
    },
    {
      title: 'Compromisso',
      description:
        'Rastreabilidade em cada etapa da manipulação, ética profissional e um atendimento que trata cada receita com a atenção que ela merece.',
      icon: HeartHandshake,
    },
  ],

  image: {
    src: '/farmaceutico-segurando-frasco.png',
    alt: 'Equipe farmacêutica da Officina analisando fórmulas manipuladas',
  },
};
