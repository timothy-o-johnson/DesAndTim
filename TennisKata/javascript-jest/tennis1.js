'use strict'

function getScore (player_score1, player_score2) {
  var score = ''
  var tempScore = 0

  var p1ScoreText = takePointsAndConvertToText(player_score1) // 1pt -> 'Fifteen'
  var p2ScoreText = takePointsAndConvertToText(player_score2) // 1pt -> 'Fifteen'

  score = updateScoreboard(p1ScoreText, p2ScoreText) // 'Fifteen-Fifteen'

  // If score 1 & 2 are equal
  if (player_score1 === player_score2) {
    // This function shows all the possible names for a tie score
    switch (p1ScoreText) {
      case 'Love':
        score = 'Love-All'
        break
      case 'Fifteen':
        score = 'Fifteen-All'
        break
      case 'Thirty':
        score = 'Thirty-All'
        break
      default:
        score = 'Deuce'
        break
    }
  } else if (player_score1 >= 4 || player_score2 >= 4) {
    // If one or the other has a score higher or equal to 4
    // Find the difference between the 2 scores
    // var minusResult = player_score1 - player_score2
    // If Player 1 has 1 point lead then the score is "Advantage", if the lead is 2 points then player 1 win. Same for player 2 but with -1 and if its anything else, player 2 wins

    // player1_score = 6
    // player2_score = 4

    if (player_score1 >= player_score2 + 2){
       score = 'Win for player1'
    } else if(player_score2 >= player_score1 + 2){
      score = 'Win for player2'
    } else if (player_score1 > player_score2) {
      score = 'Advantage player1'
    } else if (player_score1 < player_score2) {
      score = 'Advantage player2'
    } 
  }

  return score

  function takePointsAndConvertToText (playerScore) {
    var text

    switch (playerScore) {
      case 0:
        text = 'Love'
        break

      case 1:
        text = 'Fifteen'
        break

      case 2:
        text = 'Thirty'
        break

      case 3:
        text = 'Forty'
        break
    }

    return text
  }

  function updateScoreboard (p1ScoreText, p2ScoreText) {
    // p1ScoreText = 'Forty',  p2ScoreText = 'Fifteen'
    var score = p1ScoreText + '-' + p2ScoreText // 'Forty-Fifteen'
    return score
  }
}

module.exports = getScore
