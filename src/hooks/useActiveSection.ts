'use client';

import { useEffect, useState } from 'react';

/**
 * Observa as seções da página via IntersectionObserver e retorna
 * o id da seção atualmente visível, para destacar o link ativo na Navbar.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    // Sections that will be observed
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Map that will store the sections ids and their viewport intersection ratio
    const mapVisible = new Map<string, number>();
    elements.forEach((el) => mapVisible.set(el.id, 0));

    const observer = new IntersectionObserver(
      // Contains the observed elements whose intersection state has changed since the last callback
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          //update the map
          mapVisible.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        // Find the most visible section
        let highestRatio = 0;
        let mostVisibleId = '';
        mapVisible.forEach((ratio, id) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            mostVisibleId = id;
          }
        });

        if (mostVisibleId) {
          setActiveId(mostVisibleId);
        }
      },
      {
        rootMargin: '-15% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
