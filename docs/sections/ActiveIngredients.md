# Refatorações e Correções — `ActiveIngredients.tsx`

O componente `ActiveIngredients` é responsável por renderizar a seção que apresenta os ativos disponíveis na farmácia.

Apesar do componente estar bem escrito e funcional, foram identificados alguns pontos de melhoria que também estavam presentes nas seções anteriores. Foram eles:

- Parte do conteúdo da seção estava escrito no componente, especificamente o conteúdo do cabeçalho.
- Estilização do tamanho dos ícones podia ser simplificada

## Extração do conteúdo para `src/data/activeIngredients.ts`

Seguindo as alterações feitas nas seções anteriores, todo o conteúdo foi extraído do componente para uma constante, embora as informações sobre os ingredientes já estivessem em `activeIngredients`.

Além de melhorar a legibilidade, essa alteração preparou o componente para uma futura integração com CMS.

## Simplificação das classes

Antes, os ícones `Search` e `Pill` eram estilizados com `h-` e `w-`, portanto essa estilização foi simplificada para `size-`.
