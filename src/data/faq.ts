import type { FaqItem } from '@/types';

export const faqItems: FaqItem[] = [
  {
    id: 'como-enviar-receita',
    question: 'Como envio minha receita para orçamento?',
    answer:
      'Você pode enviar a foto ou o PDF da receita diretamente pelo WhatsApp, clicando em qualquer botão "Enviar Receita" do site. Nossa equipe farmacêutica confere os dados e retorna com o orçamento em poucos minutos.',
  },
  {
    id: 'prazo-entrega',
    question: 'Qual o prazo de entrega das fórmulas manipuladas?',
    answer:
      'O prazo padrão é de até 48 horas úteis após a aprovação do orçamento, podendo variar conforme a complexidade da fórmula e a disponibilidade dos ativos prescritos.',
  },
  {
    id: 'receita-obrigatoria',
    question: 'É obrigatório ter receita médica para manipular?',
    answer:
      'Sim. Fórmulas com ativos controlados ou de uso terapêutico exigem prescrição de um profissional habilitado, conforme legislação da Anvisa. Produtos cosméticos sem ativo controlado podem dispensar receita em alguns casos.',
  },
  {
    id: 'entrega-outras-cidades',
    question: 'Vocês entregam em outras cidades além do Rio de Janeiro?',
    answer:
      'Sim, realizamos entregas para todo o Brasil via transportadora, com rastreamento do pedido. O prazo varia de acordo com a região e é informado no momento da confirmação do orçamento.',
  },
  {
    id: 'formas-pagamento',
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos Pix, cartão de crédito e débito, com parcelamento em até 6x. O pagamento é confirmado diretamente pelo WhatsApp ou presencialmente em qualquer uma das nossas unidades.',
  },
  {
    id: 'acompanhamento-farmaceutico',
    question: 'Tenho acompanhamento farmacêutico após a compra?',
    answer:
      'Sim. Nossos farmacêuticos ficam disponíveis para esclarecer dúvidas sobre posologia, armazenamento e possíveis interações, tanto pelo WhatsApp quanto presencialmente nas unidades.',
  },
];
