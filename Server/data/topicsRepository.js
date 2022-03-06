const { getModels } = require('./schemas/createConnection.js');
const { logger } = require('../app-logger.js')

class TopicRepository {
    //Create
    async addAsync(newDoc) {
        const {Topic} = getModels();
        const q = new Topic({ ...newDoc });
        await q.save();
        return q._id;
    }
    //Read
    async getDefaultAsync() {
        try{
            const {Topic} = getModels();
            let topic =await Topic.find({}).cursor().next();
            if(!topic) {
                await this.addAsync({name:'def-topic'});
                topic = await Topic.find({}).cursor().next(); 
            }
            else return topic;  
        }catch(err){logger.error(err.message); return null}
    }
}
module.exports = TopicRepository