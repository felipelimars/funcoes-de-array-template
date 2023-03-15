// ---------------------- PRÁTICA GUIADA ----------------------
const numeros = [3, 67, 12, 90, -56, 98, 35, 24]

// relembrando sintaxe de for, for... in e for... of:
// for(let i = 0; i < array.length; i++)
// for(let index in array)
// for(let element of array) 


// Prática Guiada I - Callbacks
// função que recebe array e triplica cada elemento desse array
function triplicarNumeros(arrayDeNumeros) {
  const arrayTriplicado = []

  for (let numero of arrayDeNumeros) {
    const numeroTriplicado = numero * 3
    arrayTriplicado.push(numeroTriplicado)
  }

  return arrayTriplicado
}

// console.log(triplicarNumeros([4, 6, 98, -9, 251]))
// console.log(triplicarNumeros(numeros))


// função que recebe array e retorna array com números pares
function retornarPares(arrayDeNumeros) {
  const arrayPares = []

  for (let numero of arrayDeNumeros) {
    if (numero % 2 === 0) {
      arrayPares.push(numero)
    }
  }

  return arrayPares
}

// console.log(retornarPares(numeros))


// função que recebe array e função de callback e retorna novo array
function manipulaNumeros(arrayDeNumeros, callback) {
  const novoArray = callback(arrayDeNumeros)

  return novoArray
}

// console.log('TRIPLICANDO', manipulaNumeros([98, 56, 74, 30, 31, 89, -3, 47, 99], triplicarNumeros))

// console.log('SÓ PARES', manipulaNumeros([98, 56, 74, 30, 31, 89, -3, 47, 99], retornarPares))


// Prática Guiada II - map()
// map que percorre o array, triplica cada elemento e retorna array com triplos
const numerosTriplicados = numeros.map((elemento, indice, arrayOriginal) => {
  return elemento * 3
})

// console.log(numerosTriplicados)


// Prática Guiada III - filter()
// filter que percorre o array, verifica se o elemento é par e retorna array apenas com números pares
const numerosPares = numeros.filter((elemento, indice, arrayOriginal) => {
  return elemento % 2 === 0
})

// console.log(numerosPares)


// [EXEMPLO] pega o array de números pares e faz o map para triplicar cada elemento:
// const numerosParesTriplicados = numerosPares.map((numero, indice, arrayOriginal) => {
//   return numero * 3
// })

// console.log(numerosParesTriplicados)


// ---------------------- EXERCÍCIO DE FIXAÇÃO ----------------------
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

// Parte 1 - função de define a propriedade vida de um objeto qualquer como 100
// LEMBRE-SE: essa função não tem NADA a ver com o array acima!
function completaVida(poke) {
  poke.vida = 100

  return poke
}

// guardando o elemento pokemons[0] dentro de uma variável
// const objetoBulbasaur = pokemons[0]
// console.log(completaVida(objetoBulbasaur))

// invocando a função com objeto criado no momento da invocação
// console.log(completaVida({
//   nome: 'pikachu',
//   tipo: 'elétrico',
//   vida: 25
// }))

// invocando a função para cada um dos objetos dentro do array
// console.log(completaVida(pokemons[1]))
// console.log(completaVida(pokemons[2]))
// console.log(completaVida(pokemons[3]))
// console.log(completaVida(pokemons[4]))
// console.log(completaVida(pokemons[5]))


// Parte 2 - map()
// LEMBRE-SE: é possível chamar o map e passar como parâmetro uma função criada anteriormente
const pokemonsVidaCheia = pokemons.map(completaVida)

// console.log(pokemonsVidaCheia)

// PORÉM, é muito mais comum que usemos o map da seguinte forma:
// const pokemonsVidaCheia = pokemons.map((poke, indice, arrayOriginal) => {
//   // lógica
// })


// Parte 3 - filter()
// Aqui, chamamos o filter e criamos a função de callback dentro dele
// LEMBRE-SE: não é necessário colocar os três argumentos (elemento, indice, arrayOriginal). Coloque apenas o que for utilizar!
//const pokemonsDeFogo = pokemons.filter((pokemon, indice, arrayOriginal) => {
//  return pokemon.tipo === 'fogo'
//})

// console.log(pokemonsDeFogo)