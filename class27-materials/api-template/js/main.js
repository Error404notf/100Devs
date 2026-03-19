// //Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', showPokemon)

// function showPokemon(){
//   let pokemon = document.querySelector('input').value.toLowerCase()
// fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       document.querySelector('h2').innerText = data.name.toUpperCase()
//       document.querySelector('img').src = data.sprites['front_default']
//     })
// }
document.querySelector('button').addEventListener('click', showNasa)
const img = document.querySelector('img')
const iframe = document.querySelector('iframe')
const title = document.querySelector('h2')
const explanation =  document.querySelector('h3')

//RESET 
img.src = ""
iframe.src = ""
function showNasa(){
  let inputVal = document.querySelector('input').value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${inputVal}`
)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.media_type === "image"){
       img.src = data.url
       }else if(data.media_type ==='video'){
        iframe.src = data.url
       }
       title.innerText = data.title
       explanation.innerText = data.explanation
    })
}
