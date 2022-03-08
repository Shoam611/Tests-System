class QuestionReportsController {
    constructor({ questionReportRepository }) {
        this.questionReportRepository = questionReportRepository;
    }

    addQuestionReport = async ({ body }) => {
        const { newQuestionReport} = body;
        if (!newQuestionReport) { return null; }
        return await this.questionReportRepository.addAsync(newQuestionReport);
    }

    deleteQuestionReport = ({ body }) => this.questionReportRepository.DeleteOneAsync(body.id);

    updateQuestionReport = async ({ body }) => {
        const { id } = body;
        const { newQuestionReport } = body;
        return await this.questionReportRepository.UpdateQuestionReport(id, newQuestionReport);
    }

    getQuestionReports = async () => {
        return await this.questionReportRepository.getAsync();
    }
}

module.exports = QuestionReportsController;