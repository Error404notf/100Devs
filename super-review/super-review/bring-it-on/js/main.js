// *Variables*
// Create a variable and console log the value
let number = 5;
console.log(number);
// Create a variable, add 10 to it, and alert the value
let adding = number + 10
alert(adding)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumbers(sub1,sub2,sub3,sub4){
  alert(sub1 - sub2 - sub3 - sub4);
}
subFourNumbers(2,4,5,6)
// Create a function that divides one number by another and returns the remainder
function divideOneNumber(div,div2){
  const divide = div % div2
  return divide
}
divideOneNumber(50,100)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(add1,add2){
  const addition = add1 + add2
  if(addition > 50){
    alert('Jumanji');
  }else{
    alert('Wrong ')
  }
}
addTwoNums(100,0)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNums(mul1,mul2,mul3){
  const multiplication = mul * mul2 * mul3
  if(multiplication % 3 == 0){
    alert('ZEBRA')
  }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
