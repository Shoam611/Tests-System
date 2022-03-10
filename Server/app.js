const express = require("express");
const questions_route = require('./routes/question.routes.js');
const tests_route = require('./routes/tests.routes.js');
const topic_route = require('./routes/topic.routes.js');
const user_routes = require('./routes/users.routes.js');
const testRecords_routes = require('./routes/testRecords.routes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/topic', topic_route);
app.use('/questions', questions_route);
app.use('/tests', tests_route);
app.use('/users', user_routes);
app.use('/testRecords', testRecords_routes);

module.exports = app;