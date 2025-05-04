# 🅰️ Guia Simples e Completo de Angular: Componentes, Bindings e Comunicação

## 🔹 1. Componentes

### O que são?

Componentes são os **blocos de construção principais** de uma aplicação Angular. Cada componente representa uma parte da interface do usuário (UI) e pode ser **reutilizado** em várias partes da aplicação.

### Estrutura básica de um componente

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Olá, Angular!</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha Aplicação Angular';
}
```

### Quando usar?

Sempre que precisar criar uma nova seção da interface, crie um componente. Exemplo: menu, cabeçalho, formulário de login, etc.

---

## 🔹 2. Property Binding

### O que é?

Permite **ligar** uma propriedade do componente a uma **propriedade de um elemento HTML**.

### Sintaxe:

```html
<img [src]="imagemUrl" />
```

### Exemplo:

```typescript
// component.ts
imagemUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
```

```html
<!-- template.html -->
<img [src]="imagemUrl" alt="Logo do Angular">
```

### Quando usar?

Use quando quiser atualizar dinamicamente um valor de **propriedade HTML** com base no TypeScript (ex: `src`, `disabled`, `value`, etc).

---

## 🔹 3. Event Binding

### O que é?

Permite **responder a eventos do usuário**, como cliques ou digitação, e executar funções do componente.

### Sintaxe:

```html
<button (click)="dizerOla()">Clique aqui</button>
```

### Exemplo:

```typescript
// component.ts
dizerOla() {
  alert('Olá!');
}
```

### Quando usar?

Sempre que quiser **responder a interações do usuário**, como cliques, teclas, foco, etc.

---

## 🔹 4. Attribute Binding

### O que é?

Permite **definir atributos HTML que não são diretamente propriedades DOM**, como `aria-*`, `role`, `colspan`, etc.

### Sintaxe:

```html
<td [attr.colspan]="colunas"></td>
```

### Exemplo:

```typescript
// component.ts
colunas = 2;
```

```html
<td [attr.colspan]="colunas">Dado da tabela</td>
```

### Quando usar?

Quando o atributo **não é uma propriedade nativa** de DOM, como `aria-label`, `colspan`, etc.

---

## 🔹 5. Style Binding

### O que é?

Permite aplicar **estilos CSS diretamente** a um elemento com base nos valores do componente.

### Sintaxe:

```html
<div [style.backgroundColor]="corFundo"></div>
```

### Exemplo:

```typescript
corFundo = 'lightblue';
```

```html
<div [style.background-color]="corFundo">Caixa colorida</div>
```

### Quando usar?

Quando quiser aplicar **estilos dinamicamente**, dependendo de valores no TypeScript.

---

## 🔹 6. Class Binding

### O que é?

Permite adicionar **classes CSS dinamicamente** a um elemento.

### Sintaxe:

```html
<div [class.alert]="mostrarAlerta"></div>
```

### Exemplo:

```typescript
mostrarAlerta = true;
```

```css
.alert {
  color: red;
  font-weight: bold;
}
```

```html
<div [class.alert]="mostrarAlerta">Atenção!</div>
```

### Quando usar?

Use para adicionar ou remover **classes CSS com base em condições** no componente.

---

## 🔹 7. @Input() – Comunicação Pai → Filho

### O que é?

Permite que um **componente filho receba dados** do componente pai.

### Exemplo:

#### Componente Pai

```html
<app-filho [mensagem]="mensagemParaFilho"></app-filho>
```

```typescript
mensagemParaFilho = 'Olá do Pai!';
```

#### Componente Filho

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  template: `<p>{{ mensagem }}</p>`
})
export class FilhoComponent {
  @Input() mensagem: string;
}
```

### Quando usar?

Quando o **pai precisa passar dados para o filho**, como textos, números, objetos, etc.

---

## 🔹 8. @Output() + EventEmitter – Comunicação Filho → Pai

### O que é?

Permite que o **componente filho envie dados ou eventos de volta** para o componente pai.

### Exemplo:

#### Componente Filho

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  template: `<button (click)="enviarMensagem()">Enviar</button>`
})
export class FilhoComponent {
  @Output() mensagemEnviada = new EventEmitter<string>();

  enviarMensagem() {
    this.mensagemEnviada.emit('Olá do Filho!');
  }
}
```

#### Componente Pai

```html
<app-filho (mensagemEnviada)="receberMensagem($event)"></app-filho>
```

```typescript
receberMensagem(msg: string) {
  alert(msg);
}
```

### Quando usar?

Quando o **filho precisa avisar ou enviar algo para o pai**, como cliques, formulários submetidos, etc.

---

## ✅ Conclusão

| Recurso                      | Comunicação | Direção     | Usado para                                |
| ---------------------------- | ----------- | ----------- | ----------------------------------------- |
| `@Input()`                   | Dados       | Pai → Filho | Passar valores do componente pai ao filho |
| `@Output()` + `EventEmitter` | Eventos     | Filho → Pai | Informar o pai de ações do filho          |
| `Property Binding`           | Dados       | TS → HTML   | Propriedades de elementos HTML            |
| `Event Binding`              | Ações       | HTML → TS   | Reagir a eventos do usuário               |
| `Attribute Binding`          | Atributos   | TS → HTML   | Atributos não-DOM                         |
| `Style Binding`              | Estilos     | TS → HTML   | Estilizar dinamicamente                   |
| `Class Binding`              | Classes     | TS → HTML   | Aplicar classes dinamicamente             |

