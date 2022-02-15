const express = require("express");
const app = express();
app.use(express.json());
const {container} = require('./app-container');

const questionsController = container.resolve('questionsController');
app.post('/',async (req,res)=> { res.send(200) });
app.post('/questions',async (req,res)=> {questionsController.addQuestion(req); res.send(200)});
app.get('/questions',async (req,res)=> {const result= await questionsController.getQuestions(req); res.send(result).status(200)});
app.delete('/questions',async (req,res)=> {questionsController.deleteQuestion(req); res.send(200)});
app.put('/questions',async (req,res)=> {questionsController.updateQuestion(req); res.send(200)});

module.exports = app