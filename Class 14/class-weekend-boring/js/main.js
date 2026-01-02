//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', dayOfTheWeek)

function dayOfTheWeek(){
  const day = document.querySelector('#day').value.toLowerCase()

  if(day == 'tuesday' || day =='thursday'){
    alert('Hurray we are learning Javascript')
  }else if(day == 'saturday' || day == 'sunday' ){
    alert('Ladies and Gentlemen let us have fun')
    document.querySelector('body').style.backgroundColor = 'Red'
  }else {
    alert('WRONG!')
  }
}
