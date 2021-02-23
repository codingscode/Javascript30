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
   if (!estaDesenhando) return
   console.log(evento)
}

canvas.addEventListener('mousemove', desenhar)
canvas.addEventListener('mousedown', () => estaDesenhando = true)
canvas.addEventListener('mouseup', () => estaDesenhando = false)
canvas.addEventListener('mouseout', () => estaDesenhando = false)







