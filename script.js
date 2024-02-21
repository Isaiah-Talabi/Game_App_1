function startGame(gameName) {
  var gameContainer = document.getElementById('game');
  gameContainer.innerHTML = '';

  if (gameName === 'tic-tac-toe') {
      // Implement Tic Tac Toe game

      if (gameName === 'tic-tac-toe') {
        startTicTacToe(gameContainer);
    } else if (gameName === 'rock-paper-scissors') {
        startRockPaperScissors(gameContainer);
    } else if (gameName === 'number-guess') {
        startNumberGuessing(gameContainer);
    } else {
        gameContainer.innerHTML = 'Invalid game selected';
    }
}

      //      gameContainer.innerHTML = 'Tic Tac Toe Game';
//  } else if (gameName === 'rock-paper-scissors') {
      // Implement Rock Paper Scissors game
      gameContainer.innerHTML = 'Rock Paper Scissors Game';
//  } else if (gameName === 'number-guess') {
//      // Implement Number Guessing game
//      gameContainer.innerHTML = 'Number Guessing Game';
//  } else {
//      gameContainer.innerHTML = 'Invalid game selected';
//  }
//}

function startTicTacToe(container) {
  // Implement Tic Tac Toe game
  container.innerHTML = '<h2>Tic Tac Toe Game</h2>';
  // Add your Tic Tac Toe game implementation here
  var board = document.createElement('div');
  board.classList.add('board');
  var currentPlayer = 'X';
  var cells = Array(9).fill(null);
  //[];

  for (var i = 0; i < 9; i++) {
      var cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-index', i);
      cell.addEventListener('click', function(event) {
        var index = parseInt(event.target.getAttribute('data-index'));
        if (cells[index] === null) {
          cells[index] = currentPlayer;
          event.target.textContent = currentPlayer;
        //if (!event.target.textContent) {
            //event.target.textContent = currentPlayer;
            //cells[event.target.getAttribute('data-index')] = currentPlayer;

            if (checkWinner(cells, currentPlayer)) {
                container.innerHTML += `<p class="result">Player ${currentPlayer} wins!</p>`;
                disableCells(container);
                return;
            }

            if (!cells.includes(null)) {
              container.innerHTML += `<p class="result">It's a tie!</p>`;
              disableCells(container);
              return;
          }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          }
        });
        board.appendChild(cell);
    }

    container.appendChild(board);
}

function checkWinner(cells, currentPlayer) {
    var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winningCombinations.some(combination =>
        combination.every(index => cells[index] === currentPlayer)
    );
}

function disableCells(container) {
    var cells = container.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
    });
}

//
//            if (!cells.includes(undefined)) {
//                container.innerHTML += `<p class="result">It's a tie!</p>`;
//                return;
//            }
//        }
//    });
//    board.appendChild(cell);
//}

//container.appendChild(board);
//}

//function checkWinner(cells, currentPlayer) {
//var winningCombinations = [
//    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//    [0, 4, 8], [2, 4, 6] // Diagonals
//];
//
//return winningCombinations.some(combination =>
//    combination.every(index => cells[index] === currentPlayer)
//);
//}
//
//      
  //    
    //  
      //
      //
//      handleClick);
//      board.appendChild(cell);
//  }
//  container.appendChild(board);
//}

//function handleClick(event) {
 // var cell = event.target;
  // Handle cell click logic
//}

function startRockPaperScissors(container) {
  // Implement Rock Paper Scissors game
  container.innerHTML = '<h2>Rock Paper Scissors Game</h2>';
  // Add your Rock Paper Scissors game implementation here
  var choices = ['rock', 'paper', 'scissors'];
 // var playerChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
 
 function playGame(playerChoice) {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  var result = '';

  if (!choices.includes(playerChoice)) {
    result = 'Invalid choice. Please choose rock, paper, or scissors.';
} else if (playerChoice === computerChoice) {
    result = 'It\'s a tie!';
} else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
) {
    result = 'You win!';
} else {
    result = 'Computer wins!';
}

 // Check if the player's choice is valid
// if (!choices.includes(playerChoice)) {
  //container.innerHTML += '<p class="result">Invalid choice. Please choose rock, paper, or scissors.</p>';
  //return;
//}
 
  //var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  //var result = '';

//  if (playerChoice === computerChoice) {
 //     result = 'It\'s a tie!';
 // } else if (
 //     (playerChoice === 'rock' && computerChoice === 'scissors') ||
 //     (playerChoice === 'paper' && computerChoice === 'rock') ||
 //     (playerChoice === 'scissors' && computerChoice === 'paper')
 // ) {
 //     result = 'You win!';
 // } else {
 //     result = 'Computer wins!';
 // }

  container.innerHTML += `<p>Your choice: ${playerChoice}</p>`;
  container.innerHTML += `<p>Computer's choice: ${computerChoice}</p>`;
  container.innerHTML += `<p>${result}</p>`;

  var restartButton = document.createElement('button');
  restartButton.textContent = 'Play Again';
  restartButton.addEventListener('click', function() {
      container.innerHTML = '';
      startRockPaperScissors(container);
  });
  container.appendChild(restartButton);
}

var playerChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
playGame(playerChoice);
}

//}

function startNumberGuessing(container) {
  // Implement Number Guessing game
  container.innerHTML = '<h2>Number Guessing Game</h2>';
  // Add your Number Guessing game implementation here
  var numberToGuess = Math.floor(Math.random() * 100) + 1;
  var attempts = 0;
  var maxAttempts = 10; // Set a maximum number of attempts
  var guess;

  while (attempts < maxAttempts) {
    guess = parseInt(prompt(`Guess the number (between 1 and 100). You have ${maxAttempts - attempts} attempts remaining:`));
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        continue;
    }

    if (guess === numberToGuess) {
        container.innerHTML += `<p class="result">Congratulations! You guessed the number ${numberToGuess} in ${attempts} attempts!</p>`;
        return;
    } else if (guess < numberToGuess) {
        alert("Too low. Try again.");
    } else {
        alert("Too high. Try again.");
    }
}

container.innerHTML += `<p class="result">Sorry, you've reached the maximum number of attempts. The number was ${numberToGuess}.</p>`;
}

//  do {
//      guess = parseInt(prompt("Guess the number (between 1 and 100):"));
//      attempts++;
//
 //     if (guess < numberToGuess) {
 //         alert("Too low. Try again.");
  //    } else if (guess > numberToGuess) {
   //       alert("Too high. Try again.");
   //   }
  //} while (guess !== numberToGuess);
//
  //container.innerHTML += `<p>Congratulations! You guessed the number ${numberToGuess} in ${attempts} attempts!</p>`;
}
