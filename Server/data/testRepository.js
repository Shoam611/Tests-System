const { Test } = require('./schemas/testSchema');

class TestsMongoRepository {

    //Create
    async addAsync(object) {
        const t = new Test({ ...object });
        await t.save();
        console.log('added', t._id.toString());
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
        console.log('added', doc._id.toString());
        return doc._id;
    }

    //Read
    async getAsync(filterquery = {}) {
        console.log('filter', filterquery);
        const query = Test.find({ sort: '-createdAt' }).where(filterquery);
        console.log(query);
        return query;
    }

}
module.exports = TestsMongoRepository