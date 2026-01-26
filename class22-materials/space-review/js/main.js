//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const array = [2,3,4,5]
let sum = array.reduce((sum, arrays)=> sum + arrays, 0)
alert(sum)
//Create a function that takes in an array of numbers
function word(arrayNumbers){
  return arrayNumbers.map(element => element * 2)
}
console.log(word([2,3,4,5]))
//Return a new array of numbers that is every original number squared

//Create a function that takes string
function str(string){
  return string.split('').reverse().join('')
}
console.log(str('lessgoo'))
//Print the reverse of that string to the console
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function stri(strings){
  if(strings === strings.split('').reverse().join('')){
    return 'It is a palindrome'
  }else {
    return 'Not a palidrome'
  }
}
alert(stri('madam'))