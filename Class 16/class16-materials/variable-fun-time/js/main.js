//--- Easy
//create a variable and assign it a number
let number = 25
//minus 10 from that number
number = number - 10
//print that number to the console
console.log(number)
//--- Medium
//create a variable that holds a value from the input
let valueInput = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
valueInput = valueInput + 24
//alert that number
alert(valueInput)
//--- Hard
//create a variable that holds the h1
let hold = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
hold.onclick = sum 

function sum(){
  console.log(Number(number) + Number(valueInput))
}
