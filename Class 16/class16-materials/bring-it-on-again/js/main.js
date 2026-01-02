// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 5
alert(num)
// Create a variable, divide it by 10, and console log the value
let divNum = 5
divNum = divNum / 10
console.log(divNum)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNums(m1,m2,m3){
  alert(m1 * m2 * m3)
}
multiplyThreeNums(9,9,9)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function takesFourNums(a,b,c,d){
  
  console.log( a + b -(c + d))
}
takesFourNums(1,2,3,4)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function takesThreeNums(num1,num2,num3){
  let result = (100 + num1 - num2)/ num3
  if(result > 25){
    console.log("WE HAVE A WINNNA")
  }
}
takesThreeNums(189,853,0)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function daysoftheWeek(checktheday){
  let dayOftheweek = checktheday.toLowerCase()

  if( dayOftheweek == 'saturday' || dayOftheweek == 'sunday'){
    alert('weekend')
  }else if( dayOftheweek == 'monday' || dayOftheweek =='tuesday' || dayOftheweek == 'wednesday' || dayOftheweek == 'thursday' || dayOftheweek =='friday'){
    alert('week day')
  }else {
    alert('Try again!')
  }
}
daysoftheWeek('Sunday')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function number(x){
  
}