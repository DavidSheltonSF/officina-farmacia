import { Pillar } from '@/types/pillars';
import { HeartHandshake, Sparkles, Target } from 'lucide-react';

export const pillars: Pillar[] = [
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
];
