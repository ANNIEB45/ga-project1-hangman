//variables for letters
const alphabetForLetterBox = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//Categories
const categories = {
    sports: ['baseball', 'cricket', 'judo', 'hang gliding', 'volleyball', 'yoga'],

    'fashion icons': ['audrey hepburn', 'rihanna', 'mary and ashley olsen', 'princess diana', 'bob dylan', 'kanye west'],
    'famous cities': ['paris', 'dubai', 'new york', 'kuala lumpa', 'istanbul', 'london', 'los angelos'],
    'musical instruments': ['trombone', 'french horn', 'oboe', 'xylophone', 'synthesizer', 'lute', 'electric guitar']
}

const startGameButton = ''
const categoriesMenu = document.querySelector('.category-container')
const hint = ''
const letterBox = document.querySelector('.letterbox')
const wrongLetters = ''
const livesLeft = ''
const userName = ''
const score = ''
const howToPlay = ''

//alphabet list
//div with class letter-box
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


//select a category
const categoeriesMenuList = () =>{
    //create new div for category button
    categoryDiv = document.createElement('div')
    categoryDiv.classList.add = 'categoList'
    categoryDiv.innerHTML = 'Category'
    //loop through the category keys

    for(let i = 0; i < Object.keys(categories).length; i++) {
        //create a list div
        listCategEl = document.createElement('div')
        listCategEl.classList.add = 'categoryWords'
        //add category keys to list div
        listCategEl.innerHTML = Object.keys(categories)[i]
        //append the list div to the new div and new div to category div
        categoriesMenu.appendChild(categoryDiv)
        categoryDiv.appendChild(listCategEl)

    }
}
console.log(categoeriesMenuList())



