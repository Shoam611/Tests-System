const { Types, Schema, model } = require('mongoose');

const topicSchema = new Schema({
    name: String
}, { timestamps: true });

const TopicModel = model('topic', topicSchema);

module.exports = { topicSchema, TopicModel };