
function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissors"]
  let rand =Math.floor(Math.random() * arr.length)
  return arr[rand]
}

function getResult(playerChoice, computerChoice) {

  let score;
  
  if(playerChoice === computerChoice) {
    score = 0 }

  else if(playerChoice === "Rock" && computerChoice === "Scissors"){
    score = 1
  } else if(playerChoice === "Paper" && computerChoice === "Rock"){
    score = 1
  }else if(playerChoice === "Scissors" && computerChoice === "Rock"){
    score = 1
  }else{
    score = -1
  }
 return score
}

function showResult(score, playerChoice, computerChoice) {
  
  let result = document.getElementById('result')
  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }

  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
  navigator.vibrate(50)
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score, playerChoice.value, computerChoice)
}

function playGame() {
  let rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsButton => {
    rpsButton.addEventListener('click', () => 
      
      onClickRPS(rpsButton))
  
  
  })

  let endGameButton = document.getElementById('endGameButton')
  endGameButton.addEventListener('click', () => endGame())


                                 
}

function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()