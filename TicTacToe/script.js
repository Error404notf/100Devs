let gameState = ['','','','','','','','','']
let gameActive = true 
let currentPlayer = 'X'

const winningMessage = () => `Player ${currentPlayer} has won the game`
const drawMessage = () => `Game ends in a draw`
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const status = document.querySelector('.status')
status.innerHTML = currentPlayerTurn()
const restart = document.querySelector('.restart')
const cells = document.querySelectorAll('.cell')

cells.forEach(cell => cell.addEventListener('click', handleCellClick))

function cellPlayed(cellClicked,cellClickedIndex){
  gameState[cellClickedIndex] = currentPlayer
  cellClicked.innerHTML = currentPlayer
}

function handleCellPlayed(){
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
    status.innerHTML = currentPlayerTurn()
}

function handleResultValidation() {
  let roundWon = false
  console.log("Referee is checking...")

  for(let i = 0; i<winningConditions.length; i++){
    const condition = winningConditions[i]

    let a = gameState[condition[0]]
    let b = gameState[condition[1]]
    let c = gameState[condition[2]]

    if(a == '' || b == '' || c == ''){
      continue;
    }
    if(a == b && b == c){
      roundWon = true
      break;
    }
  }

  if (roundWon) {
    status.innerHTML = winningMessage()
    gameActive = false
    return
  }

  let roundDraw = !gameState.includes("")
  
  if (roundDraw) {
    status.innerHTML = drawMessage()
    gameActive = false
    return
  }

  handleCellPlayed()
}

function handleCellClick(event){
  const cellClicked = event.target
  const cellClickedIndex = parseInt(cellClicked.getAttribute('data-index'))

  if(!gameActive || gameState[cellClickedIndex] !==''){
    return
  }
  cellPlayed(cellClicked,cellClickedIndex)
  handleResultValidation()
}




































// let gameActive = true
// let currentPlayer = 'X'
// let gameState = ['','','','','','','','','']

// const winningMessage = () => `${currentPlayer} has won the game`
// const drawMessage = () => `Game ended in a draw`
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

// const restart = document.querySelector('.restart')
// const statusDisplay = document.querySelector('.status')
// const cells = document.querySelectorAll('.cell')

// statusDisplay.textContent = currentPlayerTurn()

// cells.forEach(cell => cell.addEventListener('click', handleClick))

// function cellPlayed(clickedCell,clickedCellIndex){
//   gameState[clickedCellIndex] = currentPlayer
//   clickedCell.innerHTML = currentPlayer
// }
// function handleCellPlayed(){
//   currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
//   statusDisplay.innerHTML = currentPlayerTurn()
// }
// function handleClick(event){
//   const clickedCell = event.target
//   const clickedCellIndex = clickedCell.getAttribute('data-index')

//   if(gameState[clickedCellIndex] !=='' || !gameActive){
//     return
//   }
//   cellPlayed(clickedCell,clickedCellIndex)
//   console.log(gameState)
//   handleCellPlayed()
//   console.log(currentPlayer)
// }




























