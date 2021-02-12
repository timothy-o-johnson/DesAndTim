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
  scoreTeamB3 () {}

  getScore () {
    var score = `00${this.teamAScore}:00${this.teamBScore}`
    return score
  }
}

module.exports = scoreCard
