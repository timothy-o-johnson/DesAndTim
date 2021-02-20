const scoreCard = require('../score-card-kata')
var scoreCardTest = new scoreCard()
test(' 0. create a class ScoreKeeper which offers following methods: scoreTeamA1(), scoreTeamA2(), scoreTeamA3(), scoreTeamB1(), scoreTeamB2(), scoreTeamB3(), getScore()', () => {
  // console.log('scoreCard', scoreCard)

  console.log('scoreCardTest', scoreCardTest)

  expect(scoreCardTest.scoreTeamA1).toBeDefined()
  expect(scoreCardTest.scoreTeamA2).toBeDefined()
  expect(scoreCardTest.scoreTeamA3).toBeDefined()
  expect(scoreCardTest.scoreTeamB1).toBeDefined()
  expect(scoreCardTest.scoreTeamB2).toBeDefined()
  expect(scoreCardTest.scoreTeamB3).toBeDefined()
  expect(scoreCardTest.getScore).toBeDefined()
})

test(' 1. get score should return a String that always has seven characters. An example would be 000:000', () => {
  expect(scoreCardTest.getScore()).toBe('000:000')
})

test(' 2. scoreTeamA1() should add 1 point to the first teams total', () => {
  scoreCardTest.scoreTeamA1()
  expect(scoreCardTest.getScore()).toBe('001:000')
})

test(' 3. scoreTeamA2() should add 2 point to the first teams total', () => {
  scoreCardTest.scoreTeamA2()
  expect(scoreCardTest.getScore()).toBe('003:000')
})

test(' 4. scoreTeamA3() should add 3 points to the first teams total', () => {
  scoreCardTest.scoreTeamA3()
  expect(scoreCardTest.getScore()).toBe('006:000')
})

test(' 5. scoreTeamB1() should add 1 point to the second teams total', () => {
  scoreCardTest.scoreTeamB1()
  expect(scoreCardTest.getScore()).toBe('006:001')
})

test(' 6. scoreTeamB2() should add 2 points to the second teams total', () => {
  scoreCardTest.scoreTeamB2()
  expect(scoreCardTest.getScore()).toBe('006:003')
})

test(' 7. scoreTeamB3() should add 3 points to the second teams total', () => {
  scoreCardTest.scoreTeamB3()
  expect(scoreCardTest.getScore()).toBe('006:006')
})

test(' 8. if a team has double digit scores the score should still be 7 digits (###: ###) ', () => {
  scoreCardTest.scoreTeamA3() // + 3 = 9pts
  scoreCardTest.scoreTeamA3() // + 3 = 12pt

  scoreCardTest.scoreTeamB3() // + 3 = 9pts
  scoreCardTest.scoreTeamB2() // + 2 = 11pt

  expect(scoreCardTest.getScore()).toBe('012:011')
})

test(' 9. if a team has single digit scores it should have two leading 0s, if team has double-digit score should have one leading 0, and if triple digit should have no leading zeros', () => {
  expect(scoreCardTest.formatScore('123')).toBe('123')
  expect(scoreCardTest.formatScore('28')).toBe('028')
  expect(scoreCardTest.formatScore('4')).toBe('004')
})