//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// document.querySelector('button').addEventListener('click', showDrink)

// function showDrink(){
//   let input = document.querySelector('input').value
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.drinks[0])
      
//       document.querySelector('img').src = data.drinks[0].strDrinkThumb
//       document.querySelector('h3').innerText = data.drinks[0].strInstructions
//       document.querySelector('h2').innerText = data.drinks[0].strDrink
//     })
// }


// document.querySelector('button').addEventListener('click', showDrink)

// function showDrink(){
//   let input = document.querySelector('input').value
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       document.querySelector('h2').innerText = data.drinks[0].
//       strDrink
//       document.querySelector('img').src = data.drinks[0].
//       strDrinkThumb
//     })
// }

// let drinks = [];       // will hold our fetched list
// let currentIndex = 0;  // tracks which drink is showing

// // 1. Fetch a batch of drinks on page load
// fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
//   .then(res => res.json())
//   .then(data => {
//     drinks = data.drinks.slice(0, 10); // grab just the first 10
//     showDrink(); // show the first one immediately
//     setInterval(nextDrink, 3000); // then rotate every 3 seconds
//   })
//   .catch(err => console.log(`Error: ${err}`));

// // 2. Display the drink at currentIndex
// function showDrink() {
//   const drink = drinks[currentIndex];
//   document.querySelector('img').src = drink.strDrinkThumb;
//   document.querySelector('h2').innerText = drink.strDrink;

// }

// // 3. Advance the index, looping back to 0 when we reach the end
// function nextDrink() {
//   currentIndex = (currentIndex + 1) % drinks.length;
//   showDrink();
// }

// let drinks = []
// let currentIndex = 0;

// fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
//   .then(res => res.json())
//   .then(data => {
//     drinks = data.drinks
//     showDrink();
//     setInterval(nextDrink, 3500)
//   })

//   function showDrink(){
//     const drink = drinks[currentIndex]
//     document.querySelector('img').src = drink.strDrinkThumb
//     document.querySelector('h2').innerText = drink.strDrink  
//   }
//   function nextDrink(){
//     currentIndex = (currentIndex + 1) % drinks.length;
//     showDrink()
//   }

let drinks = []
let currentValue = 0;

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
  .then( res => res.json())
  .then(data => {
    drinks = data.drinks
    showDrink();
    setInterval(nextDrink, 3000)
  })

  function showDrink(){
    const drink = drinks[currentValue]
    document.querySelector('img').src = drink.strDrinkThumb
    document.querySelector('h2').innerText = drink.strDrink
  }

  function nextDrink(){
    currentValue = [currentValue + 1] % drinks.length;
    showDrink()
  }