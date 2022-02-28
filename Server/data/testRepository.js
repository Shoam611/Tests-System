const { TestModel } = require('./schemas/testSchema');

class TestsMongoRepository {

    //Create
    async addAsync(object) {
        const t = new TestModel({ ...object });
        await t.save();
        console.log('added', t._id.toString());
        return t._id;
    }
    //Delete
    async DeleteOneAsync(id) {
        TestModel.deleteByIdAsync(id);
    }

    //Update
    async UpdateTest(id, newTest) {
        const doc = await TestModel.findOneAndReplace({ _id: id }, { _id: id, ...newTest });
        await doc.save();
        console.log('added', doc._id.toString());
        return doc._id;
    }

    //Read
    async getAsync(filterquery = {}) {
        console.log('filter', filterquery);
        const query = TestModel.find({ sort: '-createdAt' }).where(filterquery);
        console.log(query);
        return query;
    }

}
module.exports = TestsMongoRepository