let playerOneChoice = ""
let playerTwoChoice = ""

//IF player one choice And player two choice are NOT empty strings
//THEN both players have chosen

//IF player one choice is rock AND player two choice is scissors
//OR player one choice is paper AND player two choice is rock
//OR player one choice is scissors AND player two choice is paper
//THEN player one wins

//IF player two choice is rock AND player one choice is scissors
//OR player two choice is paper AND player one choice is rock
//OR player two choice is scissors AND player one choice is paper
//THEN player two wins

//IF player one choice is rock AND player two choice is rock
//OR player one choice is paper AND player two choice is paper
//OR player one choice is scissors AND player two choice is scissors
//THEN tie
const main = () => {
    const playerOneRock = document.querySelector ('.player-1 .rock')
    playerOneRock.addEventListener ('click', clickedPlayerOneRock)

    const playerOnePaper = document.querySelector ('.player-1 .paper')
    playerOnePaper.addEventListener ('click', clickedPlayerOnePaper)

    const playerOneScissors = document.querySelector ('.player-1 .scissors')
    playerOneScissors.addEventListener ('click', clickedPlayerOneScissors)

    const playerTwoRock = document.querySelector ('.player-2 .rock')
    playerTwoRock.addEventListener ('click', clickedPlayerTwoRock)

    const playerTwoPaper = document.querySelector ('.player-2 .paper')
    playerTwoPaper.addEventListener ('click', clickedPlayerTwoPaper)

    const playerTwoScissors = document.querySelector ('.player-2 .scissors')
    playerTwoScissors.addEventListener ('click' clickedPlayerTwoScissors)
}

document.addEventListener("DOMContentLoaded", main)
