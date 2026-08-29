// Objetos são estruturas que guardam pares de chaves e valores

let pessoa1 = {
    nome: 'Nicolas',
    sobrenome: 'Canabarro',
    idade: 21,
}

pessoa1.altura = 1.82;
console.log(pessoa1)

delete pessoa1.altura
console.log(pessoa1)


/*----------------------------------------------------------------------------------------------*/

// Percorrendo um objeto

console.log('\nPercorrendo um objeto:\n')

for (chave in pessoa1) {
    console.log(`Chave: ${chave} - Valor: ${pessoa1[chave]}`)
}

console.log('\nBuscando chaves e valores de um OBJ:\n')

const chaves = Object.keys(pessoa1)
console.log(`Chaves: ${chaves}`)

const valores = Object.values(pessoa1)
console.log(`Valores: ${valores}`)

const entradas = Object.entries(pessoa1)
console.log(`Entradas: ${entradas}`)



/*----------------------------------------------------------------------------------------------*/

// REST e SPREAD -> clona um objeto

console.log(`\nRest e Spread:\n`)

const pessoa2 = { ...pessoa1 }
console.log(pessoa2)

const pessoa3 = {
    ...pessoa1,
    cnh: true
}

pessoa3.nome = 'Joao'

console.log(pessoa3)

const { nome, ...resto } = pessoa1;
console.log(nome)
console.log(resto)

// destructuring
function saudacao({ nome }) {
    console.log(`\n Olá ${nome} \n`)
}

saudacao(pessoa1)
saudacao(pessoa3)



/*----------------------------------------------------------------------------------------------*/

// this faz referencia ao objeto

console.log('\n')
console.log('Uso do this')

const carro = {
    fabricante: 'Honda',
    modelo: 'civic',

    criaAno() {
        this.ano = 2010
    },

    mostrarChaves() {
        console.log(Object.keys(this))
    },

    mostrarValores() {
        console.log(Object.values(this))
    },

    mostrarCarro() {
        console.log(`Carro: ${this.fabricante} ${this.modelo}`)
    }
}

carro.criaAno()
carro.mostrarChaves()
carro.mostrarValores()
carro.mostrarCarro()

/*----------------------------------------------------------------------------------------------*/




// JSON para OBJETO = JSON.parse()
// OBJETO para JSON = JSON.stringify