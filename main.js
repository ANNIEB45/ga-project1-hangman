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
let blankSpace = document.querySelector('.answer-field')
const letterBox = document.querySelector('.letterbox')
const categoriesMenu = document.querySelector('.category-container')
const wrongBox = document.querySelector('.wrong-box')
const livesArea = document.querySelector('.lives')
const restartGame = document.querySelector('.reset')
const hintsInput = document.querySelector('.hint')
const clueInput = document.querySelector('.clue')
const wins = document.querySelector('.wins')
//let variables
let guesses = []
let wrongLetters = []
let livesLeft = 6
let secretWord = ''


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
alphabetBox()//WORKING

//category div and list
const categoriesMenuList = () => {
    //create new div for category button
    categoryDiv = document.createElement('div')
    categoryDiv.classList = 'categoList'
    categoryHeading = document.createElement('p')
    categoryHeading.classList = 'category-heading'
    categoryHeading.innerHTML = 'Category'
    categoryDiv.appendChild(categoryHeading)
    //loop through the category keys
    for (let i = 0; i < Object.keys(categories).length; i++) {
        //create a list div
        listCategEl = document.createElement('div')
        listCategEl.classList = 'categoryWords'
        //add category keys to list div
        listCategEl.innerHTML = Object.keys(categories)[i]
        // console.log(listCategEl)
        //append the list div to the new div and new div to category div
        categoriesMenu.appendChild(categoryDiv)
        categoryDiv.appendChild(listCategEl)
    }
}
categoriesMenuList()//WORKING

const choosenCategory = document.querySelectorAll('.categoryWords') //WORKING

let answerLine = []
//select a category and randomize the secret word
const selectCategory = (e) => {
    choice = e.target.innerText
    console.log('This is the category chosen: ', choice)
    let cat = categories[choice]
    console.log("my category", cat)
    let word = cat[(Math.floor(Math.random() * cat.length))]
    secretWord = word
    addWordToLine()
    console.log("this is my secret word. These two should be the same", word, secretWord)
}//WORKING
//add lines for the length of secret word in the category choosen
const addWordToLine = () => {
    answerLine = []
    for (let i = 0; i < secretWord.length; i++) {
        if (guesses.includes(secretWord[i])) {
            answerLine[i] = secretWord[i]
        } else {
            answerLine[i] = '_'
        }
    }
    blankSpace.innerHTML = answerLine.join(' ')
}//working

choosenCategory.forEach(category => {
    category.addEventListener("click", selectCategory)
})//WORKING

const alphabetSquares = document.querySelectorAll('.squares')//WORKING
//user guess area... has click function,reset game, and alerts
const userGuess = (evt) => {
    //event to listen for click on each specific letter
    let selectedLetter = evt.target.innerText
    console.log('i clicked letter:', selectedLetter)
    console.log('secret word is: ', secretWord)
    //if the selected letter is the secret letter
    if (secretWord.includes(selectedLetter)) {
        //push it into the guesses array
        guesses.push(selectedLetter)
        console.log('the letter guessed: ', guesses)
        //disable the letter from being used again
        disableSelectedLetter(selectedLetter)
        //add the letter to the secret word line
        addWordToLine()
        alert('YAY. You guessed the right letter.')
        checkWordCompletion()
        //WORKING
    } else {
        //if letter is not part of secret word
        livesLeft--
        //decrement lives
        livesArea.innerHTML = `${livesLeft} lives left`
        //innerHTML will change in real time to show current live left
        console.log("you have: ", livesLeft, 'lives')
        //letter will be added to wrong letter array-attached to wrong box
        wrongLetters.push(selectedLetter)
        console.log('I guessed these wrong: ', wrongLetters)
        //disable letter from being used again
        disableSelectedLetter(selectedLetter)
        //add letter from wrong letter box
        addToWrongBox(selectedLetter)
        alert('Wrong Letter. Try Again')
    }
    //when live is 0, this alert will show and the game will reset
    if (livesLeft === 0) {
        alert('Aww, you ran out of lives. The word was ' + secretWord)
        resetGame()
    }
}
//INCOMPLETE

const addToWrongBox = () => {
    //append letters to .wrong-box div
    wrongBox.innerHTML = wrongLetters
    console.log("AWW I'M IN TIME OUT! *pout*")
}//WORKING 

const checkWordCompletion = () => {
    let wholeWordGuessed = false
    //check if the entire word has been guessed
    if (wholeWordGuessed === guesses + secretWord) {
        wholeWordGuessed = true
        alert("YOU WIN!")
        resetGame()
    }
    console.log('this is the completed word ', wholeWordGuessed)
}
checkWordCompletion() //INCOMPLETE

const hintButton = (e) => {

    hints = {
        sports: ['home runs and batting cages', 'two teams of eleven and wicket',
            'created by Jigoro Kano and throw to ground', 'made of aircraft aluminum and air sport',
            'ball over net and serve', 'originated in ancient India and mat'],
        'fashion icons': [],
        'famous cities': [],
        'musical instruments': []
    }
    let hintIndex = categories.indexOf()
    clueInput.innerHTML = 'The clue is: ' + categories[word]

}//INCOMPLETE

hintsInput.addEventListener('click', hintButton)

const winGame = () => {
    //if player has guessed the correct word
}//INCOMPLETE


const loseGame = () => {

}//INCOMPLETE



const resetGame = () => {
    wrongLetters = []
    livesLeft = 6
    livesArea.innerHTML = `${livesLeft} lives left`
    wrongBox = []
    hideLetters.classList.remove('hide')
}//INCOMPLETE




const disableSelectedLetter = (selectedLetter) => {
    hideLetters = Array.from(alphabetSquares).find(function (alpha) {
        return alpha.innerText === selectedLetter
    })
    hideLetters.classList.add('hide')
    hideLetters.removeEventListener('click', userGuess)
}//WORKING

const howToPlayButton = () => {

}//INCOMPLETE


const playAgainButton = (e) => {
    let restart = e.target.innerHTML
    // livesLeft = 6
    // livesArea.innerHTML = `${livesLeft} lives left`
    alert("Let's play again")
    resetGame()
}//WORKING

//event listener to play again button... will reset game
restartGame.addEventListener('click', playAgainButton)
//click listener on the letter the user guesses
alphabetSquares.forEach(square => {
    square.addEventListener('click', userGuess)
})









