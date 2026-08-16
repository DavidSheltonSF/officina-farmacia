import { Differential } from '.';
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

export interface AboutSection extends SectionWithImage {
  pillars: Pillar[];
}

export interface DifferentialsSection extends Section {
  differentials: Differential[];
}
