//alphabets
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const letter = 'a'
console.log('the secret letter is: ', letter)

let guesses = []
let wrongLetter = []
let lives = 6
let gameIsFinished = false


const letterBox = document.querySelector('.letterbox')


//this function is to create the letter box to hold the alphabets
const alphabetBox = () => {
    //created a ul element
    alphabetList = document.createElement('div')
    for (let i = 0; i < alphabet.length; i++) {
        alphabetList.classList = 'alphabet-box'
        //create list element
        listEl = document.createElement('div')
        listEl.classList = 'squares'
        //add the alphabet index to each li element
        listEl.innerHTML = alphabet[i];
        //append the ul to the div and the li to the ul
        letterBox.appendChild(alphabetList)
        alphabetList.appendChild(listEl)
    }
}
alphabetBox()
// let secretLetter = letter
const alphabetSquares = document.querySelectorAll('.squares')
console.log(alphabetSquares)

const restartGame = document.querySelector('.reset')
console.log(restartGame)

const userGuess = (evt) => {
    //event to listen for click on each specific letter
    let selectedLetter = evt.target.innerText
    console.log('i clicked letter:', selectedLetter)
    //if the selected letter is the secret letter
    if (letter.includes(selectedLetter)) {
        //push it into the guesses array
        guesses.push(selectedLetter)
        console.log('the letter guessed: ', guesses)
        alert('Congratulations. You guessed the right letter')
        //game ends, the guess array is blank and the lives start over
        resetGame()
        return
    
    }else {
        wrongLetter.push(selectedLetter)
        console.log('I guessed these wrong: ' ,wrongLetter)
        lives --
        console.log("you have: " , lives, 'lives')
        alert('Wrong Letter. Try Again')
        resetGame()
    }
}

const resetGame = () =>{
    if(lives === 0){
        alert('Aww, you ran out of lives. The letter was ', letter)
        gameIsFinished = true
        console.log(gameIsFinished)
        wrongLetter = []
        lives = 6
    }else if(guesses[0] === 'a'){
        gameIsFinished = true
        console.log(gameIsFinished)
        guesses = []
        wrongLetter = []
        lives = 6
    }
}

const playAgainButton = (e)=>{
    let restart = e.target.innerHTML
    lives = 6
    guesses = []
    wrongLetter = []
    alert("Let's play again")
    
}

restartGame.addEventListener('click', playAgainButton)
//click listener on the letter the user guesses
alphabetSquares.forEach(square => {
    square.addEventListener('click', userGuess)
})

//is a clicked === a in secret word(true or false)
          // when user clicks letter check 
// if letter is inside of secretWord string
// if true console
//letter appears in secretWord display field in correct spot
//count of correct letter 
// 







