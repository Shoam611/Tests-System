const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { container } = require('./app-container');
require('./services/mongoHandler')();


const questionsController = container.resolve('questionsController');

app.post('/questions', async (req, res) => { const newId = await questionsController.addQuestion(req); res.send(newId.toString()).status(200) });
app.get('/questions', async (req, res) => { const result = await questionsController.getQuestions(req); res.send(result).status(200) });
app.delete('/questions', async (req, res) => { questionsController.deleteQuestion(req); res.send(200) });
app.put('/questions', async (req, res) => { questionsController.updateQuestion(req); res.send(200) });

const testsController = container.resolve('testsController');
app.post('/tests', async (req, res) => { testsController.addTest(req); res.send(200) });
app.get('/tests', async (req, res) => { const result = await testsController.getTests(req); res.send(result).status(200) });
app.delete('/tests', async (req, res) => { testsController.deleteTest(req); res.send(200) });
app.put('/tests', async (req, res) => { testsController.updateTest(req); res.send(200) });

const topicController = container.resolve('topicController');
app.get('/topic',async (req,res)=>{res.send(JSON.stringify(await topicController.getDefaultTopic())); })

module.exports = app