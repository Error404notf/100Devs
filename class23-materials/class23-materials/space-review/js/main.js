//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let num = [1,2,3,4]
alert(num.reduce((sum,numberss)=> sum + numberss,0))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function sumofnum(numbers){
  return numbers.map(num => Math.pow(num, 2))
}
sumofnum(num)
//Create a function that takes string
//Print the reverse of that string to the console
function reversedstring(string){
  return string.split('').reverse().join('')
}
console.log(reversedstring('amazon'));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromes(str){
  alert(str == str.split('').reverse().join(''))
}
palindromes('madam')