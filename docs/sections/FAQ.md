# Refatorações e Correções — `FAQ.tsx`

O componente `FAQ` é responsável por renderizar as perguntas frequentes sobre manipulação, prazos e formas de atendimento.

Apesar de o componente estar bem escrito e funcional, foram identificados alguns pontos de melhoria que também estavam presentes nas seções anteriores. Foram eles:

- Parte do conteúdo da seção estava escrita diretamente no componente, especificamente o conteúdo do cabeçalho.
- A estilização do tamanho do ícone `ChevronDown` podia ser simplificada.

## Extração do conteúdo para `src/data/sections/faq.ts`

Seguindo as alterações feitas nas seções anteriores, o conteúdo do cabeçalho da seção foi extraído do componente para a constante `faqSection`.

Agora, o `FAQ` obtém o `eyebrow`, `title` e `description` através de `faqSection`, mantendo o conteúdo da seção separado da sua estrutura de apresentação.

Além de melhorar a legibilidade, essa alteração prepara o componente para uma futura integração com CMS.

## Simplificação da classe do ícone

Antes, o ícone `ChevronDown` era dimensionado utilizando as classes `h-5` e `w-5`. Como a altura e a largura do ícone eram iguais, essa estilização foi simplificada para `size-5`.

Assim, `h-5 w-5` foi substituído por `size-5`, mantendo o mesmo resultado visual com uma declaração mais concisa e consistente com as demais seções.
