var hours = document.getElementById('hours')
var minutes = document.getElementById('minutes')
var seconds = document.getElementById('seconds')
var tenth = document.getElementById('tenth')
var timer

var hh = 0
var mm = 0
var ss = 0
var dd = 0

function startTimer() {
    timer = setInterval(() => {
        hours.innerHTML = hh < 10 ? `0${hh}` : hh
        minutes.innerHTML = mm < 10 ? `0${mm}` : mm
        seconds.innerHTML = ss < 10 ? `0${ss}` : ss
        tenth.innerHTML = dd < 10 ? `0${dd}` : dd

        if (dd<9) { 
            dd++
        }
        else if (ss < 59) {
            dd = 0
            ss++
        }
        else if (mm < 59) {
            dd = 0
            ss = 0
            mm++
        }
        else if (hh < 23) {
            dd = 0
            ss = 0
            mm = 0
            hh++
        }
    }, 100)
}

function pauseTimer() {
    clearInterval(timer)
}

function stopTimer() {
    clearInterval(timer)
    hours.innerHTML = '00'
    minutes.innerHTML = '00'
    seconds.innerHTML = '00'
    tenth.innerHTML = '00'
}