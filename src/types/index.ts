import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Laboratory {
  id: string;
  name: string;
  logo: string;
  description: string;
  specialty: string;
  website: string;
}

export type ActiveIngredientCategory =
  | 'Emagrecimento'
  | 'Dermatologia'
  | 'Capilar'
  | 'Reposição Hormonal'
  | 'Suplementação'
  | 'Sono e Ansiedade';

export interface ActiveIngredient {
  id: string;
  name: string;
  category: ActiveIngredientCategory;
  description: string;
}

export interface ProcessStep {
  id: string;
  order: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Unit {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  whatsapp: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  mapsUrl: string;
  latitude: number;
  longitude: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
