const { getModels } = require('./schemas/createConnection.js');
const { logger } = require('../app-logger.js');

class TestRecordRepository {

    //Create
    async addAsync(object) {
        const { TestReport } = getModels();
        const u = new TestReport({ ...object });
        await u.save();
        return u._id;
    }

    //Update
    async UpdateTestReport(id, newTestReport) {
        const { TestReport } = getModels();
        const doc = await TestReport.findOneAndReplace({ _id: id }, { _id: id, ...newTestReport });
        await doc.save();
        return doc._id;
    }
    //Delete
    async DeleteOneAsync(id) {
        const { TestReport } = getModels();
        TestReport.deleteByIdAsync(id);
    }

    //Read
    async getAsync() {
        try {
            const { TestReport } = getModels();
            return await TestReport.find({ sort: '-createdAt' });
        }
        catch (err) {
            const newErr = new Error(`error while trying to fetch testReports from the db at qr-repository. original error ${err.message}`);
            logger.error(newErr.message);
            return null;
        }
    }
}

module.exports = TestRecordRepository;