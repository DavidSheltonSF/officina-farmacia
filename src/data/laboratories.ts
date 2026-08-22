import { LaboratoriesSection } from '@/types/sections';

export const laboratoriesSection: LaboratoriesSection = {
  eyebrow: 'Laboratórios parceiros',
  title: 'Ativos de procedência garantida, direto dos melhores laboratórios',
  description:
    'Selecionamos parceiros certificados que compartilham nosso compromisso com pureza, estabilidade e rastreabilidade.',
  laboratories: [
    {
      id: 'labgreen',
      name: 'LabGreen Ativos',
      logo: '/laboratories/labgreen.svg',
      specialty: 'Nutracêuticos e emagrecimento',
      description:
        'Referência nacional em ativos para controle de peso e performance, com rigoroso controle de pureza em todas as matérias-primas.',
      website: 'https://example.com/labgreen',
    },
    {
      id: 'dermapharma',
      name: 'DermaPharma',
      logo: '/laboratories/dermapharma.svg',
      specialty: 'Dermocosméticos manipulados',
      description:
        'Especialista em ativos dermatológicos e cosmecêuticos, com linha completa para tratamentos faciais e corporais.',
      website: 'https://example.com/dermapharma',
    },
    {
      id: 'vitanova',
      name: 'Vitanova Farmoquímica',
      logo: '/laboratories/vitanova.svg',
      specialty: 'Vitaminas e suplementação',
      description:
        'Produção certificada de vitaminas, minerais e antioxidantes de alta biodisponibilidade para fórmulas ortomoleculares.',
      website: 'https://example.com/vitanova',
    },
    {
      id: 'hormoline',
      name: 'Hormoline Bioidênticos',
      logo: '/laboratories/hormoline.svg',
      specialty: 'Reposição hormonal bioidêntica',
      description:
        'Laboratório especializado em hormônios bioidênticos, com tecnologia de liberação controlada e dosagens individualizadas.',
      website: 'https://example.com/hormoline',
    },
    {
      id: 'capilarte',
      name: 'Capilarte Tricologia',
      logo: '/laboratories/capilarte.svg',
      specialty: 'Tricologia e saúde capilar',
      description:
        'Foco em ativos para queda capilar, crescimento e fortalecimento dos fios, validados por estudos clínicos independentes.',
      website: 'https://example.com/capilarte',
    },
    {
      id: 'somnia',
      name: 'Somnia Neurociências',
      logo: '/laboratories/somnia.svg',
      specialty: 'Sono, ansiedade e bem-estar',
      description:
        'Ativos naturais e sintéticos voltados à qualidade do sono e equilíbrio emocional, com padronização rigorosa de dosagem.',
      website: 'https://example.com/somnia',
    },
  ],
};
