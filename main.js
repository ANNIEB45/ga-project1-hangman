console.log('Alien Hangman Game')


//popup box appear w/intro to game

//prompt user to input name

//prompt user to pick game level

//popup box will disappear

//another popup will appear asking user to pick category

//user name will be in top middle area

//letter box array
// const letterBoxArr =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 
// 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
// console.log(letterBoxArr)

     //maybe use an object-with key/value pair???
     const categories = {
        sports: ['baseball', 'cricket','judo','hang gliding', 'volleyball', 'yoga'],
        
        'fashion icons': ['audrey hepburn', 'rihanna', 'mary and ashley olsen', 'princess diana', 'bob dylan', 'kanye west'],
        'famous cities': ['paris', 'dubai', 'new york', 'kuala lumpa', 'istanbul', 'london', 'los angelos'],
        'musical instruments': ['trombone', 'french horn', 'oboe', 'xylophone', 'synthesizer', 'lute', 'electric guitar']
    }

    console.log(categories)

//choosing categories
// const categoriesArr = ['sports', 'fashion icons', 'famouss cities', 'musical instruments']
// console.log(categoriesArr)

//words for each categories
    //sports: baseball, cricket, judo, hang gliding, volleyball, yoga
    //fashion icons: audrey hepburn, rihanna, mary and ashley olsen, princess diana, bob dylan, kanye west
    //famous cities: paris, dubai, new york, kuala lumpa, istanbul, london, los angelos
    //musical instruments: trombone, french horn, oboe, xylophone, synthesizer, lute, electric guitar


let chosenCategory = categories["famous cities"]
console.log(chosenCategory)

let word = chosenCategory[(Math.floor(Math.random()) * chosenCategory.length)]
console.log(word)

let answerInputField = []

for (let i = 0; i < word.length; i++){
        answerInputField[i] = '|_|'
    console.log(answerInputField)
}

let remainingLetters = word.length
console.log(remainingLetters)

const line = () => {document.getElementsByClassName('lines').innerHTML = (answerInputField.join(' ')) }
line()
console.log(line)

// while(remainingLetters >0){
   
// }
 



