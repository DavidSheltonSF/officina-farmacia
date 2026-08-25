import { ActiveIngredientCategory, Differential, Laboratory, ProcessStep } from '.';
import { Pillar } from './pillars';

export interface Section {
  eyebrow: string;
  title: string;
  description: string;
}

export interface SectionWithImage extends Section {
  image?: {
    src: string;
    alt: string;
  };
}

export interface HeroSection extends SectionWithImage {
  indicators: string[];
  delivery: {
    title: string;
    highlight: string;
    description: string;
  };
}

export interface ActiveIngredientsSection extends Section {
  categories: Array<ActiveIngredientCategory | 'Todos'>;
}

export interface HowItWorksSection extends Section {
  processSteps: ProcessStep[];
}
