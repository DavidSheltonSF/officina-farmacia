'use client';

import { useEffect, useState } from 'react';

/**
 * Observa as seções da página via IntersectionObserver e retorna
 * o id da seção atualmente visível, para destacar o link ativo na Navbar.
 */
export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0]?.target.id;
          if (id) setActiveId(id);
        }
      },
      {
        rootMargin: '-15% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...options,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeId;
}
