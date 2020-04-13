//variables for letters
const alphabetForLetterBox = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//Categories
const categories = {
    sports: ['baseball', 'cricket', 'judo', 'hang gliding',
        'volleyball', 'yoga'],

    'fashion icons': ['audrey hepburn', 'rihanna', 'mary and ashley olsen',
        'princess diana', 'bob dylan', 'kanye west'],
    'famous cities': ['paris', 'dubai', 'new york', 'kuala lumpa',
        'istanbul', 'london', 'los angelos'],
    'musical instruments': ['trombone', 'french horn', 'oboe',
        'xylophone', 'synthesizer', 'lute', 'electric guitar']
}
// console.log(Object.keys(categories)[0])
// console.log(Object.values(categories)[2])

const startGameButton = ''
const categoriesMenu = document.querySelector('.category-container')
const hint = ''
const letterBox = document.querySelector('.letterbox')
const wrongLetters = ''
const livesLeft = 0
const userName = ''
const score = ''
const howToPlay = ''


//div with class letter-box
//this function is to create the letter box to hold the alphabets
const newLetter = () => {
    //created a ul element
    alphabetList = document.createElement('div')
    for (let i = 0; i < alphabetForLetterBox.length; i++) {
        alphabetList.classList = 'alphabet-box'
        //create list element
        listEl = document.createElement('div')
        listEl.classList = 'squares'
        //add the alphabet index to each li element
        listEl.innerHTML = alphabetForLetterBox[i];
        //append the ul to the div and the li to the ul
        letterBox.appendChild(alphabetList)
        alphabetList.appendChild(listEl)
    }
}
newLetter()


//select a category
const categoeriesMenuList = () => {
    //create new div for category button
    categoryDiv = document.createElement('div')
    categoryDiv.classList = 'categoList'
    categoryDiv.innerHTML = 'Category'
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
categoeriesMenuList()

// const answerField = document.querySelector('.answer-field')


// let chosenCategory = categories['sports']
// console.log(chosenCategory)

// let word = chosenCategory[(Math.floor(Math.random()) * chosenCategory.length)]
// console.log(word)

// let answerInputField = []

// for (let i = 0; i < word.length; i++){
//         answerInputField[i] = '_'
//     console.log(answerInputField)
// }
//     answerField.innerHTML = answerInputField.join(' ')

const choosenCategory = document.querySelectorAll('.categoryWords')
const answerField = document.querySelector('.answer-field')
console.log(choosenCategory)
let answerInput = []

const selectSports = () =>{
let categorySports = Object.values(categories)[0]
console.log(categorySports)
let words = categorySports[(Math.floor(Math.random()) * categorySports.length)]
    console.log(words)
    for (let i = 0; i < words.length; i++) {
        answerInput[i] = '_'
        console.log(answerInput)
    }
}

choosenCategory.addEventListener('click', selectSports)


let categoryFashionIcons = Object.values(categories)[1]
console.log(categoryFashionIcons)

let categoryFamousCities = Object.values(categories)[2]
console.log(categoryFamousCities)

let categoryMusicalInstruments = Object.values(categories)[3]
console.log(categoryMusicalInstruments)

// if (choosenCategory === Object.keys(categories)[0]) {
    // let words = categorySports[(Math.floor(Math.random()) * categorySports.length)]
    // console.log(words)
    // for (let i = 0; i < words.length; i++) {
    //     answerInput[i] = '_'
    //     console.log(answerInput)
    // }
    answerField.innerHTML = answerInput.join(' ')


// }

//     choosenCategory[1] === Object.keys(categories)[1]
//     choosenCategory[2] === Object.keys(categories)[2] 
//     choosenCategory[3] === Object.keys(categories)[3]) {
//        const word = Object.values(categories)[(Math.floor(Math.random()* Object.values(categories).length))]
//             for(let i = 0; i < word.length; i++)
//     }
// }

// const word = Object.values(categories)[1][(Math.floor(Math.random()* Object.values(categories).length))]
// console.log(word)

