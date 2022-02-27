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
    tags: Array,
    answers: [answerSchema],
    correctAnswerIds: Array,
    presentaionAxisId: Number,
    isAnActiveQuestion:Boolean
}, { timestamps: true });
questionSchema.statics.deleteByIdAsync = async function (id) {
    return this.deleteOne({ _id: id })
};
const QuestionModel = model('QuestionModel', questionSchema);
const AnswerModel = model('answer', answerSchema);

module.exports = { QuestionModel, questionSchema, AnswerModel }