// *Variables*
// Create a variable and console log the value
let age = 25
console.log(age)
// Create a variable, add 10 to it, and alert the value
let num = 10
alert(num)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub2nums(a,b,c,d){
  alert(a-b-c-d)
}
sub2nums(100,7,25,3)
// Create a function that divides one number by another and returns the remainder
function divs2(div1,div2){
  return div1 % div2
}
alert(divs2(32,5))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addtwoNums(a,b){
  // let addition = a + b
  console.log(a + b)
  
if ( a + b > 50){
  alert('Jumanji')
}else if ( a + b  < 50){
  alert('nothing to display here')
}
}
addtwoNums(98,5)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysthreenumbers(mul1,mul2,mul3){
  let mulitiply = mul1 * mul2 * mul3
  console.log(mulitiply)

  if (mulitiply % 3 == 0){
    alert('ZEBRA')
  }else{
    alert('NO ZEBRA')
  }
}
multiplysthreenumbers(100,200,300)