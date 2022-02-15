const awilix = require("awilix");
const container = awilix.createContainer();
const QuestionsController = require("./controllers/questionsController.js");
const MongoRepository  = require('./data/mongoRepository');
const schemes = require('./data/schemes');
const setup = () => {
  container.register({
    questionsController:  awilix.asClass(QuestionsController).singleton(),
    mongoRepository:      awilix.asClass(MongoRepository).singleton(),
    schemes:              awilix.asValue(schemes)
  });
};

module.exports = { setup, container };
