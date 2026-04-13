document.querySelector('button').addEventListener('click', fetchBook)

function fetchBook(){
  const choice = document.querySelector('input').value
  fetch(`https://openlibrary.org/isbn/${choice}.json`)
    .then(res => res.json())
    .then( data =>{
      console.log(data)
      if(!localStorage.getItem('books')){
        localStorage.setItem('books', data.title)
      }else{
        let books = localStorage.getItem('books') + " ; " + data.title
        localStorage.setItem('books', books)
      }
      document.querySelector('h2').textContent = localStorage.getItem('books')
    })
    
}