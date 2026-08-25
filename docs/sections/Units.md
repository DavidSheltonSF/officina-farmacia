# Refatorações e Correções — Units.tsx

O componente Units é responsável por exibir as unidades da farmácia e suas respectivas informações de contato.

- Foram identificados os seguintes pontos de melhoria:

- Parte do conteúdo da seção estava escrita diretamente no componente, especificamente o conteúdo do cabeçalho.
Os botões dos cards não estavam alinhados devido à diferença de quantidade de conteúdo entre as unidades.

## Extração do conteúdo para src/data/sections/units.ts

Seguindo as alterações feitas nas seções anteriores, o conteúdo do cabeçalho da seção foi extraído do componente para a constante unitsSection.

Agora, o Units obtém o eyebrow, title e description através de unitsSection, mantendo o conteúdo da seção separado da sua estrutura de apresentação.

Além de melhorar a legibilidade, essa alteração prepara o componente para uma futura integração com CMS.

## Correção no alinhamento dos botões

Os cards das unidades possuem conteúdos com quantidades diferentes de texto. Como o container dos botões utilizava uma margem superior fixa, essa diferença fazia com que os botões fossem posicionados em alturas diferentes.

Para corrigir o desalinhamento, foi definida uma altura uniforme de 22rem para os cards e a margem superior do container dos botões foi definida como automática através de mt-auto.

Dessa forma, o espaço disponível no card é utilizado para manter o container dos botões sempre na parte inferior, independentemente da quantidade de conteúdo presente acima dele.