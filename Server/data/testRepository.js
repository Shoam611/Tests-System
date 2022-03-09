const { getModels } = require('./schemas/createConnection.js');
const { logger } = require('../app-logger.js');

class TestsMongoRepository {

    //Create
    async addAsync(object) {
        const { Test } = getModels();
        const t = new Test({ ...object });
        await t.save();
        return t._id;
    }

    //Delete
    async DeleteOneAsync(id) {
        const { Test } = getModels();
        Test.deleteByIdAsync(id);
    }

    //Update
    async UpdateTest(id, newTest) {
        const { Test } = getModels();
        const doc = await Test.findOneAndReplace({ _id: id }, { _id: id, ...newTest });
        await doc.save();
        return doc._id;
    }

    //Read
    async getAsync(filterquery = {}) {
        const { Test } = getModels();
        try {
            return await Test.find({ sort: '-createdAt' }).where(filterquery);
        } catch (err) {
            const newErr = new Error(`error while trying to fetch tests from the db at t-repository. original error ${err.message}`);
            logger.error(newErr.message);
            return null;
        }
    }

}
module.exports = TestsMongoRepository