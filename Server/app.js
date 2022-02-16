const express = require("express");
const app = express();
app.use(express.json());
const { container } = require('./app-container');

const questionsController = container.resolve('questionsController');
app.post('/', async (req, res) => { res.send(200) });
app.post('/questions', async (req, res) => { res.header("Access-Control-Allow-Origin", "*"); questionsController.addQuestion(req); res.send(200) });
app.get('/questions', async (req, res) => { res.header("Access-Control-Allow-Origin", "*"); const result = await questionsController.getQuestions(req); res.send(result).status(200) });
app.delete('/questions', async (req, res) => { questionsController.deleteQuestion(req); res.send(200) });
app.put('/questions', async (req, res) => { questionsController.updateQuestion(req); res.send(200) });

const testsController = container.resolve('testsController');
app.post('/', async (req, res) => { res.send(200) });
app.post('/tests', async (req, res) => { res.header("Access-Control-Allow-Origin", "*"); testsController.addTest(req); res.send(200) });
app.get('/tests', async (req, res) => { res.header("Access-Control-Allow-Origin", "*"); const result = await testsController.getTests(req); res.send(result).status(200) });
app.delete('/tests', async (req, res) => { testsController.deleteTest(req); res.send(200) });
app.put('/tests', async (req, res) => { testsController.updateTest(req); res.send(200) });

module.exports = app