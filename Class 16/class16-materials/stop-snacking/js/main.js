//Create a function that grabs the number of snacks from the input and tells you to stop that many times
// document.querySelector('#help').onclick = snacks

// function snacks(){
//   let noOfSnacks = Number(document.querySelector('input').value)
//   document.querySelector('#stops').innerText = ""
//   for (i = 1; i <= noOfSnacks; i++){
//     document.querySelector('#stops').innerText += ' STOP!'
//   }
//     }
 
document.querySelector('#help').onclick = snacks

function snacks(){
  snackTime = document.querySelector('input').value
  document.querySelector('#stops').innerHTML=""
  for( i = 1; i <=snackTime; i++ ){
    document.querySelector('#stops').innerHTML += ' STOPS'
  }
}