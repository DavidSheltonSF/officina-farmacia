import { Clock, Mail, Phone } from 'lucide-react';
import { business } from '@/data/business';

export const contactItems = [
  { icon: Phone, label: 'Telefone', value: business.phoneDisplay },
  { icon: Mail, label: 'E-mail', value: business.email },
  { icon: Clock, label: 'Horário', value: business.businessHours.join(' · ') },
];
