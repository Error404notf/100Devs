//Write your pseduo code first! 
// value first


document.querySelector('#convert').onclick = convert
// convert the value
function convert(){
  let currency = document.querySelector('#celsius').value
  currency = currency * 129
  document.querySelector('#insertion').innerHTML = currency 
}
  

// display 
 

