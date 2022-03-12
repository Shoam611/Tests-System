const awilix = require("awilix");
const container = awilix.createContainer();
const { logger } = require('./app-logger.js')
const QuestionsController = require("./controllers/questionsController.js");
const QuestionRepository = require('./data/questionRepository');

const TestsController = require("./controllers/testsController.js");
const TestsRepository = require("./data/testRepository.js");

const UsersController = require("./controllers/usersController.js");
const UserRepository = require("./data/userRepository.js");

const TopicController = require("./controllers/topicController.js");
const TopicRepository = require('./data/topicsRepository.js');

const TestRecordsController = require("./controllers/testRecordsController.js");
const TestRecordRepository = require("./data/testRecordRepository.js");

const setup = () => {
  container.register({
    questionsController: awilix.asClass(QuestionsController).singleton(),
    questionRepository: awilix.asClass(QuestionRepository).singleton(),

    testsController: awilix.asClass(TestsController).singleton(),
    testsRepository: awilix.asClass(TestsRepository).singleton(),

    usersController: awilix.asClass(UsersController).singleton(),
    userRepository: awilix.asClass(UserRepository).singleton(),

    topicRepository: awilix.asClass(TopicRepository).singleton(),
    topicController: awilix.asClass(TopicController).singleton(),

    testRecordsController: awilix.asClass(TestRecordsController).singleton(),
    testRecordRepository: awilix.asClass(TestRecordRepository).singleton(),

    logger: awilix.asValue(logger),
  });
};

module.exports = { setup, container };
