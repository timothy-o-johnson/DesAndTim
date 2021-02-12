class scoreCard {
  constructor () {
      this.teamAScore = 0
  }

  scoreTeamA1 () {
      this.teamAScore = this.teamAScore + 1
  }
  
  scoreTeamA2 () {}
  scoreTeamA3 () {}
  scoreTeamB1 () {}
  scoreTeamB2 () {}
  scoreTeamB3 () {}

  getScore () {
    var score = `00${this.teamAScore}:000`
    return score
  }
}

module.exports = scoreCard
