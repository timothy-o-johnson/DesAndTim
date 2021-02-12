class scoreCard {
  constructor () {
    this.teamAScore = 0
    this.teamBScore = 0
  }

  scoreTeamA1 () {
    this.teamAScore = this.teamAScore + 1
  }

  scoreTeamA2 () {
    this.teamAScore = this.teamAScore + 2
  }
  scoreTeamA3 () {
    this.teamAScore = this.teamAScore + 3
  }
  scoreTeamB1 () {
    this.teamBScore = this.teamBScore + 1
  }
  scoreTeamB2 () {
    this.teamBScore = this.teamBScore + 2
  }
  scoreTeamB3 () {
    this.teamBScore = this.teamBScore + 3
  }

  getScore () {
    var teamAScore = `${this.teamAScore}`
    var teamBScore = `${this.teamBScore}`

    var score = `${teamAScore}:${teamBScore}`

    return score
  }

  getTeamScore (score) {
    var teamScore

    // if score triple-digits get zero 0s
    if (score.length === 3) {
      teamScore = score
    }

    // if score double-digits get one 0
    if (score.length === 2) {
      teamScore = '0' + score
    }

    // if score is single-digit get two 0s
    if (score.length === 1) {
      teamScore = '00' + score
    }

    return teamScore
  }
}

module.exports = scoreCard
