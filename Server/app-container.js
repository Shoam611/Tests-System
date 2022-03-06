const awilix = require("awilix");
const container = awilix.createContainer();
const {logger} = require('./app-logger.js')
const QuestionsController = require("./controllers/questionsController.js");
const QuestionRepository = require('./data/questionRepository');

const TestsController = require("./controllers/testsController.js");
const TestsRepository = require("./data/testRepository.js");

const UsersController = require("./controllers/usersController.js");
const UserRepository = require("./data/userRepository.js");

const TopicController = require("./controllers/topicController.js");
const TopicRepository = require('./data/topicsRepository.js');

const schemes = require('./data/schemas/index');
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

    logger: awilix.asValue(logger),
    schemes: awilix.asValue(schemes)
  });
};

module.exports = { setup, container };
