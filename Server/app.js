const express = require("express");
const questions_route = require('./routes/question.routes.js')
const tests_route = require('./routes/tests.routes.js')
const topic_route = require('./routes/topic.routes.js')
const user_routes = require('./routes/users.routes.js')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/questions', questions_route)
app.use('/tests', tests_route)
app.use('/topic', topic_route)
app.use('/users', user_routes)

module.exports = app;

/*
--0--
selectedAnswersId:[]
correctAnswerIds : [3,2]
--1--
selectedAnswersId:[]
correctAnswerIds : [2,3] // sort-accending
--2--
selectedAnswersId:[3]
correctAnswerIds : [2,3]
--3--
selectedAnswersId :[3,2] // sort-accending
selectedAnswersIds:[2,3]
correctAnswerIds  :[2,3]
    //is length equal
        //foreach in index are equal

    const initialState = {
        question-records:[]
        user:User,
        test-taken:Quiz
        score:Number
    }


*/