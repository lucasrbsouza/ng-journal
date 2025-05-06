# Guia Prático de Angular: Template Variables e @ViewChild/@ViewChildren

Este guia explica de forma simples e com exemplos práticos os conceitos fundamentais de Template Variables e os decorators `@ViewChild` e `@ViewChildren` no Angular.

---

## ✅ Criar Template Variables

**O que é:**  
Uma Template Variable é uma referência local a um elemento DOM ou componente, definida no template HTML.

**Como usar:**
```html
<input #meuInput type="text">
<button (click)="mostrarValor(meuInput.value)">Mostrar</button>
````

**Quando usar:**
Quando você precisa acessar um valor de input ou elemento no próprio template, sem precisar manipulá-lo diretamente no TypeScript.

---

## 🔍 Analisar o escopo de um Template Variable

**Escopo:**
Template Variables só estão acessíveis no mesmo template onde foram declaradas.

```html
<!-- Funciona -->
<input #inputExemplo>
<p>{{ inputExemplo.value }}</p>

<!-- Não funciona em outro componente filho ou diretiva -->
<meu-componente></meu-componente>
```

**Quando lembrar disso:**
Se precisar acessar a variável fora do template atual, será necessário usar `@ViewChild` no TypeScript.

---

## 📤 Passar um Template Variable como parâmetro para a classe do componente

**Como fazer:**

```html
<input #meuInput type="text">
<button (click)="logValor(meuInput)">Logar</button>
```

**No componente:**

```ts
logValor(input: HTMLInputElement) {
  console.log(input.value);
}
```

**Quando usar:**
Para interagir com elementos diretamente, como inputs ou divs, sem necessidade de criar propriedades no componente.

---

## 👁️ Utilizar o Decorator `@ViewChild` para acessar a instância de um elemento HTML

**Como usar:**

```html
<input #meuInput type="text">
```

**No componente:**

```ts
@ViewChild('meuInput') inputRef!: ElementRef;

ngAfterViewInit() {
  this.inputRef.nativeElement.focus();
}
```

**Quando usar:**
Quando precisa manipular elementos DOM diretamente no código (ex: dar foco, ler propriedades).

---

## 🧩 Acessar a instância de componentes filhos com `@ViewChild`

**Exemplo:**

```html
<app-filho #componenteFilho></app-filho>
```

**No componente pai:**

```ts
@ViewChild('componenteFilho') filho!: AppFilhoComponent;

ngAfterViewInit() {
  this.filho.metodoDoFilho();
}
```

**Quando usar:**
Quando você precisa chamar métodos ou acessar propriedades de um componente filho.

---

## ⚙️ Utilizar a configuração `"static"` do `@ViewChild`

**Opções:**

* `static: true`: a variável é resolvida antes do `ngAfterViewInit`.
* `static: false` (padrão): é resolvida depois da renderização.

**Exemplo:**

```ts
@ViewChild('meuInput', { static: true }) input!: ElementRef;
```

**Quando usar:**

* Use `static: true` se precisar acessar a referência no `ngOnInit`.
* Use `static: false` se só precisa acessar após a view estar carregada (em `ngAfterViewInit`).

---

## 📑 Acessar múltiplas instâncias de elementos HTML com `@ViewChildren`

**Exemplo:**

```html
<input #campo *ngFor="let item of lista">
```

**No componente:**

```ts
@ViewChildren('campo') campos!: QueryList<ElementRef>;

ngAfterViewInit() {
  this.campos.forEach(campo => {
    console.log(campo.nativeElement.value);
  });
}
```

**Quando usar:**
Quando tem vários elementos do mesmo tipo (ex: inputs, botões) e precisa manipulá-los em conjunto.

---

## 🛠️ Métodos de manipulação da lista de instâncias do `@ViewChildren`

**Principais métodos de `QueryList`:**

* `.forEach(callback)`: itera sobre todos os elementos.
* `.first`: retorna o primeiro elemento.
* `.last`: retorna o último elemento.
* `.changes`: observable que emite quando a lista muda.

**Exemplo:**

```ts
this.campos.changes.subscribe(novaLista => {
  console.log('Lista atualizada:', novaLista);
});
```

**Quando usar:**
Quando os elementos HTML são dinâmicos (como com `*ngFor`) e você precisa responder a mudanças ou interagir com vários ao mesmo tempo.

---

📌 **Resumo Final:**

| Recurso                   | Quando usar                               |
| ------------------------- | ----------------------------------------- |
| Template Variable         | Acessos simples no template               |
| `@ViewChild`              | DOM fixo ou componente filho único        |
| `@ViewChildren`           | Vários elementos DOM ou filhos            |
| `static: true`            | Quando precisa antes de `ngAfterViewInit` |
| `.changes` em `QueryList` | Monitorar mudanças em tempo real          |

---
