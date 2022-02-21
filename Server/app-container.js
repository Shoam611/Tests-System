const awilix = require("awilix");
const container = awilix.createContainer();
const QuestionsController = require("./controllers/questionsController.js");
const TestsController = require("./controllers/testsController.js");
const MongoRepository = require('./data/mongoRepository');
const schemes = require('./data/schemes');
const TestsMongoRepository = require("./data/testMongoRepository.js");


const setup = () => {
  container.register({
    questionsController: awilix.asClass(QuestionsController).singleton(),
    testsController: awilix.asClass(TestsController).singleton(),
    mongoRepository: awilix.asClass(MongoRepository).singleton(),
    testsMongoRepository: awilix.asClass(TestsMongoRepository).singleton(),
    schemes: awilix.asValue(schemes)
  });
};

module.exports = { setup, container };
