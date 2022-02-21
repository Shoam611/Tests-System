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

const emailSchema = new Schema({
    successSubject: String,
    successBody: String,
    failureSubject: String,
    failureBody: String
});

const testSchema = new Schema({
    testType: Number,
    lang: Number,
    managerEmail: String,
    testName: String,
    passingGrade: Number,
    testHeader: String,
    msgOnSuccess: String,
    msgOnFailure: String,
    toShowMistakes: Boolean,
    emailMessages: [emailSchema],
    question: [questionSchema]
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
const EmailModel = model('EmailModel', emailSchema)

module.exports = {
    QuestionModel,
    AnswerModel,
    TestModel
}