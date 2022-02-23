const awilix = require("awilix");
const container = awilix.createContainer();
const QuestionsController = require("./controllers/questionsController.js");
const QuestionRepository = require('./data/questionRepository');

const TestsController = require("./controllers/testsController.js");
const TestsRepository = require("./data/testRepository.js");

const TopicController = require("./controllers/topicController.js");
const TopicRepository = require('./data/topicsRepository');

const schemes = require('./data/schemas/index');
const initConnection = require("./services/mongoHandler.js");


const setup = () => {
  container.register({
    questionsController: awilix.asClass(QuestionsController).singleton(),
    questionRepository: awilix.asClass(QuestionRepository).singleton(),
    
    testsController: awilix.asClass(TestsController).singleton(),
    testsRepository: awilix.asClass(TestsRepository).singleton(),
    
    topicRepository: awilix.asClass(TopicRepository),
    topicController: awilix.asClass(TopicController),

    connect: awilix.asFunction(initConnection).singleton(),
    schemes: awilix.asValue(schemes)
  });
};

module.exports = { setup, container };
