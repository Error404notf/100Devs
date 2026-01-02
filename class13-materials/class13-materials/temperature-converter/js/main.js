//Write your pseduo code first! 
// declare a variable 
document.querySelector('#convert').addEventListener('click', temp)
// convert to fahrenheit
function temp(){
  let fah_temp = document.querySelector('#temp').value
  fah_temp= fah_temp * 9/5 + 32
  // display it to new output
  document.querySelector('#hereweGo').innerHTML = fah_temp
}

