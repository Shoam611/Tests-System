const express = require("express");
const questions_route = require('./routes/question.routes.js')
const tests_route = require('./routes/tests.routes.js')
const topic_route = require('./routes/topic.routes.js')
const user_routes = require('./routes/users.routes.js')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { container } = require('./app-container');

app.use('/questions', questions_route)
app.use('/tests' , tests_route)
app.use('/topic',topic_route)
app.use('/users',user_routes)

module.exports = app;