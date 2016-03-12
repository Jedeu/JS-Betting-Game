    $(function() {
    var cashMoneyz = 100;

    $('#guessing-form').on('submit', function(e) {
      e.preventDefault();
      var bet = +($('#bets-form :input').val());
      var guess = $('#guessing-form :input').val();

      var RNGGod = function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
      };

      var ranNum = RNGGod(1, 10);

      if (guess == ranNum) {
        $('#flash-correct').fadeIn('fast', function() {
          $(this).delay(500).fadeOut();
          cashMoneyz += bet;
          $('#bank').text(cashMoneyz);
        });
      }
      else if ((guess - ranNum) == Math.abs(1)) {
        $('#flash-almost').fadeIn('fast', function() {
          $(this).delay(500).fadeOut();
        });
      }
      else {
        $('#flash-incorrect').fadeIn('fast', function() {
          $(this).delay(500).fadeOut();
          if (cashMoneyz < bet) {
            $('#bank').text(0);
          }
          else { 
            cashMoneyz -= bet;
            $('#bank').text(cashMoneyz);
          }
        });
      }
    });
  });

// Next thing is to make a check that there are no decimals and that all inputs are whole numbers within specific range.
// Then beautify 