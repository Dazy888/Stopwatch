// Getting All Elements
const container: any = document.querySelector('.container')

// Controls
const allButtons: any = document.querySelectorAll('button')
const startBtn: any = document.querySelector('.start_btn')
const lapBtn: any = document.querySelector('.lap_btn')
const stopBtn: any = document.querySelector('.stop_btn')
const restartBtn: any = document.querySelector('.restart_btn')
const clearBtn: any = document.querySelector('.clear_btn')

// Time Items
const minutes: any = document.querySelector('.minutes')
const seconds: any = document.querySelector('.seconds')
const milliseconds: any = document.querySelector('.milliseconds')

// Variables For Counting
let m: number = 0
let s: number = 0
let ms: number = 0
// Variable For Interval
let startInt: any

// Start Interval Function
function startInterval() {
    if (ms < 10) milliseconds.innerText = '0' + ms
    if (s < 10) seconds.innerText = '0' + s
    if (m < 10) minutes.innerText = '0' + m

    if (ms > 98) {
        ms = 0
        s++
        seconds.innerText = s
    } else {
        ms++
        milliseconds.innerText = ms
    }

    if (s === 60) {
        s = 0
        m++
        minutes.innerText = m
    }
}

// Event Listeners
function loadAnimation() {
    let i: number = 0
    let animationInterval = setInterval(() => {
        if (i === 4) { clearInterval(animationInterval) }
        allButtons[i].classList.add('load_animation')
        i++
    }, 300)
}
window.onload = loadAnimation

function startTimer() {
    startBtn.onclick = null
    stopBtn.onclick = stopTimer
    startInt = setInterval(startInterval, 10)
}
startBtn.onclick = startTimer

function stopTimer() {
    stopBtn.onclick = null
    startBtn.onclick = startTimer
    clearInterval(startInt)
}

function newLap() {
    if (document.querySelectorAll('.new_lap').length >= 3) { return true }
    let p: any = document.createElement('p')
    p.innerText = minutes.innerText + ':' + seconds.innerText + ':' + milliseconds.innerText
    p.classList.add('new_lap')
    container.append(p)
    setTimeout(() => {
        p.style.width = 150 + 'px'
    }, 100)
}
lapBtn.onclick = newLap

function restartTimer() {
    minutes.innerText = '00'
    seconds.innerText = '00'
    milliseconds.innerText = '00'
    m = 0
    s = 0
    ms = 0
}
restartBtn.onclick = restartTimer

function clearLaps() {
    let laps: any = document.querySelectorAll('.new_lap')
    for (let lap of laps) { lap.remove() }
}
clearBtn.onclick = clearLaps