'use client';

import { useEffect } from 'react';

/**
 * Trava o scroll do body enquanto `locked` for verdadeiro.
 * Utilizado pelo menu mobile da Navbar.
 */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}
