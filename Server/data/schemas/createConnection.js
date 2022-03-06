const { createConnection } = require('mongoose');
const createQuestionModel = require('./questionSchema');
const createTestModel = require('./testSchema');
const createTopicModel = require('./topicSchema');
const createUserModel = require('./userSchema');
const { logger } = require('../../app-logger');
const models = {};
let Test, Topic, Question, User
const createDataConnection = async () => {
    const { domain, db_port, database_data_name, database_users_name } = process.env;
    logger.info('attempts to establish connection to the data db server. at createDataConnection 11')
    createConnection(`mongodb://${domain}:${db_port}/${database_data_name}`).asPromise().then((con) => {
        Question = createQuestionModel(con);
        Test = createTestModel(con);
        Topic = createTopicModel(con);
    }).catch((err) => { logger.error(`failed to connect to the db server. original error : ${err.message} at: createDataConnection 17`); })
    logger.info('established connection to the db server. at createDataConnection 16')

    logger.info('attempts to establish connection to the user db server. at createDataConnection 19')
    createConnection(`mongodb://${domain}:${db_port}/${database_users_name}`).asPromise().then((con) => {
        User = createUserModel(con);
        logger.log('info', 'established connection to the db user server. at createDataConnection 22')
    }).catch((err) => { logger.error(`failed to connect to the db user server. original error : ${err.message} at: createDataConnection 23`) })
}

const getModels = () => ({ Test, Topic, Question,User });
module.exports = { createDataConnection, Test, Topic, Question,User, getModels };