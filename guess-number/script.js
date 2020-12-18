const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')
const start = document.getElementById('start')
const gameStart = document.getElementById('game')
const buttton = document.getElementById('button')
const modal = document.querySelector('.modal')
const body=document.querySelector('body')
const input = document.querySelector('#input')
const inputNumber = document.getElementById('number-choice')
let step=0
let number
let numberChoice



startButton.onclick = function () {    
    start.style.display = 'none'
    gameStart.style.display = 'flex'
    numberChoice = inputNumber.value
    console.log(`max number: ${numberChoice}`);
}

resetButton.onclick = function () {
    start.style.display = 'flex'
    gameStart.style.display = 'none'
}

button.onclick = function () {
    step=step+1
    game(step)
}

function instructor(which) {
    document.querySelector('#message').innerHTML=which
}

function game(step) {
    // console.log(step);
    if (step===1) {
        instructor('You must guess the number I will think of...')
    }else if (step===2) {
        instructor(`I'm thinking! of a number from 1 to ${numberChoice}`)
        number = Math.floor(Math.random()*numberChoice)+1
        console.log(number);
    }else if (step===3) {
        instructor('Try to find the number!')
        input.setAttribute("style","display: block;")
    }else {
        let attempt = input.value
        if (attempt==number) {
            instructor('You got it right!')
            body.setAttribute("style", "height: 30rem;")
            modal.setAttribute("style", "display: block;")
        }else if (attempt<number) {
            instructor('You number is low...')
        }else if (attempt>number) {            
            instructor('Your number is high...')
        }
    }
}

modal.addEventListener('click', function () {
    body.setAttribute("style", "height: auto;")
    modal.setAttribute("style", "display: none;")
    instructor('Hello')
    step=0
    input.value = ''
    numberChoice = ''
    input.setAttribute("style", "display: none;")
})


