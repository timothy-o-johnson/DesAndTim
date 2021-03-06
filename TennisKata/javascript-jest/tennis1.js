'use strict'

function getScore (m_score1, m_score2) {
  var score = ''
  var tempScore = 0

  // If score 1 & 2 are equal
  if (m_score1 === m_score2) {
    // This function shows all the possible names for a tie score
    switch (m_score1) {
      case 0:
        score = 'Love-All'
        break
      case 1:
        score = 'Fifteen-All'
        break
      case 2:
        score = 'Thirty-All'
        break
      default:
        score = 'Deuce'
        break
    }
  } else if (m_score1 >= 4 || m_score2 >= 4) {
    // If one or the other has a score higher or equal to 4
    // Find the difference between the 2 scores
    var minusResult = m_score1 - m_score2
    // If Player 1 has 1 point lead then the score is "Advantage", if the lead is 2 points then player 1 win. Same for player 2 but with -1 and if its anything else, player 2 wins
    if (minusResult === 1) {
      score = 'Advantage player1'
    } else if (minusResult === -1) {
      score = 'Advantage player2'
    } else if (minusResult >= 2) {
      score = 'Win for player1'
    } else {
      score = 'Win for player2'
    }
  } // if not a tie and the players have less than 4 points... then build score
  else {
      // m_score1 = 3
      // m_score2 = 1

        // 1. take points and convert to score text 
             // m_score1 = 3 --> m_score1 = 'Forty'
             // m_score2 = 1 --> m_score2 = 'Fifteen'
        
         function takePointsAndConvertToText(playerScore) {
             var text 

             switch (playerScore) {
                    case 0:
                    text = 'Love'
                    break

                    case 1:
                    text = 'Fifteen'
                    break

                    case 2:
                    text =  'Thirty'
                    break

                    case 3:
                    text = 'Forty'
                    break
                }

             return text 
         }

         var p1ScoreText = takePointsAndConvertToText(m_score1) // 'Forty'
         var p2ScoreText = takePointsAndConvertToText(m_score2) // 'Fifteen'

        // 2. take the score text and update the scoreboard
            // score = 'Forty-Fifteen'

        function updateScoreboard(p1ScoreText,  p2ScoreText){ 
            // p1ScoreText = 'Forty',  p2ScoreText = 'Fifteen'
            var score = p1ScoreText + '-' + p2ScoreText // 'Forty-Fifteen'
            return score
        }

        score = updateScoreboard(p1ScoreText,  p2ScoreText)
        // 3. return score

      // score = ''
      // tempScore = 0


      // i = 1 
      // tempScore = 3
      // score = 'Forty'

      // i = 2
      // score = 'Forty-Fifteen'
      // tempScore = 1

    // for (var i = 1; i < 3; i++) {
    //   if (i === 1) {
    //     tempScore = m_score1
    //   } else {
    //     score += '-'
    //     tempScore = m_score2
    //   }

    //   switch (tempScore) {
    //     case 0:
    //       score += 'Love'
    //       break
    //     case 1:
    //       score += 'Fifteen'
    //       break
    //     case 2:
    //       score += 'Thirty'
    //       break
    //     case 3:
    //       score += 'Forty'
    //       break
    //   }
    // }



  }
  return score
}

module.exports = getScore
