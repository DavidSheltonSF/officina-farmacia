# Officina — Farmácia de Manipulação

Landing page institucional de alta conversão para uma farmácia de manipulação, construída com **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion** e **Lucide React**.

## ✨ Principais recursos

- Página única com Navbar fixa, scroll suave e destaque automático da seção ativa
- Seções: Hero, Sobre, Diferenciais, Laboratórios, Ativos (com busca/filtro em tempo real), Como Funciona, Unidades, FAQ (accordion acessível) e Contato
- Captação via WhatsApp em todos os CTAs + botão flutuante, com número e mensagens centralizados em `src/lib/config.ts`
- SEO técnico completo: Metadata API, Open Graph, Twitter Card, `sitemap.xml` e `robots.txt` dinâmicos, `manifest.webmanifest`
- Schema.org (JSON-LD): `Organization`, `LocalBusiness`/`MedicalBusiness` (uma entrada por unidade), `FAQPage` e `BreadcrumbList`
- Toda a informação de conteúdo vive em `src/data/`, isolada dos componentes — pronta para futura migração para um CMS
- Animações discretas com Framer Motion (fade, slide, scale) e respeito a `prefers-reduced-motion`
- Acessibilidade: `aria-*`, foco visível, navegação por teclado, contraste adequado
- Responsivo de 320px a telas grandes (1536px+)

## 🚀 Como executar

Pré-requisitos: **Node.js 18.17+** e npm.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Outros comandos

```bash
npm run build      # build de produção
npm run start      # sobe o build de produção
npm run lint       # lint com eslint-config-next
npm run typecheck  # checagem de tipos sem gerar arquivos
```

## ⚙️ Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste a URL pública do site (usada em metadados, sitemap, robots e Schema.org):

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br
```

## 📁 Estrutura do projeto

```
src/
  app/            # App Router: layout, page, sitemap, robots, manifest, globals.css
  components/     # Navbar, Footer, WhatsAppFloatButton e componentes de UI reutilizáveis
    ui/           # Button, Container, SectionHeading
  sections/       # Uma seção por arquivo (Hero, About, FAQ, etc.)
  hooks/          # useActiveSection, useLockBodyScroll
  services/       # whatsapp.ts — geração de links wa.me
  lib/            # config.ts (constantes), schema.ts (JSON-LD), utils.ts
  types/          # Tipos TypeScript centrais do domínio
  data/           # Conteúdo do site (laboratórios, ativos, unidades, FAQ, etc.)
public/           # Ícones, favicons, OG image e logos dos laboratórios
```

## ✏️ Editando o conteúdo

Nenhum texto está escrito diretamente nos componentes. Para alterar o conteúdo do site, edite os arquivos correspondentes em `src/data/`:

| Seção        | Arquivo                              |
| ------------ | ------------------------------------- |
| Navegação    | `src/data/navigation.ts`              |
| Diferenciais | `src/data/differentials.ts`           |
| Laboratórios | `src/data/laboratories.ts`            |
| Ativos       | `src/data/activeIngredients.ts`       |
| Como Funciona| `src/data/steps.ts`                   |
| Unidades     | `src/data/units.ts`                   |
| FAQ          | `src/data/faq.ts`                     |
| WhatsApp / SEO / contato | `src/lib/config.ts`       |

## 🎨 Paleta e tipografia

- Cores definidas em `tailwind.config.ts` (`brand`, `sand`, `ink`, `gold`) — fáceis de trocar globalmente
- Tipografia: **Fraunces** (display, títulos) + **Plus Jakarta Sans** (corpo), carregadas via `next/font/google`
- Elemento de assinatura visual: cartões estilo "ficha de receita" com bordas perfuradas (`.rx-ticket` em `globals.css`)

## 📦 Deploy

O projeto é compatível com qualquer plataforma que suporte Next.js (Vercel, Netlify, servidor Node próprio). Para Vercel:

```bash
npm install -g vercel
vercel
```

Lembre-se de configurar `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente da plataforma de deploy.
