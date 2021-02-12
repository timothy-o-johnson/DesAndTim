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

test (" 1. get score should return a String that always has seven characters. An example would be 000:000",()=>{
  expect(scoreCardTest.getScore()).toBe("000:000")
})
test.todo ("1 add 1 point to the teams total") 

// class someClass {
//   constructor() {
   
//   }

//   helloWorld(){
//     console.log('hello world!')
    
//   }
// }

// var someClass1 = new someClass()

// someClass1.helloWorld()