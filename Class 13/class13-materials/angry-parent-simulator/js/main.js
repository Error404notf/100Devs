// document.getElementById('yell').onclick = yell

// function yell(){
//   const fName = document.querySelector('#firstName').value 
//   const fMiddle = document.querySelector('#firstMiddle').value
//   const lMiddle = document.querySelector('#firstMiddle').value
//   const lName = document.querySelector('#lastName').value

//   document.getElementById('placeToYell').innerText = `${fMiddle} ${fMiddle}  ${lMiddle}  ${lName}`
// }

document.querySelector('#yell').onclick = yell

function yell(){
  const fName = document.querySelector('#firstName').value 
  const fMiddle = document.querySelector('#firstMiddle').value
  const lMiddle = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

document.getElementById('placeToYell').innerText = `${fName} ${fMiddle} ${lMiddle} ${lName}`
}
// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
