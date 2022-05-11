// Getting All Elements
const container: any = document.querySelector('.container')
// Controllers
const allButtons: any = document.querySelectorAll('button')
const startBtn: any = document.querySelector('.start_btn')
const lapBtn: any = document.querySelector('.lap_btn')
const stopBtn: any = document.querySelector('.stop_btn')
const restartBtn: any = document.querySelector('.restart_btn')
const clearBtn: any = document.querySelector('.clear_btn')
// Stopwatch Time
const minutes: any = document.querySelector('.minutes')
const seconds: any = document.querySelector('.seconds')
const milliseconds: any = document.querySelector('.milliseconds')

// Variables For Counting
let m: number = 0
let s: number = 0
let ms: number = 0
// Variable for interval
let startInt: any

// Start Interval Function
function startInterval() {
    if (ms > 98) {
        ms = 0
        s++
        seconds.innerText = s
    } else {
        ms++
        milliseconds.innerText = ms;
    }

    if (ms < 10) { milliseconds.innerText = '0' + ms }
    if (s < 10) { seconds.innerText = '0' + s }

    if (s > 60) {
        s = 0
        m++
        minutes.innerText = m
    }

    if (m < 10) { minutes.innerText = '0' + m }
}

// Event Listeners
function loadAnimation() {
    setTimeout(() => { startBtn.classList.add('load_animation') },300)
    // setTimeout(() => { // lapBtn.classList.add('load_animation') },20000)
    // setTimeout(() => { // stopBtn.classList.add('load_animation') },700)
    // setTimeout(() => { // restartBtn.classList.add('load_animation') },900)
    // setTimeout(() => { // clearBtn.classList.add('load_animation') },1100)
}

function startTimer() {
    startBtn.removeEventListener('click', startTimer)
    stopBtn.addEventListener('click', stopTimer)
    startInt = setInterval(startInterval, 10)
}

function stopTimer() {
    stopBtn.removeEventListener('click', stopTimer)
    startBtn.addEventListener('click', startTimer)
    clearInterval(startInt);
}

function newLap() {
    if (document.querySelectorAll('.new_lap').length >= 3) { return true }
    let p: any = document.createElement('p')
    p.innerText = minutes.innerText + ':' + seconds.innerText + ':' + milliseconds.innerText
    p.classList.add('new_lap')
    container.append(p)
}

function restartTimer() {
    minutes.innerText = '00'
    seconds.innerText = '00'
    milliseconds.innerText = '00'
    m = 0;
    s = 0;
    ms = 0;
}

function clearLaps() {
    let laps = document.querySelectorAll('.new_lap');
    for (let i = 0; i < laps.length; i++) {
        laps[i].remove();
    }
}

// Setting Event Listeners
window.onload = loadAnimation
startBtn.onclick = startTimer
lapBtn.onclick = newLap
restartBtn.onclick = restartTimer
clearBtn.onclick = clearLaps