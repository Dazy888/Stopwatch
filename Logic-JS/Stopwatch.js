var startInt,container=document.querySelector(".container"),allButtons=document.querySelectorAll("button"),startBtn=document.querySelector(".start_btn"),lapBtn=document.querySelector(".lap_btn"),stopBtn=document.querySelector(".stop_btn"),restartBtn=document.querySelector(".restart_btn"),clearBtn=document.querySelector(".clear_btn"),minutes=document.querySelector(".minutes"),seconds=document.querySelector(".seconds"),milliseconds=document.querySelector(".milliseconds"),m=0,s=0,ms=0;function startInterval(){ms<10&&(milliseconds.innerText="0"+ms),s<10&&(seconds.innerText="0"+s),m<10&&(minutes.innerText="0"+m),ms>98?(ms=0,s++,seconds.innerText=s):(ms++,milliseconds.innerText=ms),60===s&&(s=0,m++,minutes.innerText=m)}function loadAnimation(){var t=0,e=setInterval((function(){4===t&&clearInterval(e),allButtons[t].classList.add("load_animation"),t++}),300)}function startTimer(){startBtn.onclick=null,stopBtn.onclick=stopTimer,startInt=setInterval(startInterval,10)}function stopTimer(){stopBtn.onclick=null,startBtn.onclick=startTimer,clearInterval(startInt)}function newLap(){if(document.querySelectorAll(".new_lap").length>=3)return!0;var t=document.createElement("p");t.innerText=minutes.innerText+":"+seconds.innerText+":"+milliseconds.innerText,t.classList.add("new_lap"),container.append(t)}function restartTimer(){minutes.innerText="00",seconds.innerText="00",milliseconds.innerText="00",m=0,s=0,ms=0}function clearLaps(){for(var t=0,e=document.querySelectorAll(".new_lap");t<e.length;t++){e[t].remove()}}window.onload=loadAnimation,startBtn.onclick=startTimer,lapBtn.onclick=newLap,restartBtn.onclick=restartTimer,clearBtn.onclick=clearLaps;