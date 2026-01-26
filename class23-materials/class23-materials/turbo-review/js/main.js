// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'BLUAHHH'
alert(sentence.endsWith('?'))
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let strings = 'jr. dev'
console.log(strings.replaceAll('jr. dev', 'software engineer'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps(){
  let random = Math.random()
  if(random < .33){
    return 'rock'
  }else if(random < .66){
    return 'paper'
  }else{
    return 'scissors'
  }
}
rps()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkwin(playerchoice){
  let botchoice = rps()
  if(playerchoice == 'rock' && botchoice =='scissors' || playerchoice == 'paper' && botchoice =='rock'|| playerchoice =='scissors' && botchoice == 'paper'){
    return 'you win'
  }else if(playerchoice == botchoice){
    return 'you tied'
  }else{
    return 'it is a tie'
  }
}
checkwin('rock')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function arrays(choices){
  choices.forEach(choice => console.log(checkwin(choices)))
}
arrays(['rock','paper','scissors'])