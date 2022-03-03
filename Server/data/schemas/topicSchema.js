const { Schema } = require('mongoose');
const {testsDb} = require('../../services/mongoHandler');

const topicSchema = new Schema({
    name: String
    //orgenazation : objectId
}, { timestamps: true });

const Topic = testsDb.model('topics', topicSchema);

module.exports = { topicSchema, Topic };