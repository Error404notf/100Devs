document.querySelector('button').addEventListener('click', drawTwoCards)

function drawTwoCards(){
  fetch('https://www.deckofcardsapi.com/api/deck/new/draw/?count=2')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('#player1').src = data.cards[0].image
    document.querySelector('#player2').src = data.cards[1].image
    let player1 = convertToNum(data.cards[0].value)
    let player2 = convertToNum(data.cards[1].value)
    if(player1 > player2){
      document.querySelector('h3').innerText = 'Player 1 Wins!!!'
    }else if(player1 < player2){
      document.querySelector('h3').innerText = 'Player 2 Wins!!!'
    }else{
      document.querySelector('h3').innerText = 'Time for War!'
    }
  })
}

function convertToNum(val){
  if(val ==='KING'){
    return 11;
  }
  else if(val ==='QUEEN'){
    return 12;
  }
  else if(val === 'ACE'){
    return 13;
  }
  else if(val ==='JACK'){
    return 14;
  }else {
    return Number(val)
  }
}