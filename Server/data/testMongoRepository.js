const { TestModel } = require('./schemes');
const { connect, disconnect } = require('mongoose');

class TestsMongoRepository {
    constructor({ schemes }) {
        this.TestModel = schemes.TestModel;
        this.domain = 'localhost';
        this.port = '27017'
        this.databaseName = 'testsPool';
        this.init()
    }
    async init() { connect(`mongodb://${this.domain}:${this.port}/${this.databaseName}`) }
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