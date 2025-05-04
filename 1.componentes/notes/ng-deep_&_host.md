
# 🔍 O que é `::ng-deep` no Angular?

O `::ng-deep` é uma pseudo-classe usada no Angular para **forçar que um estilo CSS ultrapasse o encapsulamento de componentes** e afete elementos filhos de componentes filhos.

Por padrão, o Angular usa o **ViewEncapsulation**, o que significa que os estilos de um componente **não afetam elementos fora dele**, nem mesmo componentes filhos. O `::ng-deep` serve para **furar esse bloqueio**.

---

## 🧠 Por que usar?

Imagine que você tem um componente pai que usa um componente filho de uma biblioteca (por exemplo, `mat-select` do Angular Material) e você quer mudar o estilo interno desse componente filho. O Angular normalmente não permite isso — a menos que você use `::ng-deep`.

---

## ✅ Exemplo simples

### Suponha o seguinte HTML:

```html
<app-meu-componente>
  <mat-select>
    <mat-option>Opção 1</mat-option>
  </mat-select>
</app-meu-componente>
```

### E você quer mudar a cor das opções (`mat-option`) no CSS do `app-meu-componente`.

```css
::ng-deep mat-option {
  color: red;
}
```

💥 Isso vai aplicar a cor vermelha para o texto de `mat-option`, mesmo sendo um componente de fora.

---

## ⚠️ Aviso Importante

O `::ng-deep` está **obsoleto** (deprecated) e pode ser **removido em versões futuras** do Angular. A recomendação oficial é:

* Preferir passar estilos por meio de **classes customizadas** e **Inputs**.
* Usar a abordagem de estilos globais, se necessário, em `styles.scss`.

---

## 🎯 Vantagens e Desvantagens do `::ng-deep`

### ✅ Vantagens

* Permite aplicar estilos em componentes de bibliotecas externas.
* Útil quando não é possível modificar diretamente o CSS do componente filho.
* Rápido para aplicar customizações visuais pontuais.

### ❌ Desvantagens

* Está obsoleto e poderá ser removido no futuro.
* Pode causar confusão e dificultar manutenção do CSS.
* Quebra o encapsulamento de estilos — o que pode gerar conflitos.
* Pode ser difícil rastrear os efeitos em componentes mais complexos.

---

## 🧩 E o que é `:host`?

O `:host` é outra pseudo-classe muito útil no Angular. Ele permite aplicar estilos **diretamente ao elemento do componente**, ou seja, o elemento que representa o componente no HTML externo.

---

### 💡 Exemplo de uso de `:host`

Vamos supor que temos um componente `app-botao`.

```html
<!-- No HTML do pai -->
<app-botao></app-botao>
```

No CSS de `app-botao.component.css`, você pode fazer:

```css
:host {
  display: block;
  background-color: blue;
}
```

✅ Isso aplica o estilo ao elemento `<app-botao>`, não aos elementos internos dele.

---

### 🔗 Combinar `:host` com seletores internos

Você também pode combinar `:host` com outras regras:

```css
:host(.destaque) {
  border: 2px solid orange;
}
```

📝 Isso aplica o estilo apenas quando o componente tiver a classe `.destaque` no HTML externo.

---

## 💡 Alternativas ao `::ng-deep`

1. **Estilos globais** (`styles.scss`):

   ```scss
   mat-option {
     color: red;
   }
   ```

2. **Usar encapsulamento None**:

   ```ts
   @Component({
     ...
     encapsulation: ViewEncapsulation.None
   })
   ```

   ⚠️ Cuidado: isso torna o CSS do componente global, perdendo o isolamento de estilos.

---

## 📌 Conclusão

* `::ng-deep` permite aplicar estilos atravessando o encapsulamento, mas está obsoleto.
* `:host` serve para estilizar o próprio elemento do componente.
* Prefira boas práticas e alternativas modernas sempre que possível para manter o projeto sustentável.

