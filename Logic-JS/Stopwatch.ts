// Getting All Elements
const container: any = document.querySelector('.container')

// Controls
const controlsBl: any = document.querySelector('.container__controls')
const allButtons: any = document.querySelectorAll('button')
const startBtn: any = document.querySelector('.start-btn')
const lapBtn: any = document.querySelector('.lap-btn')
const stopBtn: any = document.querySelector('.stop-btn')
const restartBtn: any = document.querySelector('.restart-btn')
const clearBtn: any = document.querySelector('.clear-btn')

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

    if (ms === 99) {
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
// Loading Animation
window.onload = () => {
    let i: number = 0
    const animationInterval = setInterval(() => {
        if (i > 3) clearInterval(animationInterval)
        allButtons[i].style.opacity = 1
        allButtons[i].style.marginTop = controlsBl.clientHeight - allButtons[i].clientHeight + 'px'
        i++
    }, 300)
}

// Start Btn
function startTimer() {
    startBtn.onclick = null
    stopBtn.onclick = stopTimer
    startInt = setInterval(startInterval, 10)
}

startBtn.onclick = startTimer

// Stop Btn
function stopTimer() {
    stopBtn.onclick = null
    startBtn.onclick = startTimer
    clearInterval(startInt)
}

// Lap Btn
lapBtn.onclick = () => {
    if (document.querySelectorAll('.new_lap').length >= 3) return
    const p: any = document.createElement('p')
    p.innerText = minutes.innerText + ':' + seconds.innerText + ':' + milliseconds.innerText
    p.classList.add('new-lap')
    container.append(p)
    const windowWidth = document.documentElement.clientWidth
    setTimeout(() => {
        if (windowWidth > 615) p.style.width = 150 + 'px'
        if (windowWidth > 515 && windowWidth < 615) p.style.width = 110 + 'px'
        if (windowWidth > 400 && windowWidth < 515) p.style.width = 70 + 'px'
        if (windowWidth < 400) p.style.width = 55 + 'px'
    }, 100)
}

// Restart Btn
restartBtn.onclick = () => {
    minutes.innerText = '00'
    seconds.innerText = '00'
    milliseconds.innerText = '00'
    m = 0
    s = 0
    ms = 0
}

// Clear-Laps Btn
clearBtn.onclick = () => {
    const laps: any = document.querySelectorAll('.new-lap')
    for (const lap of laps) {
        lap.style.opacity = 0
        setTimeout(() => {
            lap.remove()
        }, 1000)
    }
}