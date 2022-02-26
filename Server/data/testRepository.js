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
    //Read
    //Update
    async UpdateTest(id, newTest) {
        const doc = await TestModel.findOneAndReplace({ _id: id }, { _id: id, ...newTest });
        await doc.save();
        console.log('added', doc._id.toString());
        return doc._id;
    }

    async getOneAsync(id) {
        const query = TestModel.findOne({ _id: id });
        const doc = await query.next();
        return doc;
    }

    async getAsync(skip = 0, take = 10) {
        const query = TestModel.find({ sort: '-createdAt' }).skip(skip).limit(take).cursor();
        const list = [];
        for (let doc = await query.next(); doc != null; doc = await query.next()) {
            list.push(doc);
        }
        console.log("list", list);
        return list;
    }
    async UpdateOne(id, newTest) {
    }
    async deleteManyAsync(filter) {

    }
}
module.exports = TestsMongoRepository