declare module 'next' {
  export type Metadata = Record<string, any>;
  export interface Viewport {
    [key: string]: any;
  }
  export type MetadataRoute = {
    Manifest: any;
    Robots: any;
    Sitemap: any;
  };
}

declare module 'next/font/google' {
  export type FontValue = { variable: string };
  export function Fraunces(options: any): FontValue;
  export function Plus_Jakarta_Sans(options: any): FontValue;
}

declare module 'next/image-types/global' {}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare namespace React {
  type ReactNode = any;
}
