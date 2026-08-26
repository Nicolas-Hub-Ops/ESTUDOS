/*----------------------------------------------------------------------------------------------*/


// Variáveis

const pi = 3.14;    // const --> quando o valor não deve mudar

var variavel = 1;   // var --> permite acesso fora do escopo e redeclaração
let valor = 1;      // let --> não permite redeclaração e limitada ao escopo

// Isso roda:

//for (var i = 1; i <= 2; i++) {
//    console.log(`indice dentro do escopo: ${i}`)
//}
//console.log(`indice fora do escopo: ${i}`)

// Isso não:

//for (let i = 1; i <= 2; i++) {
//    console.log(`indice dentro do escopo: ${i}`)
//}
//console.log(`indice fora do escopo: ${i}`)

/*----------------------------------------------------------------------------------------------*/

// Tipos

let tipo0;                  // undefined => valor ainda não definido
let tipo1 = null;           // null => ausencia intencional de valor
let tipo2 = 'texto';        // string => valor de texto
let tipo3 = 100;            // number => valor numérico
let tipo4 = true;           // boolean => valor true ou false

console.log('\nTipos de valores:')
console.log(`Tipo: ${typeof tipo0}, valor: ${tipo0}`)
console.log(`Tipo: ${typeof tipo1}, valor: ${tipo1}`)
console.log(`Tipo: ${typeof tipo2}, valor: ${tipo2}`)
console.log(`Tipo: ${typeof tipo3}, valor: ${tipo3}`)
console.log(`Tipo: ${typeof tipo4}, valor: ${tipo4}`)

/*----------------------------------------------------------------------------------------------*/

// Operadores

// Aritmeticos
let a = 10;
let b = 2;

console.log('\nOperadores aritméticos:')
console.log(`soma: ${a + b}`)
console.log(`subtração: ${a - b}`)
console.log(`multriplicação: ${a * b}`)
console.log(`divisão: ${a / b}`)


// Unitários
// ++   incrementa 1
// --   decrementa 1

// Comparativos
// >    maior que
// <    menos que
// >=   maior ou igual a
// <=   menor ou igual a
// ==   igual a
// !=   diferente de
// ===  estritamente igual

// &&
// ||
// !

/*----------------------------------------------------------------------------------------------*/


// Condicionais

let maiorIdade = 18;
let idade = 17;


console.log('\nCondicionais')
if (maiorIdade <= idade) {
    console.log('É maior de idade')
} else {
    console.log('Não é maior de idade')
}

// Utilizando operadores ternarios

maiorIdade <= idade ? console.log('É maior de idade') : console.log('Não é maior de idade')

// switch case

switch (idade) {
    case 18:
        console.log('Maior de idade com switch')

    case 17:
        console.log('Menor de idade com switch')
}

/*----------------------------------------------------------------------------------------------*/

// Laços de repetição

console.log('\nLaços de Repetição')
let contador = 1;

//do {
//    console.log(`contador: ${contador}`)
//    contador++;
//} while (contador <= 10)

//while (contador <= 10) {
//    console.log(`contador: ${contador}`)
//    contador++;
//}

for (let i = 1; i <= 10; i++) {
    console.log(`contador: ${i}`)
}

/*----------------------------------------------------------------------------------------------*/

// Funcoes


function saudacao1(nome) { // nome é o 'parametro' da função
    console.log('Olá, ' + nome)
}

const saudacao2 = (nome) => {
    console.log('Olá, ' + nome)
}

const saudacao3 = nome => console.log('Olá, ' + nome)

saudacao1('Nicolas')    // Nicolas, Clara e Lizzy são os 'argumentos'
saudacao2('Clara')
saudacao3('Lizzy')


/*----------------------------------------------------------------------------------------------*/

// Usando return

console.log('\n')

let numero = 10;

const dobraNumero = (numero) => {
    console.log(`Numero dentro do escopo: ${numero * 2}`)
    return numero = numero * 2
}

console.log(dobraNumero(numero) + 2)


/*----------------------------------------------------------------------------------------------*/

// Callback e Higher order function

console.log('\n Callback e HOF') // Funcão que recebe funcao como parametro

function calcular(num1, num2, operacao) {
    return operacao(num1, num2);
}

const soma = (num1, num2) => {
    return num1 + num2;
}
const subtracao = (num1, num2) => {
    return num1 - num2;
}

console.log(calcular(5, 15, soma)) // soma é callback
console.log(calcular(10, 2, subtracao))  // subtracao é callback


/*----------------------------------------------------------------------------------------------*/

// require e module.exports

console.log('\nUsando require e module.exports:')

const frutas = require('./lista')
console.log(frutas)




/*----------------------------------------------------------------------------------------------*/

// Percorrendo arrays

console.log('\nPercorrendo arrays:')

console.log('Com for:')
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

console.log('\nCom for-of:')
for (fruta of frutas) {
    console.log(fruta)
}

console.log('\nCom forEach:')

frutas.forEach((valor, indice) => {
    console.log(indice, valor)
})


/*----------------------------------------------------------------------------------------------*/

// map e filter

console.log('\nMap e Filter:')
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((num) => {
    return num % 2 === 0;
})

const numerosDobrados = numeros.map((num) => {
    return num * 2
})

console.log(`\n${numeros}`)
console.log(`\n${numerosPares}`)
console.log(`\n${numerosDobrados}`)

/*----------------------------------------------------------------------------------------------*/

// Removendo duplicatas de arrays

let duplicatas = [1, 1, 1, 3, 4, 2, 5]
let semDuplicatas = [...new Set(duplicatas)];

console.log(duplicatas)
console.log(semDuplicatas)

/*----------------------------------------------------------------------------------------------*/







/*----------------------------------------------------------------------------------------------*/








/*----------------------------------------------------------------------------------------------*/






/*----------------------------------------------------------------------------------------------*/