const awilix = require("awilix");
const container = awilix.createContainer();
const QuestionsController = require("./controllers/questionsController.js");
const TestsController = require("./controllers/testsController");
const MongoRepository = require('./data/mongoRepository');
const schemes = require('./data/schemes');
const TestsMongoRepository = require('./data/testsMongoRepository');
const initConnection = require("./services/mongoHandler.js");


const setup = () => {
  container.register({
    questionsController: awilix.asClass(QuestionsController).singleton(),
    mongoRepository: awilix.asClass(MongoRepository).singleton(),
    testsController: awilix.asClass(TestsController).singleton(),
    testsMongoRepository: awilix.asClass(TestsMongoRepository).singleton(),
    connect: awilix.asFunction(initConnection).singleton(),
    schemes: awilix.asValue(schemes)
  });
};

module.exports = { setup, container };
