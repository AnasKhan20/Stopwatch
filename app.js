var hourHead = document.getElementById("hour")
var minHead = document.getElementById("min")
var secHead = document.getElementById("sec")
var msecHead = document.getElementById("msec")

var hour = 0
var min = 0
var sec = 0
var msec = 0
var interval;

function timer(){
    msec++
    msecHead.innerHTML = msec
    if(msec>=100){
        sec++
        secHead.innerHTML = sec
        msec = 0
    }
    else if(sec>=60){
        min++
        minHead.innerHTML = min
        sec = 0
    }
    else if(min>=60){
        hour++
        hourHead.innerHTML= hour
        min = 0
    }
}

function start(){
    var start = document.getElementById("start")
     interval = setInterval(timer,10)
     startbtn.disabled = true;
}

function pause(){
    var pause = document.getElementById("pause")
        clearInterval(interval)
        startbtn.disabled = false;
}

function reset(){

var hour = 0
var min = 0
var sec = 0
var msec = 0

msecHead.innerHTML = msec
secHead.innerHTML = sec
minHead.innerHTML = min
hourHead.innerHTML = hour

pause()
}
























