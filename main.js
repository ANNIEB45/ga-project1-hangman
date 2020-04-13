//alphabets
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const letter = 'a'

const letterBox = document.querySelector('.letterbox')



    //this function is to create the letter box to hold the alphabets
const newLetter = () => {
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
        // when user clicks letter check 
// if letter is inside of secretWord string
// if true console
//letter appears in secretWord display field in correct spot
//count of correct letter 
//
    }
}
newLetter()

letterBox.addEventListener('click', () =>{
    //is a clicked === a in secret word(true or false)
    const secretLetter = 'a'
    const checkLetter = str.includes('a')
    //if it is true, console.log(it is true)
    if(){
        console.log('it is true')
    }







})