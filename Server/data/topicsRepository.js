const { Topic } = require('./schemas/index');
class TopicRepository {
    //Create
    async addAsync(newDoc) {
        console.log('in add topic', newDoc);
        const q = new Topic({ ...newDoc });
        await q.save();
        return q._id;
    }
    //Read
    async getDefaultAsync() {
        console.log('in get actions');
        let topic =await Topic.find({}).cursor().next();
        if(!topic){
            this.addAsync({name:'def-topic'});
            topic = await Topic.find({}).cursor().next();
        }
        else{
            console.log("retrived topic",topic);
            return topic;
        }
    }
}
module.exports = TopicRepository