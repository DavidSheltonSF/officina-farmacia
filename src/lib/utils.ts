type ClassValue = string | null | boolean | undefined;

/**
 * Combina classes condicionalmente, ignorando valores falsy.
 * Substitui a necessidade de bibliotecas externas como clsx.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Normaliza texto para comparação de busca (sem acentos, minúsculo).
 */
export function normalizeSearchText(value: string): string {
  return value
    .toLowerCase() // Torna minúscula
    .normalize('NFD') // Separa caracteres de acentos
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .trim(); // Remove espaços laterais
}
