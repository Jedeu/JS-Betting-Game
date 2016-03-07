var bet = prompt('Place a bet between $5 and $10. No cents please!');

var guess = prompt('Guess a number between 1 and 10. No decimals please!')

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}