import Link from 'next/link';
import { FlaskConical, Instagram, Facebook, Linkedin } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { siteConfig, socialConfig } from '@/lib/config';
import { Container } from '@/components/ui/Container';

const socialLinks = [
  { label: 'Instagram', href: socialConfig.instagram, icon: Instagram },
  { label: 'Facebook', href: socialConfig.facebook, icon: Facebook },
  { label: 'LinkedIn', href: socialConfig.linkedin, icon: Linkedin },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-sand-200">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 text-sand-50">
              <FlaskConical className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold text-sand-50">{siteConfig.shortName}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sand-300">
            Farmácia de manipulação com fórmulas individualizadas, laboratórios certificados e atendimento humano do
            início ao fim.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sand-200 transition-colors hover:border-brand-400 hover:text-brand-300"
              >
                <social.icon className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sand-50">Navegação</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.sectionId}>
                <a href={link.href} className="text-sm text-sand-300 transition-colors hover:text-brand-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sand-50">Contato</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-300">
            <li>{siteConfig.phoneDisplay}</li>
            <li>{siteConfig.email}</li>
            <li>Seg. a Sex.: 08h às 19h</li>
            <li>Sáb.: 08h às 13h</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sand-50">Institucional</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-300">
            <li>
              <Link href="#sobre" className="transition-colors hover:text-brand-300">
                Sobre a Officina
              </Link>
            </li>
            <li>
              <Link href="#faq" className="transition-colors hover:text-brand-300">
                Perguntas frequentes
              </Link>
            </li>
            <li>Responsável técnico: Dra. Camila Andrade — CRF-RJ 28.451</li>
            <li>CNPJ: 12.345.678/0001-90</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-sand-300 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>Manipulação sob prescrição, conforme legislação sanitária vigente.</p>
        </Container>
      </div>
    </footer>
  );
}
