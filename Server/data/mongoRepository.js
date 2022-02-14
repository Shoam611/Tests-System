const mongoose = require('mongoose');
const { QuestionModel } = require('./schemes');
class MongoRepository{
    constructor(){
        this.init()
        this.connectioString = 'mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000';
        this.domain = 'localhost';
        this.port='27017'
        this.databaseName='questionsPool';
        this.collections=['questions','queezes']
    }
    async init()
    {
        mongoose.connect(`mongodb://${this.domain}:${this.port}/${this.databaseName}`)
    }
    async addAsync(object){
        
    }
}
module.exports = MongoRepository