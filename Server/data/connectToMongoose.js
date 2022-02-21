const { connect, disconnect } = require('mongoose');

class MongooseConnection {
    constructor({ schemes }) {
        this.QuestionModel = schemes.QuestionModel;
        this.TestModel = schemes.TestModel;
        this.domain = 'localhost';
        this.port = '27017'
        this.questionsDatabaseName = 'questionsPool';
        this.testsDatabaseName = 'testsPool';
        this.init()
    }
    async init() { connect(`mongodb://${this.domain}:${this.port}/${this.databaseName}`) }
}

