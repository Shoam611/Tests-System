import { Schema } from 'mongoose' ;
export const createQuestionModel = (connection) =>{
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
const Question = connection.model('Question', questionSchema);
const Answer = testsDb.model('answer', answerSchema);
return [Answer,Question]
}