import type { ProcessStep } from '.';

export interface Section {
  eyebrow: string;
  title: string;
  description: string;
}

export interface SectionWithImage extends Section {
  image: {
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
  categories: string[];
}

export interface HowItWorksSection extends Section {
  processSteps: ProcessStep[];
}
