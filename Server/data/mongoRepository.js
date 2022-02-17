const { QuestionModel } = require('./schemes');
const { connect, disconnect } = require('mongoose');
class MongoRepository {
    constructor({ schemes }) {
        this.QuestionModel = schemes.QuestionModel;
        this.domain = 'localhost';
        this.port = '27017'
        this.databaseName = 'questionsPool';
        this.init()
    }
    async init() { connect(`mongodb://${this.domain}:${this.port}/${this.databaseName}`) }
    //Create
    async addAsync(object) {
        const q = new QuestionModel({ ...object });
        await q.save();
        console.log('added', q._id.toString());
        return q._id;
    }
    //Delete
    async DeleteOneAsync(id) {
        QuestionModel.deleteByIdAsync(id);
    }
    //Read
    //Update


    async getOneAsync(id) {
        const query = QuestionModel.findOne({ _id: id });
        const doc = await query.next();
        return doc;
    }
    async getAsync(skip = 0, take = 10) {
        const query = QuestionModel.find({ sort: '-createdAt' }).skip(skip).limit(take).cursor();
        const list = [];
        for (let doc = await query.next(); doc != null; doc = await query.next()) {
            list.push(doc);
        }
        return list;
    }
    async UpdateOne(id, newQuestion) {
    }
    async deleteManyAsync(filter) {

    }
}
module.exports = MongoRepository
//-----------------------------option B
// const asynciterable = this.createIteratorAsync(query)
// for await (const document of asynciterable) {
    // console.log('**********start************');
    // console.log(document);
    // console.log('**********end************');
// }
//-----------------------------option C
// const iterable = this.createIterator(query);
// const sequence = Enumerable.from(iterable);
// let i=1;
// for (const document of sequence) {
    //     if(! await document) break;
    //     console.log(`********* start ${i}************`);
    //     console.log(await document);
    //     console.log(`********** end ${i++}*************`);
    // }
    //-----------------------------
    // return iterable
    // createIteratorAsync(query) {
    //     return {
    //         [Symbol.asyncIterator]: async function* () {
    //             for (let doc = await query.next(); doc != null; doc = await query.next())
    //                 yield doc;
    //         }
    //     }
    // }
    // *createIterator(query) {
    //     for (let doc = query.next(); doc != null; doc = query.next())
    //         yield doc;
    // }