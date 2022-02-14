const mongoose = require('mongoose');

const questionScheme = new mongoose.Schema({
    id:String,
    questionTitle:String
});
const QuestionModel = mongoose.model('QuestionModel',questionScheme);

module.exports={
    QuestionModel
}