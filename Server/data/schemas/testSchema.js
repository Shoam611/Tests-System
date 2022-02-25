const { Schema, model } = require('mongoose');
const { questionSchema } = require('./questionSchema');

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
    emailBodyOnFail: String,
    emailBodyOnSucc: String,
    emailSubOnFail: String,
    emailSubOnSucc: String,
    questions: [questionSchema],
}, { timestamps: true });

testSchema.statics.deleteByIdAsync = async function (id) {
    return this.deleteOne({ _id: id });
};

const TestModel = model('TestModel', testSchema);

module.exports = {
    TestModel
};