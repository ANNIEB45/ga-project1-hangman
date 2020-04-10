// //variables for letters
// const alphabetForLetterBox = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
//     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]

// //div with class letter-box
// const letterBox = document.querySelector('.letter-box')
// //this function is to create the letter box to hold the alphabets
// const newLetter = () => {
//     //created a ul element
//     alphabetList = document.createElement('ul')
//     for (let i = 0; i < alphabetForLetterBox.length; i++) {
//         alphabetList.class = 'alphabet-box'
//         //create list element
//         listEl = document.createElement('li')
//         listEl.class = 'squares'
//         //add the alphabet index to each li element
//         listEl.innerHTML = alphabetForLetterBox[i];
//         //append the ul to the div and the li to the ul
//         letterBox.appendChild(alphabetList)
//         alphabetList.appendChild(listEl)
//         }
//     }
// console.log(newLetter())


//categories for the game- this will be shown in the pop up screen
const categories = ['baseball', 'hang gliding', 'audrey hepburn', 'rihanna', 
'paris', 'kuala lumpa', 'los angelos', 'french horn', 'oboe', 'xylophone']


let chosenWord = categories[(Math.floor(Math.random()) * categories.length)]

console.log(chosenWord)

let answerInputField = []

for (let i = 0; i < chosenWord.length; i++){
        answerInputField[i] = '_'
    console.log(answerInputField)
}

let remainingLetters = chosenWord.length
console.log(remainingLetters)





