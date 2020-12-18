const words = [
    'BORED',
    'ANXIOUS',
    'CONFIDENT',
    'SURPRISED',
    'HAPPY',
    'SAD',
    'AFRAID',
    'HOT',
    'COLD',
    'SCARED',
    'ANGRY',
    'EXCITED'
]

const keyboard = document.getElementById('keyboard')
const hangmanPic = document.getElementById('hangmanPic')
const wordSpotlight = document.getElementById('wordSpotlight')
const mistake = document.getElementById('mistakes')
const back = document.getElementsByClassName('btn-back')


let answer = ''
let maxWrong = 6
let mistakes = 0
let guesses = []
let wordStatus = null

function randomWord() {
    answer = words[Math.floor(Math.random()*words.length)]
}

//generateButtons
function keyboardButtons() {
    let buttonsHtlm = 'ABCDEFGHIJKLMNOPQRSTUWVXYZ'.split('').map(letter =>
        `
            <button class="btn  btn-keyboard btn-lg btn-primary m-2" 
            id="${letter}" 
            onClick="handleGuesses('` + letter + `')">
                ${letter}
            </button>
        `
        ).join('')

        keyboard.innerHTML = buttonsHtlm
}

//pickLetter
function handleGuesses(pickLetter) {
    const element = document.getElementById(pickLetter)  
    
    guesses.indexOf(pickLetter) === -1 ? guesses.push(pickLetter) : null

    element.style.boxShadow = '0 0 1rem gold'
    element.style.backgroundColor = 'var(--blue)'
    

    if (answer.indexOf(pickLetter) >= 0) {
        guessWord()
        checkIfGameWon()
    } else if (answer.indexOf(pickLetter) === -1){
        mistakes++
        updateMistakes()
        checkIfGameLost()
        updateHangmanPicture()
    }
} 

function updateHangmanPicture() {
        hangmanPic.src = `../assets/${mistakes}.jpg`
}

function guessWord() {
   wordStatus = answer.split('') .map(letter => 
    (guesses.indexOf(letter) >= 0 ? letter : " _ ")).join('')

    wordSpotlight.innerHTML = wordStatus
}

function updateMistakes() {
    mistake.innerHTML = mistakes
}

function checkIfGameWon() {
    if (wordStatus === answer) {
        keyboard.innerHTML = 'You won!!! 🤩'
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        wordSpotlight.innerHTML = `The answer was: ${answer}`
        keyboard.innerHTML = 'You lost!!! 😭'
    }
}

function reset() {
    mistakes = 0
    guesses = []

    hangmanPic.src = '../assets/0.jpg'

    randomWord()
    guessWord()
    updateMistakes()
    keyboardButtons()
}

document.getElementById('maxwrong').innerHTML = maxWrong


randomWord()
keyboardButtons()
guessWord()


const button = document.getElementById('button-start')
function startGame() {
    button.addEventListener('click', ()=>{
        
    })
}