# Javascript

<br>

## 🔹 Variáveis

| Característica | `var` | `let` | `const` |
|---|---|---|---|
| Pode mudar valor | ✅ | ✅ | ❌ |
| Pode redeclarar | ✅ | ❌ | ❌ |
| Escopo de bloco | ❌ | ✅ | ✅ |

<br>

---

<br>

## 🔹 Tipos de Valores

| Tipo | Descrição | Exemplo |
|---|---|---|
| `String` | Texto | `"Olá"` |
| `Number` | Números | `42`, `3.14` |
| `BigInt` | Inteiros muito grandes | `123n` |
| `Boolean` | Verdadeiro ou falso | `true` |
| `Undefined` | Valor não definido | `undefined` |
| `Null` | Ausência de valor | `null` |
| `Symbol` | Identificador único | `Symbol("id")` |
| `Object` | Estrutura de dados | `{ nome: "Nicolas" }` |


<br>

---

<br>

## 🔹 Operadores

### Aritméticos

| Operador | Função | Exemplo |
|---|---|---|
| `+` | Adição | `10 + 5` |
| `-` | Subtração | `10 - 5` |
| `*` | Multiplicação | `10 * 5` |
| `/` | Divisão | `10 / 5` |
| `%` | Resto da divisão | `10 % 3` |
| `**` | Exponenciação | `2 ** 3` |
| `++` | Incremento | `x++` |
| `--` | Decremento | `x--` |

<br>

### Comparação

| Operador | Função | Exemplo |
|---|---|---|
| `==` | Igualdade | `5 == "5"` |
| `===` | Igualdade estrita | `5 === "5"` |
| `!=` | Diferente | `5 != "5"` |
| `!==` | Diferente estrito | `5 !== "5"` |
| `>` | Maior que | `10 > 5` |
| `<` | Menor que | `5 < 10` |
| `>=` | Maior ou igual | `10 >= 10` |
| `<=` | Menor ou igual | `5 <= 10` |

<br>

### Unários

| Operador | Função | Exemplo | Resultado |
|---|---|---|---|
| `++` | Incrementa 1 | `x++` | `x + 1` |
| `--` | Decrementa 1 | `x--` | `x - 1` |
| `+` | Converte para número | `+"10"` | `10` |
| `-` | Inverte o sinal | `-10` | `-10` |
| `!` | Inverte booleano | `!true` | `false` |
| `typeof` | Retorna o tipo | `typeof "JS"` | `"string"` |

<br>

---

<br>

# Condicionais

| Estrutura | Função | Exemplo |
|---|---|---|
| `if` | Executa se a condição for verdadeira | `if (idade >= 18)` |
| `else` | Executa se a condição anterior for falsa | `else` |
| `else if` | Testa uma nova condição | `else if (idade >= 16)` |
| `switch` | Compara um valor com diferentes casos | `switch (opcao)` |
| `case` | Define um caso no `switch` | `case 1:` |

<br>

---

<br>

# Laços de Repetição

| Estrutura | Função | Exemplo |
|---|---|---|
| `for` | Repete enquanto a condição for atendida | `for (let i = 0; i < 5; i++)` |
| `while` | Repete enquanto a condição for verdadeira | `while (x < 5)` |
| `do...while` | Executa pelo menos uma vez antes de verificar a condição | `do { } while (x < 5)` |
| `for...of` | Percorre os valores de um iterável | `for (let item of lista)` |
| `for...in` | Percorre as propriedades de um objeto | `for (let chave in objeto)` |


<br>

---

<br>

# Conceitos Importantes

### Callback

| Conceito | Descrição | Exemplo |
|---|---|---|
| `Callback` | Função passada como argumento para outra função | `executar(minhaFuncao)` |

<br>

### HOF (Higher-Order Function)

| Conceito | Descrição | Exemplo |
|---|---|---|
| `HOF` | Função que recebe ou retorna outra função | `function executar(fn) { fn(); }` |

<br>

### Spread Operator

| Operador | Função | Exemplo |
|---|---|---|
| `...` | Expande elementos de arrays ou propriedades de objetos | `[...lista]` |

**Exemplo:**

```javascript
const numeros = [1, 2, 3];

const copia = [...numeros];
```

```javascript
const pessoa = {
    nome: "Nicolas",
    sobrenome: "Canabarro",
};

const copia = {
    ...pessoa,
    idade: 21
};
```

<br>

### Rest Operator

| Operador | Função | Exemplo |
|---|---|---|
| `...` | Agrupa os valores restantes em um array ou objeto | `const { nome, ...resto } = pessoa` |

**Exemplo:**

```javascript
const pessoa = {
    nome: "Nicolas",
    idade: 21,
    cidade: "Brasília",
    profissao: "Desenvolvedor"
};

const { nome, ...resto } = pessoa;

console.log(nome);
console.log(resto);
```

<br>

### Destructuring

| Sintaxe | Função | Exemplo |
|---|---|---|
| `{}` | Extrai propriedades de objetos | `const { nome } = pessoa` |
| `[]` | Extrai valores de arrays | `const [a, b] = numeros` |




