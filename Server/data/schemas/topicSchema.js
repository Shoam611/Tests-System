import { Schema } from 'mongoose';
export const createTopicModel=(connection)=>{
    const topicSchema = new Schema({
        name: String
    }, { timestamps: true });
    const Topic = connection.model('topics', topicSchema);
    return Topic;
}