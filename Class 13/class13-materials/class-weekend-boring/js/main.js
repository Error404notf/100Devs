//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)
// document.getElementById('check').onclick = loop

// function loop(){
//   const dayOfWeek = document.querySelector('#day').value.toLowerCase()

//   if (dayOfWeek == 'tuesday' || dayOfWeek == 'thursday'){
//     document.querySelector('#placeToSee').innerHTML='Let us learn'
//   }else{
//     document.querySelector('#placeToSee').innerHTML='Boo go away'
//   }
// }

document.querySelector('#check').addEventListener('click', loop)

function loop(){
  const day = document.getElementById('day').value.toLowerCase()

  if (day =='tuesday' || day == 'thursday'){
    alert('We are learning JS')
  }else if ( day == 'wednesday'){
    alert('Humpday')
  }else {
    alert('Boringgggg!!')
  }

}