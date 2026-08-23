# Refatorações e Correções — `HowItWorks.tsx`

O componente `HowItWorks` é responsável por exibir os 5 passos para receber o ativo manipulado.

Apesar de o componente estar bem escrito e funcional, foram identificados alguns pontos de melhoria que também estavam presentes nas seções anteriores. Foram eles:

* Parte do conteúdo da seção estava escrita diretamente no componente, especificamente o conteúdo do cabeçalho.
* A estilização do tamanho dos ícones podia ser simplificada.

## Extração do conteúdo para `src/data/howItWorks.ts`

Seguindo as alterações feitas nas seções anteriores, o conteúdo da seção foi extraído do componente para uma constante, embora as informações sobre os passos do processo já estivessem em `processSteps`.

Agora, o cabeçalho e os passos são obtidos através de `howItWorksSection`, centralizando o conteúdo da seção em uma única fonte de dados.

Além de melhorar a legibilidade, essa alteração preparou o componente para uma futura integração com CMS.

## Simplificação das classes

Antes, os elementos que representavam os ícones eram dimensionados utilizando as classes `h-` e `w-`. Como a altura e a largura do elemento eram iguais, essa estilização foi simplificada para `size-`.

Assim, `h-[4.5rem] w-[4.5rem]` foi substituído por `size-[4.5rem]`, mantendo o mesmo resultado visual com uma declaração mais concisa.
