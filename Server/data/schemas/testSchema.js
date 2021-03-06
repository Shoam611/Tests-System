const { Schema } = require('mongoose');
module.exports = createTestModel = (connection) => {
    const testSchema = new Schema({
        topic: String,
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

    testSchema.statics.deleteByIdAsync = async (id) => this.deleteOne({ _id: id });
    const Test = connection.model('Test', testSchema);
    return Test;
}
