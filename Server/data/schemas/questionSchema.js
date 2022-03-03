const { Schema } = require('mongoose');
const datapool_db = require('../../services/mongoHandler').connection;

const answerSchema = new Schema({
    value: String,
    id: Number
});
const questionSchema = new Schema({
    topic: String,
    questionType: Number,
    questionText: String,
    textAbove: String,
    textBelow: String,
    tags: Array,
    answers: [answerSchema],
    correctAnswerIds: Array,
    presentaionAxisId: Number,
    isAnActiveQuestion: Boolean
}, { timestamps: true });

questionSchema.statics.deleteByIdAsync = async (id) => this.deleteOne({ _id: id }) ;

const Question = datapool_db.model('Question', questionSchema);
const Answer = datapool_db.model('answer', answerSchema);

module.exports = { Question, questionSchema, Answer }