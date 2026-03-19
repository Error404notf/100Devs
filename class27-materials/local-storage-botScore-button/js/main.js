//Create a button that adds 1 to a botScore stored in localStorage 
document.querySelector('button').addEventListener('click', showScore)
if(!localStorage.getItem('botscore')){
  localStorage.setItem('botscore', 0)
}
function showScore(){
  let botScoreVal = Number(localStorage.getItem('botscore'))
  botScoreVal += 1
  localStorage.setItem('botscore', botScoreVal)
}