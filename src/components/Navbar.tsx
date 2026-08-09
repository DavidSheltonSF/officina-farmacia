'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FlaskConical } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { siteConfig, whatsappConfig } from '@/lib/config';
import { buildWhatsAppUrl } from '@/services/whatsapp';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { NavbarLink } from './NavbarLink';
import { WhatsAppButton } from './WhatsAppButton';

Navbar.Link = NavbarLink

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(navLinks.map((link) => link.sectionId));

  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${sectionId}`);
    }
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-sand-50/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Navegação principal">
          <a
            href="#inicio"
            onClick={(event) => handleLinkClick(event, 'inicio')}
            className="flex items-center gap-2.5"
            aria-label={`${siteConfig.name} - Início`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 text-sand-50">
              <FlaskConical className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold text-ink-900">{siteConfig.shortName}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.sectionId}>
                <Navbar.Link
                isActive={activeId === link.sectionId}
                  href={link.href}
                  onClick={(event) => handleLinkClick(event, link.sectionId)}
                  aria-current={activeId === link.sectionId ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full',
                    activeId === link.sectionId
                      ? 'text-brand-800'
                      : 'text-ink-500 hover:text-brand-700'
                  )}
                >
                  {link.label}
                  {activeId === link.sectionId && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Navbar.Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <WhatsAppButton>
              Enviar Receita
            </WhatsAppButton>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-900 lg:hidden"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-brand-100 bg-sand-50 lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Navbar.Link
                  isActive={activeId === link.sectionId}
                  key={link.sectionId}
                  href={link.href}
                  onClick={(event) => handleLinkClick(event, link.sectionId)}
                  aria-current={activeId === link.sectionId ? 'page' : undefined}
                >
                  {link.label}
                </Navbar.Link>
              ))}
              <WhatsAppButton
                className="mt-3 w-full"
              >
                Enviar Receita
              </WhatsAppButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
