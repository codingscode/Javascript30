const ref = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cidades = []

fetch(ref)
      .then(cada => cada.json())
      .then(dados => cidades.push(...dados))


function encontrarCombinacoes(palavra_chave, cidades) {
    return cidades.filter(lugar => {
        // aqui nós precisamos se a cidade ou estado combina com o que foi procurado
        const regex = new RegExp(palavra_chave, 'gi')
        return lugar.city.match(regex) || lugar.state.match(regex)
    })
}

//encontrarCombinacoes('Bos', cidades)
function mostrarCombinacoes() {
      console.log(this.value)
}
   
const entradaBuscar = document.querySelector('.buscar')
const sugestoes = document.querySelector('.sugestoes')
   
entradaBuscar.addEventListener('change', mostrarCombinacoes)
entradaBuscar.addEventListener('keyup', mostrarCombinacoes)
   












/* const matriz = require('./ref/cidades.json')

console.log(matriz[0]) // 1º objeto
console.log(matriz[0].cidade)
console.log(typeof(matriz))

const x = JSON.stringify(matriz)
//console.log(x)
console.log(typeof(x))
 */
