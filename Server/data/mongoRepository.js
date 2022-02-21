const { QuestionModel } = require('./schemes');
const { connect, disconnect } = require('mongoose');
class MongoRepository {
    constructor({ schemes }) {
        this.QuestionModel = schemes.QuestionModel;
        this.domain = 'localhost';
        this.port = '27017'
        this.databaseName = 'questionsPool';
        this.init()
    }
    async init() { connect(`mongodb://${this.domain}:${this.port}/${this.databaseName}`) }
    //Create
    async addAsync(object) {
        console.log('in repo func add');
        const q = new QuestionModel({ ...object });
        await q.save();
        console.log('added', q._id.toString());
        return q._id;
    }
    //Delete
    async DeleteOneAsync(id) {
        QuestionModel.deleteByIdAsync(id);
    }
    //Read
    //Update
    async getOneAsync(id) {
        const query = QuestionModel.findOne({ _id: id });
        const doc = await query.next();
        return doc;
    }
    async getAsync(skip = 0, take = 10) {
        const query = await QuestionModel.find({ sort: '-createdAt' })
            .skip(skip)
            .limit(take)
            // .populate('answer')
            return query;
    }
    async UpdateOne(id, newQuestion) {
    }
    async deleteManyAsync(filter) {

    }
}
module.exports = MongoRepository
//-----------------------------option B