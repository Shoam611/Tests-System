const { Types, Schema, model } = require('mongoose');
const answerSchema = new Schema({
    value: String,
    id: Number
});
const questionSchema = new Schema({
    topic: String,
    questionType: Number,
    questionText: String,
    textAbove: String,
    textBelow: String,
    tags: [],
    answers: [answerSchema],
    correctAnswerIds: [],
}, { timestamps: true });
questionSchema.statics.deleteByIdAsync = async function (id) {
    return this.deleteOne({ _id: id })
};
const AnswerModel = model('answer', answerSchema);
const QuestionModel = model('QuestionModel', questionSchema);

module.exports = {
    QuestionModel
    ,AnswerModel
}