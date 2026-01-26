// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favdrink = ' Drinking chocolate '
console.log(favdrink.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const fruits = ['bananas', 'mangoes', 'apples', 'watermelon']
console.log(fruits.includes('apples'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockpaperscissors(){
  let random = Math.random()
  if(random < .33){
    return 'Rock'
  }else if(random < .66){
    return 'Paper'
  }else {
    return 'Scissors'
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkwin(){
   let botchoice = rockpaperscissors()
   let playerchoice = rockpaperscissors()
   if( playerchoice == 'Rock' && botchoice == 'Scissors' || playerchoice == 'Paper' && botchoice == 'Rock' || playerchoice == 'Scissors' && botchoice == 'Paper'){
    return 'YOU WIN'
   }else if(botchoice == playerchoice){
    return 'YOU TIED'
   }else {
    return 'YOU LOSE'
   }
}
checkwin()
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function arrays(choices){
  choices.forEach(choices => {
    console.log(checkwin(choices))
  })
}
arrays(['Scissors','Rock','Papers'])