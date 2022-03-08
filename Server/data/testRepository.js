// const { Test } = require('./schemas/createConnection.js');
const { getModels } = require('./schemas/createConnection.js');

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
        const query = Test.find({ sort: '-createdAt' }).where(filterquery);
        return query;
    }

}
module.exports = TestsMongoRepository