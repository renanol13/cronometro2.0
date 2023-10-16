const boxData = document.querySelector('#boxData')
const boxDisplay = document.querySelector('#boxDisplay')
const boxCronometro = document.querySelector('#boxCronometro')
const ativar = document.querySelector('#ativar')
const input = document.querySelector('#input')
const parar = document.querySelector('#parar')
const alarme = document.querySelector('#alarme')
alarme_OnOff = false

let som = new Audio('som-Alarme.mp3')
som.loop= -1

window.addEventListener('load', () => {
    const tempo = new Date()
    const d = tempo.getDate() < 10? `0${tempo.getDate()}`:tempo.getDate()
    const m = tempo.getMonth() < 10? `0${tempo.getMonth()}`:tempo.getMonth()
    const a =tempo.getFullYear()
    boxData.innerHTML = `${d}/${m}/${a}`

})

const verifica = () => {
    if (alarme.textContent == boxDisplay.textContent) {
        boxCronometro.classList.add('estilo_alarme')
        som.play()
    }
}

const relogio = () => {
    const tempo = new Date()
    const h = tempo.getHours() < 10 ? `0${tempo.getHours()}` : tempo.getHours()
    const m = tempo.getUTCMinutes() < 10 ? `0${tempo.getUTCMinutes()}` : tempo.getUTCMinutes()
    const s = tempo.getSeconds() < 10 ? `0${tempo.getSeconds()}` : tempo.getSeconds()
    boxDisplay.innerHTML = `${h}:${m}:${s}`
    verifica()
}
const intervalo = setInterval(relogio, 1000)

const hora_alarme = () => {
    const horario = new Date()
    horario.setUTCSeconds(horario.getSeconds() + Number(input.value)) 
    const h = horario.getHours() < 10 ? `0${horario.getHours()}` : horario.getHours()
    const m = horario.getMinutes() < 10 ? `0${horario.getMinutes()}` : horario.getMinutes()
    const s = horario.getSeconds() < 10 ? `0${horario.getSeconds()}` : horario.getSeconds()
    alarme.innerHTML = `${h}:${m}:${s}`
    alarme_OnOff = true
}


ativar.addEventListener('click', hora_alarme)
parar.addEventListener('click', () => {
    boxCronometro.classList.remove('estilo_alarme')
    alarme.innerHTML = '--:--:--'
})




