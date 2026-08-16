import { Differential } from '.';

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

export interface DifferentialsSection extends Section {
  differentials: Differential[];
}
