// TODO: review https://expressjs.com/
const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nanmuru:Kl2TbWBn1B8r8um1@cluster0.ngqav.mongodb.net/whiteboard?retryWrites=true&w=majority',
    {useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true});
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// const session = require('express-session')
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true }
// }))


// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


// const quizzesController = require("./controllers/quizzes-controller")
// quizzesController(app)

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require("./controllers/attempt-controller")(app)


app.listen(process.env.PORT || 3000)
