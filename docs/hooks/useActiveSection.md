# Refatorações e Correções — `useActiveSection`

O hook `useActiveSection` é responsável por observar as seções da página através da API `IntersectionObserver` e identificar qual seção deve ser destacada como ativa na Navbar.

Durante a análise, foram identificados dois pontos principais relacionados ao comportamento do hook:

* a forma como o estado de visibilidade das seções era determinado a partir das `entries` do `IntersectionObserver`;
* a configuração de `rootMargin`, que fazia com que algumas seções não fossem consideradas visíveis no momento esperado.

![Barra de navegação destacando seção errada](navbar_highlighting_wrong_sectionscreenshot.png)

A imagem acima mostra a seção `Laboratórios`, porém a barra de navegação destaca `Diferenciais`.

## `useActiveSection.ts`

### Uso de `Map` para controlar a visibilidade das seções

A implementação original utilizava diretamente as `entries` recebidas pelo `IntersectionObserver` para determinar a seção mais visível:

```ts
const visible = entries
  .filter((entry) => entry.isIntersecting)
  .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
```

O problema dessa abordagem é que `entries` não representa necessariamente todas as seções observadas. O callback recebe as entradas cujo estado de interseção foi alterado, portanto uma seção que continua visível pode não estar presente no callback atual.

Isso poderia fazer com que o hook analisasse apenas parte das seções que estavam efetivamente visíveis.

Para manter o estado atual de todas as seções, foi criado um `Map` contendo o `id` de cada seção e seu respectivo `intersectionRatio`:

```ts
const mapVisible = new Map<string, number>();

elements.forEach((el) => {
  mapVisible.set(el.id, 0);
});
```

Cada `entry` recebida pelo observer atualiza o valor correspondente no `Map`:

```ts
entries.forEach((entry) => {
  const id = entry.target.id;

  mapVisible.set(
    id,
    entry.isIntersecting ? entry.intersectionRatio : 0,
  );
});
```

Depois, todas as seções armazenadas no `Map` são analisadas para encontrar aquela com maior `intersectionRatio`:

```ts
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
```

Essa alteração fez com que o hook passasse a considerar o estado conhecido de todas as seções, e não somente as `entries` recebidas no callback atual.

Entretanto, **essa alteração não resolveu completamente o problema da Navbar**. O problema continuou ocorrendo, embora com menos frequência.

### Remoção do `rootMargin`

O problema principal identificado na Navbar acontecia quando determinadas seções eram visualmente alcançadas durante a rolagem, mas não eram marcadas como ativas.

A configuração original utilizava:

```ts
rootMargin: '-15% 0px -55% 0px',
```

O `rootMargin` negativo reduzia a área da viewport considerada pelo `IntersectionObserver`. Dessa forma, uma seção podia estar visível na tela, mas ainda estar fora da área efetivamente observada.

Consequentemente, o observer poderia continuar considerando a seção anterior como ativa enquanto a próxima seção já estava visualmente presente na viewport.

Esse comportamento era especialmente perceptível ao navegar para determinadas seções através da Navbar.

A remoção do `rootMargin` fez com que o `IntersectionObserver` utilizasse a viewport inteira como área de observação:

```ts
rootMargin: '0px',
```

Após essa alteração, as seções passaram a ser detectadas assim que entravam na viewport.

Essa foi a alteração que **resolveu completamente o problema de a Navbar destacar a seção errada**.

Portanto, é importante distinguir os efeitos das duas alterações:

```text
Map
 ↓
mantém o estado de visibilidade das seções
 ↓
reduz a ocorrência de seleções incorretas


Remoção do rootMargin
 ↓
faz com que as seções sejam detectadas no momento correto
 ↓
resolve o problema da Navbar
```

## Resultado

O hook passou a:

* manter o estado de visibilidade das seções através de um `Map`;
* comparar o `intersectionRatio` armazenado para determinar a seção mais visível;
* utilizar a viewport inteira como área de observação;
* detectar as seções no momento em que elas entram efetivamente na viewport;
* resolver o problema da Navbar destacar uma seção incorreta durante a navegação;

As duas principais alterações tiveram objetivos diferentes: o `Map` melhorou a consistência da determinação da seção mais visível, enquanto a remoção do `rootMargin` foi responsável por corrigir definitivamente o problema de detecção das seções na Navbar.
