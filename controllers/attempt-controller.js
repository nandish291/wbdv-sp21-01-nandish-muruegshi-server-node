const attemptService=require("../services/attempts/quiz-attempts")

module.exports = (app) => {
    app.post('/api/quizzes/:qid/attempts', (req, res)=>
    {
        console.log(req)
        attemptService.createAttempt( req.params.qid, req.body)
            .then(attempt => {
                console.log(attempt)
                res.send(attempt)
            })
    })

    app.get('/api/quizzes/:qid/attempts', (req, res) =>
        attemptService.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts)))
}
