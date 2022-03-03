const { Topic } = require('./schemas/index');
class TopicRepository {
    //Create
    async addAsync(newDoc) {
        const q = new Topic({ ...newDoc });
        await q.save();
        return q._id;
    }
    //Read
    async getDefaultAsync() {
        let topic =await Topic.find({}).cursor().next();
        if(!topic) {
            await this.addAsync({name:'def-topic'});
            topic = await Topic.find({}).cursor().next(); 
        }
        else return topic;  
    }
}
module.exports = TopicRepository