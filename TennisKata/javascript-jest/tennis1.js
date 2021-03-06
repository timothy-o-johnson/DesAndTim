'use strict'

function getScore (m_score1, m_score2) {
  var score = ''
  var tempScore = 0

  // If score 1 & 2 are equal
  if (m_score1 === m_score2) {
    // This funtion shows all the possible names for a tie score
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
    // If Player 1 has 1 point advantage, 2 Points is a win. Same for player 2 but with -1
    if (minusResult === 1) {
      score = 'Advantage player1'
    } else if (minusResult === -1) {
      score = 'Advantage player2'
    } else if (minusResult >= 2) {
      score = 'Win for player1'
    } else {
      score = 'Win for player2'
    }
  } //
  else {
    for (var i = 1; i < 3; i++) {
      if (i === 1) {
        tempScore = m_score1
      } else {
        score += '-'
        tempScore = m_score2
      }
      switch (tempScore) {
        case 0:
          score += 'Love'
          break
        case 1:
          score += 'Fifteen'
          break
        case 2:
          score += 'Thirty'
          break
        case 3:
          score += 'Forty'
          break
      }
    }
  }
  return score
}

module.exports = getScore
