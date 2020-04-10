// //variables for letters
const alphabetForLetterBox = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]


//global variables:
const guessesLeft = document.querySelector('.guesses-left')


//categories for the game- 
const categories = ['baseball', 'hang gliding', 'audrey hepburn', 'rihanna',
    'paris', 'kuala lumpa', 'los angelos', 'french horn', 'oboe', 'xylophone']

// words will be randomized
let chosenWord = categories[(Math.floor(Math.random()) * categories.length)]
console.log(chosenWord)
//where letters user select will appear
const answerInput = document.querySelector('.answer-field')
let answerInputField = []

for (let i = 0; i < chosenWord.length; i++) {
    answerInputField[i] = '_'
    console.log(answerInputField)
}
answerInput.innerHTML = answerInputField.join(' ')


// //div with class letter-box
const letterBox = document.querySelector('.letter-box')
//this function is to create the letter box to hold the alphabets
const newLetter = () => {
    //created a ul element
    alphabetList = document.createElement('div')
    for (let i = 0; i < alphabetForLetterBox.length; i++) {
        alphabetList.class = 'alphabet-box'
        //create list element
        listEl = document.createElement('div')
        listEl.class = 'squares'
        //add the alphabet index to each li element
        listEl.innerHTML = alphabetForLetterBox[i];
        //append the ul to the div and the li to the ul
        letterBox.appendChild(alphabetList)
        alphabetList.appendChild(listEl)
    }
}
console.log(newLetter())









