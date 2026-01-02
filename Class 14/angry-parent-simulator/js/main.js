document.querySelector('#yell').addEventListener('click', yellOut)

const yelling =  document.querySelector('#placeToYell')

function yellOut(){
  const fName = document.querySelector('#firstName').value
  const fMiddle = document.querySelector('#firstName').value
  const lMiddle = document.querySelector('#firstName').value
  const lName = document.querySelector('#firstName').value

  yelling.innerHTML = `${fName} ${fMiddle} ${lMiddle} ${lName}`
  
}

  // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here


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
