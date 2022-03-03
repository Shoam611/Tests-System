const { Question } = require('./schemas/index');

class MongoRepository {
constructor({logger}){
    this.logger = logger;
}
    //Create
    async addAsync(object) {
        try {
            const q = new Question({...object});
            await q.save();
            return q._id;
        } catch (err) {
            const newErr = new Error(`error while trying to ad question to the db.\n original error ${err.message}`)
            this.logger.error(newErr);
            throw newErr
        }
    }
    //Delete
    async DeleteOneAsync(id) {
        try { Question.deleteByIdAsync(id); }
        catch (err) { throw new Error(`error while trying to delete question ${id} from the db.\n original error ${err.message}`); }
    }
    //Read
    async getAsync(filterquery = {}) {
        try { return await Question.find({ sort: '-createdAt' }).where(filterquery); }
        catch (err) { throw new Error(`error while trying to fetch questions from the db.\n original error ${err.message}`); }
    }
    //Update
    async updateOneAsync(id, newQuestion) {
        try {
            await Question.updateOne({ _id: id }, newQuestion);
        } catch (err) { throw new Error(`error while trying to update questions from the db.\n original error ${err.message}`); }
    }
}
module.exports = MongoRepository
