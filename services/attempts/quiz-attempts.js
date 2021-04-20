const attemptsDao = require('../../daos/quiz-attempts-dao')

const findAttemptsForQuiz = (quizId)=>attemptsDao.findAttemptsForQuiz(quizId)

const createAttempt=(quizId,attempt)=>attemptsDao.createAttempt(quizId,attempt)

module.exports ={findAttemptsForQuiz,createAttempt}