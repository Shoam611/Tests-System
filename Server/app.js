const express = require("express");
const app = express();
app.use(express.json());
const {container} = require('./dependencyInjection-setup');
app.post('/',async (req,res)=> res.send(200));
module.exports = app