Claro! Aqui está uma versão **mais clara, simples e direta**, com exemplos somente em **HTML**, como você pediu. Isso vai facilitar a compreensão para quem está começando com Angular e quer entender `ng-content` de forma prática.

---

# Projeção de Conteúdo no Angular com `ng-content`

## O que é `ng-content`?

`ng-content` é uma forma de passar **conteúdo personalizado** de fora para dentro de um componente.

É como um **"slot"** onde você insere conteúdo externo.

---

## Exemplo básico

### Componente:

```html
<!-- card.component.html -->
<div class="card">
  <ng-content></ng-content>
</div>
````

### Uso:

```html
<app-card>
  <p>Esse texto aparece dentro do card!</p>
</app-card>
```

Resultado: o `<p>` será exibido **dentro do `div.card`** do componente `app-card`.

---

## Projeção com `select` (projeção múltipla)

Você pode usar **múltiplos `ng-content`** com `select` para projetar conteúdo em locais específicos.

### Componente:

```html
<!-- painel.component.html -->
<div class="painel">
  <header>
    <ng-content select="[header]"></ng-content>
  </header>
  <section>
    <ng-content select="[body]"></ng-content>
  </section>
  <footer>
    <ng-content select="[footer]"></ng-content>
  </footer>
</div>
```

### Uso:

```html
<app-painel>
  <div header>Esse é o cabeçalho</div>
  <div body>Esse é o conteúdo</div>
  <div footer>Esse é o rodapé</div>
</app-painel>
```

---

## Tipos de `select` que você pode usar

| Tipo de seletor | Exemplo                  | O que seleciona                      |
| --------------- | ------------------------ | ------------------------------------ |
| Elemento        | `select="p"`             | Todos os `<p>`                       |
| Classe          | `select=".meu-estilo"`   | Elementos com a classe CSS           |
| Atributo        | `select="[header]"`      | Elementos com esse atributo          |
| Atributo+valor  | `select="[tipo='info']"` | Elementos com atributo igual a valor |
| Vários tipos    | `select="h1, h2"`        | Combina vários tipos                 |

---

## Dica importante

Se algum conteúdo **não combina com nenhum `select`**, ele **não aparece**. Para capturar o "resto", adicione um `ng-content` **sem `select`**:

```html
<ng-content></ng-content>
```

---

## Conclusão

* `ng-content` permite passar conteúdo de fora para dentro de um componente.
* Com `select`, você escolhe onde cada parte do conteúdo vai aparecer.
* Ideal para criar componentes flexíveis como **cards, painéis, modais, abas**, etc.
