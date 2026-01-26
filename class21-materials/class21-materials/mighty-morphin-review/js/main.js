// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'newyears'
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'word'
alert(word.substring(word.length-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takesFive(f1,f2,f3,f4,f5){
   const add = 100 - (f1+f2+f3+f4+f5)
   alert(add) 
}
takesFive(1,2,4,5,6)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takesThree(t1,t2,t3){
  console.log(Math.min(t1,t2,t3))
  console.log(Math.max(t1,t2,t3))
}
takesThree(8,8,5)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headTails(){
  if(Math.random() < 0.5){
    return 'heads'
  }else{
    return 'tails'
  }
}
headTails()
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function takesNumber(m){
  for(let i = 1; i <= m; i++){
    console.log(headTails())
  }
}
takesNumber(4)