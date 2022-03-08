const { getModels } = require('./schemas/createConnection.js');

class QuestionReportRepository {

    //Create
    async addAsync(object) {
        const { QuestionReport } = getModels();
        const u = new QuestionReport({ ...object });
        await u.save();
        return u._id;
    }

    //Update
    async UpdateQuestionReport(id, newQuestionReport) {
        const { QuestionReport } = getModels();
        const doc = await QuestionReport.findOneAndReplace({ _id: id }, { _id: id, ...newQuestionReport });
        await doc.save();
        return doc._id;
    }
    //Delete
    async DeleteOneAsync(id) {
        const { QuestionReport } = getModels();
        QuestionReport.deleteByIdAsync(id);
    }

    //Read
    async getAsync() {
        const { QuestionReport } = getModels();
        return QuestionReport.find({ sort: '-createdAt' });
    }
}

module.exports = QuestionReportRepository;