// "use strict";
const Enumerable = require('node-enumerable');
//const { QuestionModel } = require('./schemes');
const { connect } = require('mongoose');
class MongoRepository {
    constructor({ schemes }) {
        this.QuestionModel = schemes.QuestionModel;
        this.domain = 'localhost';
        this.port = '27017'
        this.databaseName = 'questionsPool';
        this.init()
    }
    async init() {
        connect(`mongodb://${this.domain}:${this.port}/${this.databaseName}`)
    }
    async addAsync(object) {
        const q = new QuestionModel({ ...object });
        await q.save();
    }
    createIteratorAsync(query) {
        return {
            [Symbol.asyncIterator]: async function* () {
                for (let doc = await query.next(); doc != null; doc = await query.next())
                    yield doc;
            }   }
    }
    async getAllAsync() {
        console.log('in get all async');
        const query = this.QuestionModel.find().skip(2).limit(4).cursor();
        //-----------------------------
        // for (let i=1,doc = await query.next(); doc != null; doc = await query.next()) {
        //     console.log(`**********start ${i++}************`);
        //     console.log(doc);
        //     console.log(`**********end  ${i++}************`);
        // }
        //-----------------------------
        const iterable = this.createIteratorAsync(query)
        const sequence = Enumerable.from(iterable);

        for await (const document of sequence) {
            console.log('**********start************');
            console.log(document);
            console.log('**********end************');
            if (!document) break;
        }
    }

}
module.exports = MongoRepository