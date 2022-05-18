// Getting All Elements
var container = document.querySelector('.container');
// Controls
var controlsBl = document.querySelector('.controls');
var allButtons = document.querySelectorAll('button');
var startBtn = document.querySelector('.start_btn');
var lapBtn = document.querySelector('.lap_btn');
var stopBtn = document.querySelector('.stop_btn');
var restartBtn = document.querySelector('.restart_btn');
var clearBtn = document.querySelector('.clear_btn');
// Time Items
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var milliseconds = document.querySelector('.milliseconds');
// Variables For Counting
var m = 0;
var s = 0;
var ms = 0;
// Variable For Interval
var startInt;
// Start Interval Function
function startInterval() {
    if (ms < 10)
        milliseconds.innerText = '0' + ms;
    if (s < 10)
        seconds.innerText = '0' + s;
    if (m < 10)
        minutes.innerText = '0' + m;
    if (ms > 98) {
        ms = 0;
        s++;
        seconds.innerText = s;
    }
    else {
        ms++;
        milliseconds.innerText = ms;
    }
    if (s === 60) {
        s = 0;
        m++;
        minutes.innerText = m;
    }
}
// Event Listeners
function loadAnimation() {
    var i = 0;
    var animationInterval = setInterval(function () {
        if (i === 4) {
            clearInterval(animationInterval);
        }
        allButtons[i].style.opacity = 1;
        allButtons[i].style.marginTop = controlsBl.clientHeight - allButtons[i].clientHeight + 'px';
        i++;
    }, 300);
}
window.onload = loadAnimation;
function startTimer() {
    startBtn.onclick = null;
    stopBtn.onclick = stopTimer;
    startInt = setInterval(startInterval, 10);
}
startBtn.onclick = startTimer;
function stopTimer() {
    stopBtn.onclick = null;
    startBtn.onclick = startTimer;
    clearInterval(startInt);
}
function newLap() {
    if (document.querySelectorAll('.new_lap').length >= 3) {
        return true;
    }
    var p = document.createElement('p');
    p.innerText = minutes.innerText + ':' + seconds.innerText + ':' + milliseconds.innerText;
    p.classList.add('new_lap');
    container.append(p);
    setTimeout(function () {
        p.style.width = 150 + 'px';
    }, 100);
}
lapBtn.onclick = newLap;
function restartTimer() {
    minutes.innerText = '00';
    seconds.innerText = '00';
    milliseconds.innerText = '00';
    m = 0;
    s = 0;
    ms = 0;
}
restartBtn.onclick = restartTimer;
function clearLaps() {
    var laps = document.querySelectorAll('.new_lap');
    for (var _i = 0, laps_1 = laps; _i < laps_1.length; _i++) {
        var lap = laps_1[_i];
        lap.remove();
    }
}
clearBtn.onclick = clearLaps;
