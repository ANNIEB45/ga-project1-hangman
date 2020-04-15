//alphabets
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    //categories
const categories = {
    'sports': ['baseball', 'cricket', 'judo', 'hang gliding',
        'volleyball', 'yoga'],
    'fashion icons': ['audrey hepburn', 'rihanna', 'mary and ashley olsen',
        'princess diana', 'bob dylan', 'kanye west'],
    'famous cities': ['paris', 'dubai', 'new york', 'kuala lumpa',
        'istanbul', 'london', 'los angelos'],
    'musical instruments': ['trombone', 'french horn', 'oboe',
        'xylophone', 'synthesizer', 'lute', 'electric guitar']
}

//variables and dom elements
    //const variables
const answerField = document.querySelector('.answer-field')
const letterBox = document.querySelector('.letterbox')
const categoriesMenu = document.querySelector('.category-container')
const hint = ''
const wrongBox = document.querySelector('.wrong-box')
const livesArea = document.querySelector('.lives')
const restartGame = document.querySelector('.reset')
const hint = ''
const userName = ''
const score = ''
const howToPlay = ''
const startGameButton = ''
    //let variables
let guesses = []
let wrongLetter = []
let lives = 6


//div with class letter-box
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

let blankSpace = document.querySelector('.answer-field')
let answerLine = []
let space;

//creating lines for word
for (let i = 0; i < letter.length; i++) {
    if (letter[i] === '') {
        answerLine[i] += ''
    } else {
        answerLine[i] = "_"
        console.log(answerLine)
    }
}
blankSpace.innerHTML = answerLine.join(' ')
//create another for loop to check if selected letter is part of guesses or wrong guesses area
//if so, replace lines with the letter


const userGuess = (evt) => {
    //event to listen for click on each specific letter
    let selectedLetter = evt.target.innerText
    console.log('i clicked letter:', selectedLetter)
    //if the selected letter is the secret letter
    if (letter.includes(selectedLetter)) {
        //push it into the guesses array
        guesses.push(selectedLetter)
        console.log('the letter guessed: ', guesses)
        // removeFromSelectedLetter(selectedLetter)
        resetGame()
        alert('Congratulations. You guessed the right letter')
        //game ends, the guess array is blank and the lives start over

        return

    } else {
        wrongLetter.push(selectedLetter)
        console.log('I guessed these wrong: ', wrongLetter)
        // removeFromSelectedLetter(selectedLetter)
        lives--
        console.log("you have: ", lives, 'lives')
        alert('Wrong Letter. Try Again')
        resetGame()
    }
}

const resetGame = () => {
    if (lives === 0) {
        alert('Aww, you ran out of lives. The word was: ' + letter)
        wrongLetter = []
        lives = 6
    } else {
        //if guess is equal to the word
        for (let j = 0; j < guesses.length; i++) {
        }
        guesses = []
        wrongLetter = []
        lives = 6
    }
}


// const removeFromSelectedLetter = (letter) => {
//     hideLetters = Array.from(alphabetSquares).find(function(alpha){
//         return alpha.innerText === selectedLetter})
//     hideLetters.classList.add('hide')
//     hideLetters.removeEventListener('click', userGuess)
// }




const playAgainButton = (e) => {
    let restart = e.target.innerHTML
    lives = 6
    guesses = []
    wrongLetter = []
    blankSpace = '_'
    alert("Let's play again")

}
//event listener to play again button... will reset game
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







