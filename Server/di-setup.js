const awilix = require("awilix");
const container = awilix.createContainer();
const questionsDb = require("./db-server/questions-db/questions.json");
const questionsController = require("./controller/questionsController.js");

const setup = () => {
  container.register({
    questionsController: awilix.asClass(questionsController).singleton(),
    questionsDb: awilix.asValue(questionsDb),
  });
};

module.exports = { setup, container };
