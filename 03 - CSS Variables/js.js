const entradas = document.querySelectorAll('.controles input')

function gerenAtualizador() {
     const sufixo = this.dataset.sizing || ''
     document.documentElement.style.setProperty(`--${this.name}`, this.value + sufixo)  // ver elements
     console.log(`nome: ${this.name}, valor: ${this.value}`)
}

entradas.forEach(cada => cada.addEventListener('change', gerenAtualizador))
entradas.forEach(cada => cada.addEventListener('mousemove', gerenAtualizador))