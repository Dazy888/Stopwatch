var startInt,container=document.querySelector(".container"),controlsBl=document.querySelector(".container__controls"),allButtons=document.querySelectorAll("button"),startBtn=document.querySelector(".start-btn"),lapBtn=document.querySelector(".lap-btn"),stopBtn=document.querySelector(".stop-btn"),restartBtn=document.querySelector(".restart-btn"),clearBtn=document.querySelector(".clear-btn"),minutes=document.querySelector(".minutes"),seconds=document.querySelector(".seconds"),milliseconds=document.querySelector(".milliseconds"),m=0,s=0,ms=0;function startInterval(){ms<10&&(milliseconds.innerText="0"+ms),s<10&&(seconds.innerText="0"+s),m<10&&(minutes.innerText="0"+m),99===ms?(ms=0,s++,seconds.innerText=s):(ms++,milliseconds.innerText=ms),60===s&&(s=0,m++,minutes.innerText=m)}function startTimer(){startBtn.onclick=null,stopBtn.onclick=stopTimer,startInt=setInterval(startInterval,10)}function stopTimer(){stopBtn.onclick=null,startBtn.onclick=startTimer,clearInterval(startInt)}window.onload=function(){var t=0,e=setInterval((function(){t>3&&clearInterval(e),allButtons[t].style.opacity=1,allButtons[t].style.marginTop=controlsBl.clientHeight-allButtons[t].clientHeight+"px",t++}),300)},startBtn.onclick=startTimer,lapBtn.onclick=function(){if(!(document.querySelectorAll(".new_lap").length>=3)){var t=document.createElement("p");t.innerText=minutes.innerText+":"+seconds.innerText+":"+milliseconds.innerText,t.classList.add("new-lap"),container.append(t);var e=document.documentElement.clientWidth;setTimeout((function(){e>615&&(t.style.width="150px"),e>515&&e<615&&(t.style.width="110px"),e>400&&e<515&&(t.style.width="70px"),e<400&&(t.style.width="55px")}),100)}},restartBtn.onclick=function(){minutes.innerText="00",seconds.innerText="00",milliseconds.innerText="00",m=0,s=0,ms=0},clearBtn.onclick=function(){for(var t=function(t){t.style.opacity=0,setTimeout((function(){t.remove()}),1e3)},e=0,n=document.querySelectorAll(".new-lap");e<n.length;e++){t(n[e])}};