//Create an array of movies with at least three movies.
let movies = ['Mr Bones', 'Pitch Perfect', 'The Notebook']
//Using the array from above, store the first movie in a variable
let movie = movies[0];
//Get the length of the original array and store it in a new variable
let lengthMovies = movies.length
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
const lastElement = movies[lengthMovies-1]
console.log(lastElement)