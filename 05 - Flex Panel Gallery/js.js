const paineis = document.querySelectorAll('.painel')   // ficar clicando

function alternarAberto() {
   console.log('oi')
   this.classList.toggle('abrir')
}

function alternarAtivo(evento) {
    console.log(evento.propertyName)
    if (evento.propertyName.includes('flex')) {
        this.classList.toggle('abrir-active')
    }
}

paineis.forEach(cada => cada.addEventListener('click', alternarAberto))
paineis.forEach(cada => cada.addEventListener('transitionend', alternarAtivo))
