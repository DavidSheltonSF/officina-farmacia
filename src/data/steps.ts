import { FileText, Calculator, ThumbsUp, FlaskConical, PackageCheck } from 'lucide-react';
import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: 'envie-receita',
    order: 1,
    title: 'Envie sua receita',
    description: 'Envie a foto ou o PDF da sua receita pelo WhatsApp ou pelo formulário do site, com total segurança.',
    icon: FileText,
  },
  {
    id: 'receba-orcamento',
    order: 2,
    title: 'Receba o orçamento',
    description: 'Nossa equipe analisa a fórmula e envia o orçamento detalhado em poucos minutos.',
    icon: Calculator,
  },
  {
    id: 'aprove',
    order: 3,
    title: 'Aprove',
    description: 'Confirme o pedido e o pagamento diretamente pelo WhatsApp, sem burocracia.',
    icon: ThumbsUp,
  },
  {
    id: 'manipulacao',
    order: 4,
    title: 'Manipulação',
    description: 'Sua fórmula é preparada por farmacêuticos especializados, com controle de qualidade em cada etapa.',
    icon: FlaskConical,
  },
  {
    id: 'receba-em-casa',
    order: 5,
    title: 'Receba em casa',
    description: 'Entrega expressa e rastreável, com todo o cuidado necessário até a porta da sua casa.',
    icon: PackageCheck,
  },
];
