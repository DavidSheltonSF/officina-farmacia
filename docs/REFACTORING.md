# Refatorções e Correções

Aqui, está documentado as correções e melhorias vindas da minha análise junto ao ChatGPT, onde que analisei o código gerado pelo Claude para a construção dessa landing page.

## Button.tsx

Encontrei um erro de TypeScript vindo de duas interfaces `ButtonAsAnchor` e `ButtonAsButton` usadas para criar `ButtonProps`, e que herdavam de duas outras interfaces. Esse erro foi corrigido quando substituí interfaces por type aliases. Todo o resto funcionava perfeitamente, portanto não precisou de alterações.

## Navbar

A barra de navegação era basicamente uma lista de links que quando clicados faziam com que a página rolasse para a seção correspondente.

### Bug no menu mobile

Na versão para dispositivos móveis, os links no menu simplesmente não funcionavam. O problema era a animação de fechamento do menu, que envolvia a propriedade `height`, que quanto animada, provocava o recálculo do layout e interferia no comportamento de scrolling.

A solução mais simples foi simplesmente remover a animação de `height` e manter a animação de `opacity`.

Optei ela simplicidade, embora o ChatGPT também tivesse sugerido usar um estado para controlar a animação de `height` e fazer com que a rolagem ocorrece apenas depois, utilizando também do recurso do Framer Motion `onExitComplete`.

```tsx
const [pendingSection, setPendingSection] = useState<string | null>(null);

<AnimatePresence
  onExitComplete={() => {
    if (!pendingSection) return;

    document.getElementById(pendingSection)?.scrollIntoView({
      behavior: 'smooth',
    });

    setPendingSection(null);
  }}
>
```

### Navbar Desktop e Menu Mobile, Dois elementos em um componente

A IA criou dois elementos, um para ser a barra de navegação desktop e outro para ser o menu mobile. O ideal seria utilizar um único componente que se adaptasse ao tamanho da tela.

Apesar de ter tentado, não consegui unir esses elementos em um único componente devido a complexidade e diferença de animações.

## Hero

### Estilização simplificada com Tailwind CSS

Havia um elemento que basicamente era uma ficha de receita semelhante às usadas em farmácias. O elemento possuia uma classe CSS `rx-ticket` que simplesmente adicionava a posição `relative` e a cor #fbfaf6.

```typescript
  <div className="rx-ticket absolute -bottom-8 left-4 w-[calc(100%-2rem)] rounded-2xl px-6 py-5 shadow-card sm:left-8 sm:w-72">
    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
      Entrega expressa
    </p>
    <div className="rx-divider mt-2" />
    <p className="mt-3 text-sm text-ink-500">
      <span className="font-display text-2xl text-ink-900">48h</span> para sua fórmula
      chegar até você
    </p>
  </div>
```

```css
/* Elemento de assinatura visual: "ficha de receita" com bordas perfuradas,
   remetendo a uma etiqueta/rótulo farmacêutico de manipulação. */
.rx-ticket {
  position: relative;
  background-color: #fbfaf6;
}
```

Um resultado semelhante pôde ser alcançado tratando o elemento como um elemento no fluxo normal do documento e não absoluto ou relativo. Já que não era necessário posicionamento e sim espaçamento.

```typescript
 <div className="ml-4 mt-8 rounded-2xl px-6 py-5 shadow-card sm:ml-8 sm:w-72">
    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
      Entrega expressa
    </p>
    <div className="rx-divider mt-2" />
    <p className="mt-3 text-sm text-ink-500">
      <span className="font-display text-2xl text-ink-900">48h</span> para sua fórmula
      chegar até você
    </p>
  </div>
```

### Estilos inúteis

O código gerado também continha alguns estilos adicionais sobre `rx-ticket` que geravam nada mais que dois círculos invisíveis e inúteis a cima e abaixo da etiqueta, no cando esquerdo.

```css
.rx-ticket::before,
.rx-ticket::after {
  content: '';
  position: absolute;
  left: -12px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-color: #f7f5ef;
  z-index: 10;
}

.rx-ticket::before {
  top: -12px;
}

.rx-ticket::after {
  bottom: -12px;
}
```

![Card arredondado com o texto ‘Entrega expressa’ e destaque para ‘48h’, acompanhado por dois círculos amarelos nas laterais.](image.png)

Como não acrescentavam nada no design, decidi remover essa classe e esses estilos por completo. Apesar de ter mantido `rx-divider` pois este acrescentava valor ao design.

### Remoção de `relative` desnecessário da `<section>`

Alguns elementos possuiam:

```tsx
className = 'relative overflow-hidden ...';
```

Essas classes foram removidas pois não faziam nada.

### Padronização dos tamanhos dos ícones

Foi identificado o uso de:

```tsx
h-4.5 w-4.5
```

E fo substituído por:

```tsx
size - 4;
```

Isso torna a definição das dimensões mais consistente.

### Separação do conteúdo da apresentação

O conteúdo textual da Hero estava definido diretamente no componente `Hero`, incluindo título, descrição, indicadores, informações da imagem e informações do card de entrega.

Foi criado o arquivo `src/data/hero.ts` para centralizar essas informações.

O componente passou a consumir os dados através de:

```tsx
import { heroContent } from '@data/hero';
```

Isso separa:

- dados/conteúdo => `src/data/hero.ts`
- estrutura e comportamento => `Hero.ts`

Além de facilitar futuras alterações de conteúdo e uma possível migração para CMS.

## About

### Centralização do conteúdo da seção

O conteúdo de `About` foi movido para `src/data/about.ts` para que o componente ficasse responsável apenas pela exibição do conteúdo.
Foram movidos:

- eyebrow
- title
- description
- pillars
- Informações da imagem (src e alt)

### Calculo dinâmico dos anos de atuação do negócio

Antes a informação dos anos de atuação estava escrita diretamente no componente, o que gerou uma inconsistência temporal com a descrição de um dos pilares. Agora, essa informação é obtida por meio de um calculo dinâmico utilizando o ano atual e o ano de fundação do negócio, extraído da constante `business`.

```tsx
const yearsOfOperation = new Date().getFullYear() - business.foundedYear;
```

### Simplificação das classes de tamanho dos icones

Antes

```tsx
h-11 w-11
```

Agora

```tsx
size - 11;
```

### Differentials.tsx

- O conteúdo da seção foi extraído para `src/data/differentials.ts`, removendo textos e dados diretamente do componente.
- A estrutura de dados foi reformulada para representar a seção completa através de `differentialsSection`, contendo `eyebrow`, `title`, `description` e a lista de diferenciais.
- Os dados dos diferenciais continuam sendo tipados através de `Differential`, enquanto a estrutura completa da seção passou a utilizar `DifferentialsSection`.
- A animação de entrada com Framer Motion foi mantida, utilizando `opacity` e deslocamento vertical (`y`).
- A animação `hover:-translate-y-1` foi removida para evitar conflito entre a propriedade `transform` controlada pelo Tailwind e a animação `y` controlada pelo Framer Motion.
- A estilização dos ícones foi simplificada, mantendo a separação entre o tamanho do container e o tamanho do próprio ícone.
- O link para a seção `Diferenciais` foi adicionado à Navbar, mantendo a consistência visual e facilitando a navegação direta até a seção.
