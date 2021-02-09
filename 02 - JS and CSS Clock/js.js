const ponteiroSegundo = document.querySelector('.ponteiro-segundo')
const ponteiroMinuto = document.querySelector('.ponteiro-min')
const ponteiroHora = document.querySelector('.ponteiro-hora')

function setarData() {
    const agora = new Date()
    
    const segundos = agora.getSeconds()
    const minutos = agora.getMinutes()
    const horas = agora.getHours()

    const grausSegundos = ((segundos/60)*360)  + 90
    ponteiroSegundo.style.transform = `rotate(${grausSegundos}deg)`
          
    const grausMinutos = ((minutos/60)*360) + 90
    ponteiroMinuto.style.transform = `rotate(${grausMinutos}deg)`
          
    const grausHoras = ((horas/24)*360) + 90
    ponteiroHora.style.transform = `rotate(${grausHoras}deg)`

    console.log(`h: ${horas}, m: ${minutos}, s: ${segundos}`)
          
}

setInterval(setarData, 1000)