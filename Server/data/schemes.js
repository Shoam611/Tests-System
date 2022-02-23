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
    awnsers: [answerSchema],
    correctAwnserIndex: Array,
}, { timestamps: true });

// const emailSchema = new Schema({
//     successSubject: String,
//     successBody: String,
//     failureSubject: String,
//     failureBody: String
// });

const testSchema = new Schema({
    testType: Number,
    lang: Number,
    managerEmail: String,
    name: String,
    passingGrade: Number,
    header: String,
    msgOnSucc: String,
    msgOnFail: String,
    showIfWrong: Boolean,
    emailSubOnSucc: String,
    emailBodyOnSucc: String,
    emailSubOnFail: String,
    emailBodyOnFail: String,
    questions: [questionSchema]
});
questionSchema.statics.deleteByIdAsync = async function (id) {
    return this.deleteOne({ _id: id })
};
testSchema.statics.deleteByIdAsync = async function (id) {
    return this.deleteOne({ _id: id })
};
const AnswerModel = model('answer', answerSchema);
const QuestionModel = model('QuestionModel', questionSchema);
const TestModel = model('TestModel', testSchema)

module.exports = {
    QuestionModel,
    AnswerModel,
    TestModel
}