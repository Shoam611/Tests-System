const { QuestionModel } = require('./schemas/testSchema');

class MongoRepository {
    
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
    async getOneAsync(id) {
        const query = QuestionModel.findOne({ _id: id });
        const doc = await query.next();
        return doc;
    }
    async getAsync(skip = 0, take = 10,filterquery={}) {
        const query = await QuestionModel.find({...filterquery, sort: '-createdAt' })
        .skip(skip)
        .limit(take)
        return query;
    }
    //Update
    async UpdateOne(id, newQuestion) {
    }
    async deleteManyAsync(filter) {

    }
}
module.exports = MongoRepository
