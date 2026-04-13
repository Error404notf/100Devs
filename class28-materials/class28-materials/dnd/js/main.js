//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const inputValue = document.querySelector('input').value
  fetch(`https://www.dnd5eapi.co/api/spells/${inputValue}`)
    .then(res => res.json())
    .then( data => {
      console.log(data)
      document.querySelector('h2').innerText = data.name
      document.querySelector('h3').textContent = data.classes[0].name
       document.querySelector('ul').innerHTML = ''
      data.subclasses.forEach( sub => {
        console.log(sub)
        const li = document.createElement('li')
        li.textContent = sub.name
        document.querySelector('ul').appendChild(li)
       
      })
    })
    .catch ( error => console.error(`${error}`))
}


