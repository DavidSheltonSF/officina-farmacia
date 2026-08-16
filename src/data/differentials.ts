import { HeartHandshake, ShieldCheck, Truck, GraduationCap, FlaskConical, Gem } from 'lucide-react';
import { DifferentialsSection } from '@/types/sections';

export const differentialsSection: DifferentialsSection = {
  eyebrow: 'Diferenciais',
  title: 'Cuidado técnico em cada detalhe da manipulação',
  description:
    'Da matéria-prima à entrega, cada etapa segue protocolos rígidos para garantir segurança e eficácia.',
  differentials: [
    {
      id: 'atendimento-personalizado',
      title: 'Atendimento personalizado',
      description:
        'Cada paciente é acompanhado individualmente, do primeiro contato à entrega da fórmula, com orientação farmacêutica dedicada.',
      icon: HeartHandshake,
    },
    {
      id: 'controle-qualidade',
      title: 'Controle de qualidade',
      description:
        'Todos os lotes passam por controle de qualidade físico-químico antes de deixar o laboratório, seguindo normas da Anvisa.',
      icon: ShieldCheck,
    },
    {
      id: 'entrega-rapida',
      title: 'Entrega rápida',
      description:
        'Fórmulas prontas em até 48 horas, com entrega expressa para todas as unidades atendidas e rastreamento do pedido.',
      icon: Truck,
    },
    {
      id: 'farmaceuticos-especializados',
      title: 'Farmacêuticos especializados',
      description:
        'Equipe técnica com pós-graduação em manipulação magistral, pronta para tirar dúvidas sobre posologia e interações.',
      icon: GraduationCap,
    },
    {
      id: 'manipulacao-individualizada',
      title: 'Manipulação individualizada',
      description:
        'Cada fórmula é preparada sob medida, respeitando a dose exata prescrita e as particularidades de cada organismo.',
      icon: FlaskConical,
    },
    {
      id: 'materias-primas-premium',
      title: 'Matérias-primas premium',
      description:
        'Trabalhamos apenas com fornecedores certificados, garantindo pureza, procedência e estabilidade dos ativos utilizados.',
      icon: Gem,
    },
  ],
};
