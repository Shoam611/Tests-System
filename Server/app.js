const express = require("express");
const app = express();
app.use(express.json());
const {container} = require('./app-container');

app.post('/',async (req,res)=> { res.send(200) });

app.post('/questions/post',async (req,res)=> {container.resolve('questionsController').addQuestion(req); res.send(200)});

module.exports = app