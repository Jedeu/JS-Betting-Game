"use strict";

var bankroll = 100;

while (bankroll) > 0 {
  var bet = prompt('Place a bet between $5 and $10. No cents please!');

  var guess = prompt('Guess a number between 1 and 10. No decimals please!');

  var RNGGod = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var ranNum = RNGGod(1, 10);

  if (guess == ranNum) {
    alert('Your guess was right!');
    bankroll += bet;
  }
  else if ((guess - ranNum) == Math.abs(1) || (guess + ranNum) == Math.abs(1)) {
    alert('Close! You do not gain nor lose money');
  }
  else {
    alert('Nope, you lose $' + bet);
    bankroll -= bet;
  }
}