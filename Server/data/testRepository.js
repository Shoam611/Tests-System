const { Test } = require('./schemas/testSchema');

class TestsMongoRepository {

    //Create
    async addAsync(object) {
        const t = new Test({ ...object });
        await t.save();
        return t._id;
    }
    //Delete
    async DeleteOneAsync(id) {
        Test.deleteByIdAsync(id);
    }

    //Update
    async UpdateTest(id, newTest) {
        const doc = await Test.findOneAndReplace({ _id: id }, { _id: id, ...newTest });
        await doc.save();
        return doc._id;
    }

    //Read
    async getAsync(filterquery = {}) {
        const query = Test.find({ sort: '-createdAt' }).where(filterquery);
        return query;
    }

}
module.exports = TestsMongoRepository