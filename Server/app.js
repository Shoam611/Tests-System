const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { container } = require('./app-container');

const questionsController = container.resolve('questionsController');
app.post('/questions', async (req, res) => {
    try { res.send(await questionsController.addQuestion(req)).status(200) }
    catch (err) { res.send(err.message).status(500) }
});
app.get('/questions', async (req, res) => {
    try {
        const result = await questionsController.getQuestions(req);
        res.send(result).status(200)
    } catch (err) { res.send(err.message).status(500) }
});

app.delete('/questions', async (req, res) => { questionsController.deleteQuestion(req); res.send(200) });
app.put('/questions', async (req, res) => { questionsController.updateQuestion(req); res.send(200) });

const testsController = container.resolve('testsController');
app.post('/tests', async (req, res) => { const succseeded = testsController.addTest(req); res.send(succseeded?200:500) });
app.get('/tests', async (req, res) => { const result = await testsController.getTests(req); res.send(result).status(200) });
app.delete('/tests', async (req, res) => { testsController.deleteTest(req); res.send(200) });
app.put('/tests', async (req, res) => { const id = await testsController.updateTest(req); res.send(id.toString()).status(200); });

const topicController = container.resolve('topicController');
app.get('/topic', async (req, res) => { res.send(JSON.stringify(await topicController.getDefaultTopic())); });

const usersController = container.resolve('usersController');
app.post('/users', async (req, res) => { usersController.addUser(req); res.send(200) });
app.get('/users', async (req, res) => { const result = await usersController.getUsers(req); res.send(result).status(200) });
app.delete('/users', async (req, res) => { usersController.deleteUser(req); res.send(200) });
app.put('/users', async (req, res) => { const id = await usersController.updateUser(req); res.send(id.toString()).status(200); });

module.exports = app;