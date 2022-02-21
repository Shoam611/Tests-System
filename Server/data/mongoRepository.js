const { QuestionModel } = require('./schemes');

class MongoRepository {
    
    //Create
    async addAsync(object) {
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
            .limit(take);
        return query;
    }
    async UpdateOne(id, newQuestion) {
    }
    async deleteManyAsync(filter) {

    }
}
module.exports = MongoRepository