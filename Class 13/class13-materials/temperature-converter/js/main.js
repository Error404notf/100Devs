document.getElementById('convert').onclick = convert

function convert(){
  let amount = document.querySelector('#temp').value 
  amount = amount * 129
  document.querySelector('#hereweGo').innerHTML = `${amount}`
}