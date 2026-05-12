//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
const arr = []
function reverSal(pokemonXters){
  for(let i=pokemonXters.length-1; i>=0; i--){
    arr.push(pokemonXters[i])
  }
  return arr;
}
console.log(reverSal( ['a','b','d','ditto']))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function sumEval(a,b){
  return a.reduce((a,b)=> a + b**2,0)> b.reduce((a,b) => a + b**3,0) ? true :false 
}
console.log(sumEval([100,20000,3,4,5],[4.5,43,52,4]))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function multiples(arrayysss){
  return arrayysss.filter((e,i)=> e % i ==0)
}
console.log(multiples([22, -6, 32, 82, 9, 25]))
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumOfAll(arrays){
  return arrays.reduce((a,b)=> a + Number(b), 0)
}
console.log(sumOfAll([2,3,'4','100',45]))
