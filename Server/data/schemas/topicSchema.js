const { Schema, model }=require( 'mongoose') ;
module.exports = createTopicModel=(connection)=>{
    const topicSchema = new Schema({
        name: String
    }, { timestamps: true });
    const Topic = connection.model('topics', topicSchema);
    return Topic;
}