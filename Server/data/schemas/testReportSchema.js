const { Schema } = require('mongoose');
module.exports = createTestReportModel = (connection) => {
    const questionBuildSchema = new Schema({
        questionId: String,
        selectedAnswersIds: Array,
        wasRight: Boolean
    });
    const testReportSchema = new Schema({
        userId: String,
        testId: String,
        questions: [questionBuildSchema],
        score: Number
    }, { timestamps: true });
    testReportSchema.statics.deleteByIdAsync = async (id) => this.deleteOne({ _id: id });
    const TestReport = connection.model('TestReport', testReportSchema);
    return TestReport;
}
