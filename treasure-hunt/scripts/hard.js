const hardArray = [
    {name: 'office', clue: 'A place reserved to work or study at home.', img: '../images/office2.jpg'},
    {name: 'bedroom', clue: 'A room furnished and used for sleeping.', img: '../images/bedroom.jpg'},
    {name: 'closet', clue: 'A tall recess or wardrobe with a door, used for storage.', img: '../images/closet.jpg'},
    {name: 'living room', clue: 'A room in a house for general and informal everyday use.', img: '../images/living-room.jpg'},
    {name: 'dining room', clue: 'A room in a house in which meals are eaten.', img: '../images/dinning-room.jpg'},
    {name: 'backyard', clue: 'A yard behind a house or other building, typically surrounded by a fence.', img: '../images/backyard.jpg'},
    {name: 'kitchen', clue: 'A room or area where food is prepared and cooked.', img: '../images/kitchen.jpg'},
    {name: 'laundry', clue: 'A room in a house where clothes and linens can be washed and ironed.', img: '../images/laundry.jpg'},
    {name: 'tv room', clue: 'A room set aside for watching television.', img: '../images/tv-room.jpg'},
    {name: 'garage', clue: 'A building or indoor area for parking or storing motor vehicles.', img: '../images/garage.jpg'}
]

const hardClues = [
    'A place reserved to work or study at home.',
    'A room furnished and used for sleeping.',
    'A tall recess or wardrobe with a door, used for storage.',
    'A room in a house for general and informal everyday use.',
    'A room in a house in which meals are eaten.',
    'A yard behind a house or other building, typically surrounded by a fence.',
    'A room or area where food is prepared and cooked.',
    'A room in a house where clothes and linens can be washed and ironed.',
    'A room set aside for watching television.',
    'A building or indoor area for parking or storing motor vehicles.'
]

const input = document.getElementById('answer')
const check = document.getElementById('check')
const size = hardClues.length

// console.log(`Size = ${size}`);

let inputValue
let hardtitle
let hardRoomHtml = ''
let hardClueHtml = ''
let z=1
let id = 0

cardClue.innerHTML = hardClues

buttonStart.addEventListener('click', () =>{
    startTimer()
    start.style.display = 'none'
    stopWatch.style.display = 'flex'
    firstClue.style.display = 'flex'
    openHardClue()
})

function openHardClue() {
    house.style.display = 'none'
    firstClue.style.display = 'flex'
    hardtitle = question.innerHTML = hardClues[id]
    // console.log(`hardtitle = ${hardtitle}`);
}

check.addEventListener('click', ()=>{
    inputValue = input.value
    // console.log(`inputValue = ${inputValue}`);
    for(let clue of hardArray){
        if (clue.name == inputValue.toLowerCase()) {
            inputValue = clue.clue
            // console.log(`new inpuValue: ${inputValue}`);
        }
    }

    if(hardtitle == inputValue){
        firstClue.style.display = 'none'
        house.style.display = 'grid'
        addRoom()
        input.value = ''
        setTimeout(() => {                    
            id++
            // console.log(`novo id =  ${id}`)
            id > size-1 ? gameOver() : openHardClue(id)
        }, 2000);           
    } else {
        counter(5)
    }
})

function addRoom() {
    console.log(`addRoom - inputValue: ${inputValue}`);
    for(let choice of hardArray){
        if (inputValue == choice.clue) {
            house.insertAdjacentHTML('afterbegin', `
                <div class="room" id="${choice.name}">
                    <img src="../images/${choice.img}">
                </div>
            `)            
        }
    }
}

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

hardClues.forEach(hardClues => {
    hardClueHtml += `
        <div class="row">
            <p>${z}. </p>
            <p class="row-clue">${hardClues}</p>
        </div>
    `
    z++
})

reset.addEventListener('click', ()=>{
    stopTimer()
    id=0
    house.innerHTML = ''
    house.style.display = 'none'
    endGame.style.display = 'none'
    start.style.display = 'flex'
    stopWatch.style.display = 'none'
    firstClue.style.display ='none'
})
