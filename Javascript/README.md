# Javascript

<br>

## 🔹 Variáveis

| Característica | `var` | `let` | `const` |
|---|---|---|---|
| Pode mudar valor | ✅ | ✅ | ❌ |
| Pode redeclarar | ✅ | ❌ | ❌ |
| Escopo de bloco | ❌ | ✅ | ✅ |

<br>

### Exemplos:
---
**Limitação de escopo**
**Diferença entre `var` e `let`:**
```

	for(var i = 0; i <= 2; i++) {
		console.log(i);
	}
	
	console.log(i);

	// Isso roda
	// var não se limita ao escopo
	
	// Agora se:

	for(let i = 0; i <= 2; i++) {
		console.log(i);
	}
	
	console.log(i);

	// Isso dá erro no console.log fora do escopo
	// let se limita ao escopo
	
```
---
**Redeclaração:**
```

	var a = 100;
	var a = 200;
	
	// Isso roda
	// var permite redeclaração
	
	// Agora se:

	let b = 100;
	let b = 200;
	
	// ou
	
	const c = 100;
	const c = 200;
	
	// Isso dá erro
	// let e const não permitem redeclaração
	
```
---
**Mudança de valor:**
```

	var a = 100;
	a = 200;

	// ou

	let b = 100;
	b = 200;
	
	// Isso roda
	// var e let permitem mudança de valor
	
	// Agora se:
	
	const c = 100;
	c = 200;
	
	// Isso dá erro
	// const não permite mudança de valor
	
```
---
<br>


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
| `Symbol` | identificado único | `Symbol('id')` |
| `Object` | Estrutura de dados chave e valor | `{ nome: "Nicolas" }` |


<br>

---

## 🔹Operadores aritméticos

| Operador | Função | Exemplo |
|---|---|---|
| `+` | Adição | `10 + 5` |
| `-` | Subtração | `10 - 5` |
| `*` | Multiplicação | `10 * 5` |
| `/` | Divisão | `10 / 5` |
| `%` | Resto da divisão | `10 % 3` |
| `**` | Exponenciação | `2 ** 3` |

<br>

## 🔹Operadores de comparação

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

## 🔹 Operadores unários

| Operador | Função | Exemplo | Resultado |
|---|---|---|---|
| `++` | Incrementa 1 | `x++` | `x + 1` |
| `--` | Decrementa 1 | `x--` | `x - 1` |
| `+` | Converte para número | `+"10"` | `10` |
| `-` | Inverte o sinal | `10` | `-10` |
| `!` | Inverte booleano | `!true` | `false` |
| `typeof` | Retorna o tipo | `typeof "JS"` | `"string"` |


---

<br>

## 🔹Condicionais

| Estrutura | Função | Exemplo |
|---|---|---|
| `if` | Executa se a condição for verdadeira | `if (idade >= 18)` |
| `else` | Executa se a condição anterior for falsa | `else` |
| `else if` | Testa uma nova condição | `else if (idade >= 16)` |
| `switch` | Compara um valor com diferentes casos | `switch (opcao)` |
| `case` | Define um caso no `switch` | `case 1:` |


---

<br>

## 🔹 Laços de Repetição

| Estrutura | Função | Exemplo |
|---|---|---|
| `for` | Repete enquanto a condição for atendida | `for (let i = 0; i < 5; i++)` |
| `while` | Repete enquanto a condição for verdadeira | `while (x < 5)` |
| `do...while` | Executa pelo menos uma vez antes de verificar a condição | `do { } while (x < 5)` |
| `for...of` | Percorre os valores de um iterável | `for (let item of lista)` |
| `for...in` | Percorre as propriedades de um objeto | `for (let chave in objeto)` |


---

<br>




## 🔹Parâmetros e Argumentos

<br>

|Parâmetro| Argumento |
|--|--|
| Variáveis que a função recebe | Valores que são enviadas para a função quando é chamada |

**Exemplos:**

```

	function soma(a, b) {	// A e B são parametros da função
		return a + b;
	};

	soma(5, 10); // 5 e 10 são argumentos da função

```

---

<br>

## 🔹Callback e HOF

<br>

|Callback| Higher-Order-Function |
|--|--|
| Função que é passada como argumento para outra função | Função que recebe ou retorna uma função |

**Exemplos:**

```

	function executar(acao) { // acao é parametro da função executar()
		acao();
	};

	function saudacao() {
		console.log('Olá');
	};

	executar(saudacao) // saudacao() é argumento da função executar()

	// executar() é uma HOF 
	// pois recebe uma função como argumento

	// saudacao() é uma callback, 
	// pois é passadda como argumento para a função executar()

```

---

<br>

## 🔹Spread Operator

|Spread Operator| Explicação |
|--|--|
| `...` | Copia propriedades de um objeto ou elementos e um array  |

### Exemplos
---
**Para objetos:**

```

	const usuario = {
		nome: "Nicolas",
		idade: 21
	};
	

	const novoUsuario = {
		...usuario,	// copia objeto usuario para o objeto atual
		cidade: "Brasilia" // Adiciona uma nova chave valor ao objeto atual
	};

```
---

**Para arrays:**

```

	const frutas = ['maça', 'banana', 'uva'];

	const novasFrutas = [
		...frutas,	// copia o array frutas para o array atual
		'manga',		// adiciona novos elementos ao array atual
		'morango'
	]

```

<br>

## Rest Operator

|Rest Operator| Explicação |
|--|--|
| `...` | Reune valores restantes de uma variável |

### Exemplos
---
**Em funções:**

```

	function  somar(...numeros)  {
		let  total  =  0;

		for (const  numero  of  numeros) {
			total  +=  numero;
		}
		return  total;
	}

	  

	console.log(somar(100,  25,  30,  40,  0));

```

```

	function  apresentar(nome, ...hobbies) { 
		console.log(nome); 		
		console.log(hobbies);  
	} 

	apresentar( 
		"Nicolas", 
		"Programar", 
		"Jogar", 
		"Ouvir música" 
	);
	
	// nome: "Nicolas"
	// hobbies: "Porgramar", "Ouvir música"


```

<br>

## 🔹Destructuring

|Destructuring| Explicação |
|--|--|
| `{...} ou [...]` | Permite extrair valores de objetos ou arrays e atribuí-los diretamente a variáveis |

### Exemplos:
**Com objetos:**

```

	const usuario = {
	    nome: "Nicolas",
	    idade: 21,
	    cidade: "Brasília"
	};
	
	// Sem destructuring
	
	const nome = usuario.nome;
	const idade = usuario.idade;


	// Com destructuring
	
	const { nome, idade } = usuario;

```


**Com arrays:**
```

	const frutas = ['maça, 'banana', 'uva'];
	
	const [ primeiro, segundo  ] = frutas;

```