const { getModels } = require('./schemas/createConnection.js');
const { logger } = require('../app-logger.js');

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
        try {
            const { QuestionReport } = getModels();
            return await QuestionReport.find({ sort: '-createdAt' });
        }
        catch (err) {
            const newErr = new Error(`error while trying to fetch questionReports from the db at qr-repository. original error ${err.message}`);
            logger.error(newErr.message);
            return null;
        }
    }
}

module.exports = QuestionReportRepository;