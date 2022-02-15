const express = require("express");
const app = express();
app.use(express.json());
const {container} = require('./app-container');

app.post('/',async (req,res)=> { res.send(200) });
const questionsController = container.resolve('questionsController');
app.post('/questions/post',async (req,res)=> {questionsController.addQuestion(req); res.send(200)});
app.get('/questions/get',async (req,res)=> {questionsController.getQuestions(req); res.send(200)});
app.delete('/questions/delete',async (req,res)=> {questionsController.deleteQuestion(req); res.send(200)});

module.exports = app