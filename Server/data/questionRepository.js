const { getModels } = require('./schemas/createConnection.js');
const { logger }= require('../app-logger.js')
class MongoRepository {
 
    //Create
    async addAsync(object) {
        const {Question} = getModels();
        try {
            const q = new Question({...object});
            await q.save();
            return q._id;
        } catch (err) {
            const newErr = new Error(`error while trying to ad question to the db at q-repository. original error ${err.message}`)
            logger.error(newErr);
            return newErr
        }
    }
    //Delete
    async DeleteOneAsync(id) {
        const {Question} = getModels();
        try { Question.deleteByIdAsync(id); }
        catch (err) { throw new Error(`error while trying to delete question ${id} from the db at q-repository. original error ${err.message}`); }
    }
    //Read
    async getAsync(filterquery = {}) {
        const {Question} = getModels();
        console.log(Question);
        try { return await Question.find({ sort: '-createdAt' }).where(filterquery); }
        catch (err) {
            const newErr = new Error(`error while trying to fetch questions from the db at q-repository. original error ${err.message}`); 
             logger.error(newErr.message);
            throw newErr
        }
    }
    //Update
    async updateOneAsync(id, newQuestion) {
        const {Question} = getModels();
        try { await Question.updateOne({ _id: id }, newQuestion);} 
        catch (err) { throw new Error(`error while trying to update questions from the db at q-repository. original error ${err.message}`); }
    }
}
module.exports = MongoRepository
