const canvas = document.querySelector('#desenhar')
const contexto = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.heigth = window.innerHeight
contexto.strokeStyle = '#BADA55'
contexto.lineJoin = 'round'
contexto.lineCap = 'round'

let estaDesenhando = false
let ultimoX = 0
let ultimoY = 0

function desenhar(evento) {
   console.log(evento)
}

canvas.addEventListener('mousemove', desenhar)







