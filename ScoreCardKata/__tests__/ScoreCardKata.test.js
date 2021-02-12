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