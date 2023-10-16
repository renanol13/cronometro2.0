const boxData = document.querySelector('#boxData')
const boxDisplay = document.querySelector('#boxDisplay')
const boxCronometro = document.querySelector('#boxCronometro')
const ativar = document.querySelector('#ativar')
const input = document.querySelector('#input')
const parar = document.querySelector('#parar')
const alarme = document.querySelector('#alarme')
let alarme_OnOff = false
let timeStamp_alarme = null
let som = new Audio('som-Alarme.mp3')



const tempo = new Date()
const d = tempo.getDate() < 10? `0${tempo.getDate()}`:tempo.getDate()
const m = tempo.getMonth() < 10? `0${tempo.getMonth()}`:tempo.getMonth()
const a =tempo.getFullYear()
boxData.innerHTML = `${d}/${m}/${a}`


const verifica = () => {
    const tempo = new Date()
    if (tempo.getTime() >= timeStamp_alarme && alarme_OnOff) {
        boxCronometro.classList.add('estilo_alarme')
        alarme.classList.add('animaçao')
        som.play()
        som.loop = -1
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


ativar.addEventListener('click', () => {
    timeStamp_alarme = Date.now() + Number(input.value * 1000)
    const horario = new Date(timeStamp_alarme)
    const h = horario.getHours() < 10 ? `0${horario.getHours()}` : horario.getHours()
    const m = horario.getMinutes() < 10 ? `0${horario.getMinutes()}` : horario.getMinutes()
    const s = horario.getSeconds() < 10 ? `0${horario.getSeconds()}` : horario.getSeconds()
    alarme.innerHTML = `${h}:${m}:${s}`
    alarme_OnOff = true
    input.value = ''
})


parar.addEventListener('click', () => {
    boxCronometro.classList.remove('estilo_alarme')
    alarme.classList.remove('animaçao')
    alarme_OnOff = false
    input.focus()
    alarme.innerHTML = '--:--:--'
    som.pause()
    som.currentTime = 0 
    input.value = ''
})




