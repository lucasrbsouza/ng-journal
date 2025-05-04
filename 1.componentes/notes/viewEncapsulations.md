# 🧩 Diferenças entre os tipos de `ViewEncapsulation` no Angular

O Angular oferece três estratégias de **View Encapsulation** para controlar como os estilos CSS se aplicam aos componentes.

Essas estratégias afetam **como o Angular trata o CSS** de cada componente — se ele deve se aplicar somente ao próprio componente ou "vazar" para fora.

---

## 🔧 Tipos de `ViewEncapsulation`

### 1. **Emulated (padrão)**

> Essa é a configuração padrão usada pelo Angular.

```ts
@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
```

#### ✅ O que faz:

* Encapsula os estilos **imitando Shadow DOM** com atributos gerados automaticamente.
* Os estilos são aplicados **apenas dentro do componente**.
* Angular adiciona um seletor de atributo automaticamente no HTML e CSS, por exemplo: `_ngcontent-xyz`.

#### 🟢 Vantagens:

* Estilos isolados.
* Compatível com todos os navegadores.
* Seguro para projetos grandes.

#### 🔴 Desvantagens:

* Não permite aplicar estilos em componentes filhos sem hacks como `::ng-deep`.

---

### 2. **None**

```ts
@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css'],
  encapsulation: ViewEncapsulation.None
})
```

#### ✅ O que faz:

* **Remove completamente o encapsulamento**.
* Os estilos se tornam **globais** e afetam qualquer parte da aplicação.

#### 🟢 Vantagens:

* Simples para aplicar estilos que precisam ser globais.
* Útil para criar bibliotecas de estilo base.

#### 🔴 Desvantagens:

* Pode causar conflitos de CSS entre componentes.
* Diminui a manutenção e a escalabilidade do projeto.

---

### 3. **ShadowDom**

```ts
@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
```

#### ✅ O que faz:

* Usa o **Shadow DOM nativo** do navegador para encapsular o componente.
* Os estilos são 100% isolados, como em Web Components reais.

#### 🟢 Vantagens:

* Total isolamento de CSS — sem interferência externa.
* Boa prática para Web Components e bibliotecas reutilizáveis.

#### 🔴 Desvantagens:

* Compatibilidade limitada em navegadores antigos.
* Nem todos os estilos globais (ex: CSS frameworks) funcionam como esperado.

---

## 🧪 Comparativo rápido

| Tipo        | Estilo isolado? | Funciona em todos os navegadores? | Estilo global? | Observações                       |
| ----------- | --------------- | --------------------------------- | -------------- | --------------------------------- |
| `Emulated`  | ✅ Sim           | ✅ Sim                             | ❌ Não          | Padrão do Angular                 |
| `None`      | ❌ Não           | ✅ Sim                             | ✅ Sim          | Pode causar conflitos             |
| `ShadowDom` | ✅ Sim (nativo)  | ⚠️ Parcial (alguns antigos não)   | ❌ Não          | Usa tecnologias do Web Components |

---

## 📌 Quando usar cada um?

| Situação                                       | Melhor escolha       |
| ---------------------------------------------- | -------------------- |
| Aplicação comum Angular                        | `Emulated` (padrão)  |
| Precisa de estilo global (ex: tema principal)  | `None` (com cuidado) |
| Criando Web Components ou bibliotecas isoladas | `ShadowDom`          |

---

## 🧠 Dica Final

Você pode importar o `ViewEncapsulation` assim:

```ts
import { ViewEncapsulation } from '@angular/core';
```

E aplicar conforme necessário em cada componente. Use com sabedoria para garantir uma arquitetura limpa e fácil de manter.
