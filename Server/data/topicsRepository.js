// const { Topic } = require('./schemas/createConnection.js');
const { getModels } = require('./schemas/createConnection.js');

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
        const {Topic} = getModels();
        let topic =await Topic.find({}).cursor().next();
        if(!topic) {
            await this.addAsync({name:'def-topic'});
            topic = await Topic.find({}).cursor().next(); 
        }
        else return topic;  
    }
}
module.exports = TopicRepository