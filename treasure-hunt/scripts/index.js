const body = document.querySelector('body')
const buttonStart = document.querySelector('.start-button')
const stopWatch = document.querySelector('.stopwatch')
const firstClue = document.getElementById('first-clue')
const question =document.getElementById('question')
const stopwatch = document.querySelector('.stopwatch')
const cardClue = document.getElementById('clues')
const start = document.getElementById('start')
const house = document.getElementById('house')
const endGame = document.getElementById('gameover')
const reset = document.querySelector('.reset-button')
const countdown = document.getElementById('countdown')



let timeleft

function counter(timeleft) {
    countdown.textContent = timeleft
    countdown.style.display = 'flex'
    const downloadTimer = setInterval(function(){
        countdown.textContent = timeleft-1
        timeleft--
        // console.log(timeleft);
        if(timeleft <= -1){
            clearInterval(downloadTimer);
            countdown.style.display = "none"
        }
    }, 1000);
}

function gameOver() {
    pauseTimer()
    endGame.style.display = 'flex'
}


