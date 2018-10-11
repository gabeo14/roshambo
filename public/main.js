let playerOneChoice = ''
let playerTwoChoice = ''

const detectWinner = () => {
  // IF player one choice And player two choice are NOT empty strings
  // THEN both players have chosen
  if (playerOneChoice !== '' && playerTwoChoice !== '') {
    let footer = document.querySelector('footer')
    // IF player one choice is rock AND player two choice is scissors
    // OR player one choice is paper AND player two choice is rock
    // OR player one choice is scissors AND player two choice is paper
    // THEN player one wins
    if (
      (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') ||
      (playerOneChoice === 'paper' && playerTwoChoice === 'rock') ||
      (playerOneChoice === 'scissors' && playerTwoChoice === 'paper')
    ) {
      footer.textContent = 'PLAYER ONE WINS'
    }
    // IF player two choice is rock AND player one choice is scissors
    // OR player two choice is paper AND player one choice is rock
    // OR player two choice is scissors AND player one choice is paper
    // THEN player two wins
    if (
      (playerTwoChoice === 'rock' && playerOneChoice === 'scissors') ||
      (playerTwoChoice === 'paper' && playerOneChoice === 'rock') ||
      (playerTwoChoice === 'scissors' && playerOneChoice === 'paper')
    ) {
      footer.textContent = 'PLAYER TWO WINS'
    }
    // IF player one choice is rock AND player two choice is rock
    // OR player one choice is paper AND player two choice is paper
    // OR player one choice is scissors AND player two choice is scissors
    // THEN tie
    if (
      (playerOneChoice === 'rock' && playerTwoChoice === 'rock') ||
      (playerOneChoice === 'paper' && playerTwoChoice === 'paper') ||
      (playerOneChoice === 'scissors' && playerTwoChoice === 'scissors')
    ) {
      footer.textContent = 'TIE'
    }
  }
}

let clickedPlayerOneRock = event => {
  document.querySelector('.player-1').classList.add('choice-made')

  playerOneChoice = 'rock'
  detectWinner()
}

let clickedPlayerOnePaper = event => {
  document.querySelector('.player-1').classList.add('choice-made')

  playerOneChoice = 'paper'
  detectWinner()
}

let clickedPlayerOneScissors = event => {
  document.querySelector('.player-1').classList.add('choice-made')

  playerOneChoice = 'scissors'
  detectWinner()
}

let clickedPlayerTwoRock = event => {
  document.querySelector('.player-2').classList.add('choice-made')

  playerTwoChoice = 'rock'
  detectWinner()
}

let clickedPlayerTwoPaper = event => {
  document.querySelector('.player-2').classList.add('choice-made')

  playerTwoChoice = 'paper'
  detectWinner()
}

let clickedPlayerTwoScissors = event => {
  document.querySelector('.player-2').classList.add('choice-made')

  playerTwoChoice = 'scissors'
  detectWinner()
}

const main = () => {
  const playerOneRock = document.querySelector('.player-1 .rock')
  playerOneRock.addEventListener('click', clickedPlayerOneRock)

  const playerOnePaper = document.querySelector('.player-1 .paper')
  playerOnePaper.addEventListener('click', clickedPlayerOnePaper)

  const playerOneScissors = document.querySelector('.player-1 .scissors')
  playerOneScissors.addEventListener('click', clickedPlayerOneScissors)

  const playerTwoRock = document.querySelector('.player-2 .rock')
  playerTwoRock.addEventListener('click', clickedPlayerTwoRock)

  const playerTwoPaper = document.querySelector('.player-2 .paper')
  playerTwoPaper.addEventListener('click', clickedPlayerTwoPaper)

  const playerTwoScissors = document.querySelector('.player-2 .scissors')
  playerTwoScissors.addEventListener('click', clickedPlayerTwoScissors)
}

document.addEventListener('DOMContentLoaded', main)
