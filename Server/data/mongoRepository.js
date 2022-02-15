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
            }
        }
    }
    *createIterator(query) {
        for (let doc = query.next(); doc != null; doc = query.next())
            yield doc;

    }


    async getAllAsync() {
        console.log('in get all async');
        const query = this.QuestionModel.find().skip(2).limit(5).cursor();
        //----------------------------- option A
        // for (let i=1,doc = await query.next(); doc != null; doc = await query.next()) {
        //     console.log(`**********start ${i++}************`);
        //     console.log(doc);
        //     console.log(`**********end  ${i++}************`);
        // }
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
    }

}
module.exports = MongoRepository