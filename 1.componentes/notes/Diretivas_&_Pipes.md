# 📚 Conceitos Fundamentais do Angular

Este documento aborda alguns dos conceitos mais importantes do Angular de forma clara e simples, facilitando o aprendizado e aplicação prática no desenvolvimento de aplicações web com essa poderosa framework.

---

## 🔁 Código Duplicado e Componentização

### ❗ Problema: Código Duplicado

Repetir o mesmo código em diferentes partes do projeto causa:

* Dificuldade na manutenção
* Aumento de erros
* Pouca reutilização

### ✅ Solução: Componentização

**Componentes** são partes reutilizáveis da interface. Com eles, podemos:

* Reutilizar estruturas de HTML e lógica de forma eficiente
* Reduzir a duplicação de código
* Facilitar a manutenção

📌 **Exemplo:**

```ts
// componente reutilizável: botão
@Component({
  selector: 'app-botao',
  template: `<button class="btn">{{ texto }}</button>`
})
export class BotaoComponent {
  @Input() texto: string = '';
}
```

---

## 🔁 Two-Way Data Binding

### 🔄 O que é?

É a **ligação bidirecional de dados** entre o **template HTML** e a **classe do componente**.

✅ **Vantagens:**

* Atualizações em tempo real
* Menos código para sincronizar dados

📌 **Sintaxe:**

```html
<input [(ngModel)]="nome" />
<p>Olá, {{ nome }}</p>
```

📌 **Explicação:**
Ao digitar no input, o valor de `nome` é atualizado automaticamente na classe, e vice-versa.

---

## 🧩 Diretiva `*ngIf`

### ❓ O que é?

Permite **mostrar ou esconder elementos** do HTML com base em uma condição.

📌 **Exemplo:**

```html
<p *ngIf="logado">Bem-vindo!</p>
```

📌 **Explicação:**
O parágrafo só aparece se a variável `logado` for `true`.

---

## 🔁 Diretiva `*ngFor`

### 📚 O que é?

Permite **iterar sobre listas** e criar um elemento para cada item.

📌 **Exemplo:**

```html
<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
```

📌 **Explicação:**
Cada item da `lista` será exibido como um `<li>` no HTML.

---

## 🎨 NgStyle e NgClass

### 🎨 NgStyle

Aplica **estilos CSS dinamicamente**.

📌 **Exemplo:**

```html
<p [ngStyle]="{ color: corTexto }">Texto colorido</p>
```

### 🎭 NgClass

Adiciona **classes CSS dinamicamente**.

📌 **Exemplo:**

```html
<p [ngClass]="{ 'ativo': estaAtivo }">Texto com classe</p>
```

📌 **Explicação:**
Se `estaAtivo` for `true`, a classe `ativo` será aplicada ao parágrafo.

---

## 🧪 Pipes

### 🔧 O que são?

**Pipes** são **ferramentas para transformar valores** diretamente no template.

📌 **Exemplos comuns:**

```html
<p>{{ preco | currency:'BRL' }}</p>
<p>{{ hoje | date:'shortDate' }}</p>
<p>{{ nome | uppercase }}</p>
```

📌 **Explicação:**

* `currency`: formata como moeda
* `date`: formata data
* `uppercase`: transforma em letras maiúsculas

---

## ✅ Conclusão

Esses conceitos são essenciais para criar aplicações Angular organizadas, dinâmicas e eficientes. Ao dominar diretivas, pipes e data binding, você estará apto a construir interfaces ricas e reutilizáveis com facilidade.
