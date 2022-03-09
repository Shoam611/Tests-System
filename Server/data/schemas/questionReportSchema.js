const { Schema } = require('mongoose');
module.exports = createQuestionReportModel = (connection) => {
    const questionBuildSchema = new Schema({
        questionId: String,
        selectedAnswersIds: Array,
        wasRight: Boolean
    });
    const questionReportSchema = new Schema({
        userId: String,
        testId: String,
        questions: [questionBuildSchema],
        score: Number
    }, { timestamps: true });
    questionReportSchema.statics.deleteByIdAsync = async (id) => this.deleteOne({ _id: id });
    const QuestionReport = connection.model('QuestionReport', questionReportSchema);
    return QuestionReport;
}
