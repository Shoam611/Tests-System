const { QuestionModel } = require('./schemas/index');

class MongoRepository {
    
    //Create
    async addAsync(object) {
        try{
            const q = new QuestionModel({ ...object });
            await q.save();
            return q._id;
        }catch(err){
            throw new Error(`error while trying to save to ad question to the db.\n original error ${err.message}`)
        }
    }
    //Delete
    async DeleteOneAsync(id) {
        try{ QuestionModel.deleteByIdAsync(id); }
        catch(err){throw new Error(`error while trying to delete question ${id} from the db.\n original error ${err.message}`)}
    }
    //Read
    async getOneAsync(id) {
        try{
            const query = QuestionModel.findOne({ _id: id });
            const doc = await query.next();
            return doc;
        } 
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
