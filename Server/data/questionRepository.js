const { QuestionModel } = require('./schemas/index');

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
    async getAsync(filterquery={}) {
        console.log('filter',filterquery);
        const query = await QuestionModel.find({ sort: '-createdAt' }).where(filterquery);
        console.log("query: ",query);
        return query;
    }
    //Update
    async updateOneAsync (id, newQuestion) {
        console.log('in update on async',id,newQuestion);
        const oldDoc =await QuestionModel.updateOne({_id:id},newQuestion);
        console.log('post update action',oldDoc);
        }
    
    async deleteManyAsync(filter) { }
}
module.exports = MongoRepository
