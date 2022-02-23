const { TopicModel } = require('./schemas/index');
class TopicRepository {
    //Create
    async addAsync(newDoc) {
        console.log('in add topic', newDoc);
        const q = new TopicModel({ ...newDoc });
        await q.save();
        return q._id;
    }
    //Read
    async getDefaultAsync() {
        console.log('in get actions');
        let topic =await TopicModel.find({}).cursor().next();
        if(!topic){
            this.addAsync({name:'def-topic'});
            topic = await TopicModel.find({}).cursor().next();
        }
        else{
            console.log("retrived topic",topic);
            return topic;
        }
    }
    //Update
    // async UpdateOne(id,name) {
    //     console.log('in update action');
    //     console.log(name);
    //    const oldDoc =await UserModel.updateOne({_id:id},{name:name,currentBalance:balance,dayOfTracking:dayOfTracking });
    //    console.log("modified: ", oldDoc.modifiedCount);
    // }
}
module.exports = TopicRepository