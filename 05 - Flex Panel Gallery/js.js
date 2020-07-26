const paineis = document.querySelectorAll('.painel')   // ficar clicando

function alternarAberto() {
   console.log('oi')
   this.classList.toggle('abrir')
}

paineis.forEach(cada => cada.addEventListener('click', alternarAberto))
