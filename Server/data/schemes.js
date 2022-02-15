const {Types,Schema,model} = require('mongoose');
const answerSchema=new Schema({
    value:String,
    id:Number
})
const questionSchema = new Schema({
    id:Types.ObjectId,
    topic:String,
    questionType:Number,
    questionText:String ,
    textAbove:String,
    textBelow:String,
    tags:[],
    answers:[answerSchema],
    correctAwnserIndex:[],
    // questionTitle:String,
});

const QuestionModel = model('QuestionModel',questionSchema);

module.exports={
    QuestionModel
}