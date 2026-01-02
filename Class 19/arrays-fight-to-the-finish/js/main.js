//Create an array of movie titles. Loop through the array and each element to the h2.
const movieTitle  = ['BACK TO THE FUTURE', 'MEN IN BLACK', 'BARBIE']
movieTitle.forEach((movies,i)=>{
  document.querySelector('h2').innerHTML +=' ' + movies
})
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const numbers = [100,40,60]
// numbers.forEach((number,i)=>{
//   numbers[i]= number + 3
//   console.log(numbers[i])
// })
//Find the average of all the numbers from question three
let sum = 0;
numbers.forEach((number,i)=>{
  
  sum = sum + number
  console.log(sum)
})