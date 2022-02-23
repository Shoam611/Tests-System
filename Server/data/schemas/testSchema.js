const { Types, Schema, model } = require('mongoose');
const {questionSchema} =require('./questionSchema')
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

testSchema.statics.deleteByIdAsync = async function (id) {
    return this.deleteOne({ _id: id })
};

const TestModel = model('TestModel', testSchema)
const EmailModel = model('EmailModel', emailSchema)

module.exports = {
    TestModel,EmailModel
}