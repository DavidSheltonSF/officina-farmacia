/**
 * Configuração central da aplicação.
 * Números, mensagens e metadados vivem aqui para facilitar manutenção
 * e uma futura migração para um CMS.
 */

export const siteConfig = {
  name: 'Officina Farmácia de Manipulação',
  shortName: 'Officina',
  description:
    'Farmácia de manipulação com atendimento personalizado, laboratórios certificados e fórmulas exclusivas para sua saúde. Envie sua receita e receba em casa.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.officinamanipulacao.com.br',
  ogImage: '/og-image.jpg',
  locale: 'pt_BR',
  keywords: [
    'farmácia de manipulação',
    'manipulação de fórmulas',
    'farmácia magistral',
    'fórmulas personalizadas',
    'ativos manipulados',
    'farmácia de manipulação perto de mim',
    'entrega de medicamentos manipulados',
  ],
} as const;

export const whatsappConfig = {
  /** Número em formato internacional, apenas dígitos (código do país + DDD + número) */
  number: '5521999998888',
  defaultMessage:
    'Olá! Gostaria de enviar minha receita e saber mais sobre a manipulação de fórmulas na Officina.',
  budgetMessage: 'Olá! Gostaria de solicitar um orçamento para manipulação de uma fórmula.',
} as const;

export const socialConfig = {
  instagram: 'https://instagram.com/officinamanipulacao',
  facebook: 'https://facebook.com/officinamanipulacao',
  linkedin: 'https://linkedin.com/company/officinamanipulacao',
} as const;
