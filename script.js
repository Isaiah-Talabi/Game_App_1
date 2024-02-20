// Game 1: Click Counter
let score = 0;

document.getElementById('click-btn').addEventListener('click', () => {
  score++;
  document.getElementById('score-value').textContent = score;
});

// Game 2: Guess the Number
const secretNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById('guess-btn').addEventListener('click', () => {
  const userGuess = parseInt(document.getElementById('guess-input').value);

  if (userGuess === secretNumber) {
    document.getElementById('guess-result').textContent = 'Congratulations! You guessed the correct number!';
  } else {
    document.getElementById('guess-result').textContent = 'Sorry, try again.';
  }
});

// Game 3: Color Change
document.getElementById('change-color-btn').addEventListener('click', () => {
  const colorBox = document.getElementById('color-box');
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Game 4: Word Guess
const words = ["apple", "banana", "orange", "grape", "watermelon"];
let currentWord = "";
let shuffledWord = "";

document.getElementById('guess-word-btn').addEventListener('click', () => {
  const userGuess = document.getElementById('guess-word-input').value.toLowerCase();

  if (userGuess === currentWord) {
    document.getElementById('word-guess-result').textContent = 'Congratulations! You guessed the word!';
  } else {
    document.getElementById('word-guess-result').textContent = 'Sorry, try again.';
  }
});

function startWordGuessGame() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  shuffledWord = currentWord.split('').sort(() => Math.random() - 0.5).join('');
  document.getElementById('word-to-guess').textContent = shuffledWord;
}

// Game 5: Memory Match
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];
let memoryCards = [];

document.getElementById('start-memory-game-btn').addEventListener('click', startMemoryMatchGame);

function startMemoryMatchGame() {
  memoryCards = colors.concat(colors); // Duplicate the array for matching pairs
  memoryCards.sort(() => Math.random() - 0.5); // Shuffle the cards

  const memoryCardsContainer = document.getElementById('memory-cards-container');
  memoryCardsContainer.innerHTML = '';

  memoryCards.forEach((color, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.index = index;
    card.style.backgroundColor = 'gray';
    card.addEventListener('click', flipMemoryCard);
    memoryCardsContainer.appendChild(card);
  });
}

let flippedCards = [];

function flipMemoryCard() {
  if (flippedCards.length < 2) {
    const clickedCard = this;
    clickedCard.style.backgroundColor = memoryCards[clickedCard.dataset.index];
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.style.backgroundColor === card2.style.backgroundColor) {
    // Match
    card1.removeEventListener('click', flipMemoryCard);
    card2.removeEventListener('click', flipMemoryCard);
  } else {
    // No match, flip the cards back
    card1.style.backgroundColor = 'gray';
    card2.style.backgroundColor = 'gray';
  }

  flippedCards = [];
}

// ... (previous code) ...

// Game 6: Rock, Paper, Scissors
const rpsOptions = ['Rock', 'Paper', 'Scissors'];

document.getElementById('rock-btn').addEventListener('click', () => playRPS('Rock'));
document.getElementById('paper-btn').addEventListener('click', () => playRPS('Paper'));
document.getElementById('scissors-btn').addEventListener('click', () => playRPS('Scissors'));

function playRPS(userChoice) {
  const computerChoice = rpsOptions[Math.floor(Math.random() * 3)];
  const result = determineRPSWinner(userChoice, computerChoice);

  document.getElementById('rps-result').textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. Result: ${result}`;
}

function determineRPSWinner(user, computer) {
  if (user === computer) {
    return 'It\'s a tie!';
  } else if ((user === 'Rock' && computer === 'Scissors') ||
             (user === 'Paper' && computer === 'Rock') ||
             (user === 'Scissors' && computer === 'Paper')) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Game 7: Memory Game
const colors = ['red', 'blue', 'green', 'yellow'];
let memoryCards = [];

document.getElementById('start-memory-btn').addEventListener('click', startMemoryGame);

function startMemoryGame() {
  memoryCards = shuffleArray(colors.concat(colors));
  displayMemoryCards();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayMemoryCards() {
  const memoryCardsContainer = document.getElementById('memory-cards');
  memoryCardsContainer.innerHTML = '';

  for (const color of memoryCards) {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.style.backgroundColor = color;
    card.addEventListener('click', () => revealCard(card));

    memoryCardsContainer.appendChild(card);
  }
}

function revealCard(card) {
  card.classList.add('revealed');
}

// ... (remaining code) ...
// You can continue adding more games in a similar manner
// You can continue adding more games in a similar manner
