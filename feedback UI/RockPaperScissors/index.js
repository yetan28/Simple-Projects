 // Object to track the score
let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
  loses:0,
  ties:0
};

//function to reset score
function resetScore(){
  score.wins=0;
  score.loses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
}

// Function to generate random computer moves
function getComputerMove() {
  const randomValue = Math.random(); // Generate a random number
  let computerMove; // Declare the variable to store the move

  if (randomValue < 1 / 3) {
    computerMove = 'rock';
  } else if (randomValue < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove; // Return the generated move
}

// Function to determine the result
function getResult(userMove, computerMove) {
  if (userMove === computerMove) {
    return 'Tie';
  }
  if (
    (userMove === 'rock' && computerMove === 'scissors') ||
    (userMove === 'paper' && computerMove === 'rock') ||
    (userMove === 'scissors' && computerMove === 'paper')
  ) {
    return 'You Win';
  }
  return 'You Lose';
}

// Main function to handle user move
function makeMove(userMove) {
  const computerMove = getComputerMove(); // Get the computer's move
  const result = getResult(userMove, computerMove); // Determine the result

  // Update the score based on the result
  if (result === 'You Win') {
    score.wins += 1;
  } else if (result === 'You Lose') {
    score.loses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  //To store score in localStorage
  localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();


     

  // Display the result and score
      document.querySelector('.js-result').innerHTML=result;
      document.querySelector('.js-moves').innerHTML=`You ${userMove} - ${computerMove} Computer`;

    }

    //Fuction to updateScore
    function updateScoreElement(){
      document.querySelector('.js-score')
      .innerHTML=`Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;

    }
