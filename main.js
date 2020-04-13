// //variables for letters
const alphabetForLetterBox = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// //Categories
// const categories = {
//     sports: ['baseball', 'cricket', 'judo', 'hang gliding',
//         'volleyball', 'yoga'],

//     'fashion icons': ['audrey hepburn', 'rihanna', 'mary and ashley olsen',
//         'princess diana', 'bob dylan', 'kanye west'],
//     'famous cities': ['paris', 'dubai', 'new york', 'kuala lumpa',
//         'istanbul', 'london', 'los angelos'],
//     'musical instruments': ['trombone', 'french horn', 'oboe',
//         'xylophone', 'synthesizer', 'lute', 'electric guitar']
// }
// let categorySports = Object.values(categories)[0]
// let categoryFashionIcons = Object.values(categories)[1]
// let categoryFamousCities = Object.values(categories)[2]
// let categoryMusicalInstruments = Object.values(categories)[3]




// const choosenCategory = document.querySelectorAll('.categoryWords')
const answerField = document.querySelector('.answer-field')
// const startGameButton = ''
// const categoriesMenu = document.querySelector('.category-container')
// const hint = ''
// const letterBox = document.querySelector('.letterbox')
const wrongLetters = ''
const livesLeft = 6
// const userName = ''
const score = ''
// const howToPlay = ''
const guess = ''


// //div with class letter-box
// //this function is to create the letter box to hold the alphabets
// const newLetter = () => {
//     //created a ul element
//     alphabetList = document.createElement('div')
//     for (let i = 0; i < alphabetForLetterBox.length; i++) {
//         alphabetList.classList = 'alphabet-box'
//         //create list element
//         listEl = document.createElement('div')
//         listEl.classList = 'squares'
//         //add the alphabet index to each li element
//         listEl.innerHTML = alphabetForLetterBox[i];
//         //append the ul to the div and the li to the ul
//         letterBox.appendChild(alphabetList)
//         alphabetList.appendChild(listEl)
//     }
// }
// newLetter()


// //select a category
// const categoeriesMenuList = () => {
//     //create new div for category button
//     categoryDiv = document.createElement('div')
//     categoryDiv.classList = 'categoList'
//     categoryHeading = document.createElement('p')
//     categoryHeading.classList = 'category-heading'
//     categoryHeading.innerHTML = 'Category'
//     categoryDiv.appendChild(categoryHeading)
//     //loop through the category keys
//     for (let i = 0; i < Object.keys(categories).length; i++) {
//         //create a list div
//         listCategEl = document.createElement('div')
//         listCategEl.classList = 'categoryWords'
//         //add category keys to list div
//         listCategEl.innerHTML = Object.keys(categories)[i]
//         // console.log(listCategEl)
//         //append the list div to the new div and new div to category div
//         categoriesMenu.appendChild(categoryDiv)
//         categoryDiv.appendChild(listCategEl)
//     }
// }
// categoeriesMenuList()


// let answerInput = []
// console.log(categorySports)

// const selectSport = () => {
//     let words = categorySports[(Math.floor(Math.random()) * categorySports.length)]
//     console.log(words)
//     for (let i = 0; i < words.length; i++) {
//         answerInput[i] = '_'
//         console.log(answerInput)
//     }
//     answerField.innerHTML = answerInput.join(' ')
// }
// selectSport()

// const userGuess = () =>{

//     }

// // let categoryFashionIcons = Object.values(categories)[1]
// // console.log(categoryFashionIcons)
// // const selectFashion = () => {
// //     let words = categoryFashionIcons[(Math.floor(Math.random()) * categoryFashionIcons.length)]
// //     console.log(words)
// // for (let i = 0; i < words.length; i++) {
// //     answerInput[i] = '_'
// //     console.log(answerInput)
// //     }
// //     answerField.innerHTML = answerInput.join(' ')
// // }
// // // selectFashion()


// // let categoryFamousCities = Object.values(categories)[2]
// // console.log(categoryFamousCities)
// // const selectCities = () => {
// //     let words = categoryFamousCities[(Math.floor(Math.random()) * categoryFamousCities.length)]
// //     console.log(words)
// // for (let i = 0; i < words.length; i++) {
// //     answerInput[i] = '_'
// //     console.log(answerInput)
// //     }
// //     answerField.innerHTML = answerInput.join(' ')
// // }
// // // selectCities()

// // let categoryMusicalInstruments = Object.values(categories)[3]
// // console.log(categoryMusicalInstruments)
// // const selectInstruments = () => {
// //     let words = categoryMusicalInstruments[(Math.floor(Math.random()) * categoryMusicalInstruments.length)]
// //     console.log(words)
// // for (let i = 0; i < words.length; i++) {
// //     answerInput[i] = '_'
// //     console.log(answerInput)
// //     }
// //     answerField.innerHTML = answerInput.join(' ')
// // }
// // selectInstruments()


// // let selectCategories = () => {
// //     if(choosenCategory === categorySports){
// //         let word1 = categorySports[(Math.floor(Math.random()) * categorySports.length)] 
// //         console.log(words)
// //     }else if(choosenCategory === categoryFashionIcons){
// //         let word2 = categoryFashionIcons[(Math.floor(Math.random()) * categoryFashionIcons.length)]
// //     }else if(choosenCategory === categoryFamousCities){
// //         let word3 = categoryFamousCities[(Math.floor(Math.random()) * categoryFamousCities.length)]
// //     }else if(choosenCategory === categoryMusicalInstruments){
// //         let word4 = categoryMusicalInstruments[(Math.floor(Math.random()) * categoryMusicalInstruments.length)]
// //     }
// // }
// // selectCategories()

const words = ['annie','rose','patrick']

let alphabetWords = document.querySelectorAll('.letterBox')
alphabetDiv = document.createElement('div')
alphabetDiv.classList = 'newDiv'
alphabetDiv.innerHTML = alphabetForLetterBox
alphabetWords.appendChild(alphabetForLetterBox)

let randomWords = words(Math.floor(Math.random()) * words.length)
console.log(randomWords)

