const choiceArray = [
    {name: 'OFFICE', clue: 'A place reserved to work or study at home.', img: 'office2.jpg'},
    {name: 'KITCHEN', clue: 'A room or area where food is prepared and cooked.', img: 'kitchen.jpg'},
    {name: 'BEDROOM', clue: 'A room furnished and used for sleeping.', img: 'bedroom.jpg'},
    {name: 'TV ROOM', clue: 'A room set aside for watching television.', img: 'tv-room.jpg'},
    {name: 'GARAGE' , clue: 'A building or indoor area for parking or storing motor vehicles.', img: 'garage.jpg'},
    {name: 'LIVING ROOM', clue: 'A room in a house for general and informal everyday use.', img: 'living-room.jpg'}
]

const clues = [
    'A room furnished and used for sleeping.',
    'A room or area where food is prepared and cooked.',
    'A room in a house for general and informal everyday use.',
    'A place reserved to work or study at home.',
    'A building or indoor area for parking or storing motor vehicles.',
    'A room set aside for watching television.',
]

const size = clues.length
const choices = document.querySelectorAll('.choice')

let roomHTML = ''
let clueHTLM = ''
let title
let w=1
let id = 0

cardClue.innerHTML = clueHTLM

function openClue() {
    house.style.display = 'none'
    firstClue.style.display = 'flex'
    title = question.innerHTML = clues[id]
    // console.log(`id = ${id} - title = ${title}`);
    // console.log('**********************************');
}


for(let choice of choices){
    choice.addEventListener('click', ()=>{
        //conversão da frase em título
        for(let clue of choiceArray){
            if (clue.clue == title) {
                title = clue.name
            }
        }
        // console.log(`title: ${title}`);
        // console.log(`choice: ${choice.textContent}`);
        if (title == choice.textContent) {
            // console.log('RESPOSTA CORRETA');
            firstClue.style.display = 'none'
            house.style.display = 'grid'
            addRoom()
            setTimeout(() => {                    
                id++
                // console.log(`novo id =  ${id}`)
                id > size-1 ? gameOver() : openClue(id)
            }, 2000);
            
        } else {
            counter(5)
        }
    })
}


function addRoom() {
    for(let choice of choiceArray){
        if (title == choice.name) {
            roomHTML += `
                <div class="room" id="${choice.name}">
                    <img src="../images/${choice.img}">
                </div>
            `
            house.innerHTML = roomHTML
        }
    }
}


clues.forEach(clues => {
    clueHTLM += `
        <div class="row">
            <p>${w}. </p>
            <p class="row-clue">${clues}</p>
        </div>
    `
    w++
})

buttonStart.addEventListener('click', () => {
    startTimer()
    start.style.display = 'none'
    stopWatch.style.display = 'flex'
    firstClue.style.display ='flex'
    openClue()
})


reset.addEventListener('click', ()=>{
    stopTimer()
    id=0
    roomHTML = ''
    hardRoomHtml = ''
    house.style.display = 'none'
    endGame.style.display = 'none'
    start.style.display = 'flex'
    stopWatch.style.display = 'none'
    firstClue.style.display ='none'
})












