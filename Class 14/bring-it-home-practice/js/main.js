// *Variables*
// Create a variable and console log the value
let age = 25
console.log(age)
// Create a variable, add 10 to it, and alert the value
let rate = 5
rate = rate + 10
alert(rate)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumbers(sub1,sub2,sub3,sub4){
  const subtraction = sub1 - sub2 - sub3 -sub4
  alert(subtraction)
}
subFourNumbers(100,20,5,4)
// Create a function that divides one number by another and returns the remainder
function divides(num1,num2){
  return num1 / num2
}
console.log(divides(80,20))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumbers(n1,n2){
  const addition = n1 + n2

  if(addition > 50){
    alert('Jumanji')
  }
}
addTwoNumbers(30,40)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(m1,m2,m3){
  const multiply = m1 * m2 * m3

  if(multiply % 3 == 0){
    alert('zebra')
  }else{
    alert('notzebra')
  }
}
multiply(9,1,2)