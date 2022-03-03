const { Schema } = require('mongoose');
const {testsDb} = require('../../services/mongoHandler');
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
    questions: Array,
}, { timestamps: true });

testSchema.statics.deleteByIdAsync = async function (id) {
    return this.deleteOne({ _id: id });
};
const Test = testsDb.model('Test', testSchema);
module.exports = {
    Test
};