// *Variables*
// Create a variable and console log the value
let num = 5
console.log(num)
// Create a variable, add 10 to it, and alert the value
let addTen = 7
addTen = addTen + 10
alert(addTen)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFourNums(a,b,c,d){
  alert(a-b-c-d)
}
subtractsFourNums(70,60,50,40)
// Create a function that divides one number by another and returns the remainder
function dividesOneNum(c,d){
  return c % d
}
console.log(dividesOneNum(10,3))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(n1,n2){
  const addition = n1 + n2

  if (addition > 50 ){
    alert('Jumanji')
  }
}
addTwoNums(90,1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNums(m1,m2,m3){
  const multiplication = m1 * m2 * m3

  if (multiplication % 3 == 0 ){
    alert('Zebra')
  }
}
multiplysThreeNums(7,2,4)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumber(word,number){
  for(i = 1; i <= number; i ++ ){
    console.log(word)
  }
}
wordNumber('beautiful',6)