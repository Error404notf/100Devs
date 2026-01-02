//Create a conditonal that checks their age
let age = prompt(document.querySelector('h1').addEventListener('click' ,h1))
//If under 16, tell them they can not drive
if(age < 16){
  console.log('they can not drive')
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
else if(age < 18){
  console.log("can't hate from outside the club, because they can't even get in")
}
//If under 21, tell them they can not drink
else if(age < 21){
  console.log('them they can not drink')
}
//If under 25, tell them they can not rent cars affordablys
else if( age < 25){
 console.log('they can not rent cars affordably') 
}
//If under 30, tell them they can not rent fancy cars affordably
else if(age < 30){
  console.log('they can not rent fancy cars affordably')
}
//If under over 30, tell them there is nothing left to look forward too
else if(age > 30){
  console.log('tell them there is nothing left to look forward too')
}

//--- Harder
//On click of the h1

//Take the value from the input
function h1(){
  document.querySelector('input').value
  document.querySelector('p').innerText = age
}
//Place the result of the conditional in the paragraph

