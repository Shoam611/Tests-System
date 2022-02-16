const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const { container } = require('./app-container');

const questionsController = container.resolve('questionsController');

app.post('/questions', async (req, res) => { res.header("Access-Control-Allow-Origin", "*"); const newId = questionsController.addQuestion(req); res.send(newId.toString()).status(200) });

app.get('/questions', async (req, res) => { res.header("Access-Control-Allow-Origin", "*"); const result = await questionsController.getQuestions(req); res.send(result).status(200) });

app.delete('/questions', async (req, res) => { questionsController.deleteQuestion(req); res.send(200) });

app.put('/questions', async (req, res) => { questionsController.updateQuestion(req); res.send(200) });

module.exports = app