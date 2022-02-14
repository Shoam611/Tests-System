const awilix = require("awilix");
const container = awilix.createContainer();
const QuestionsController = require("./controllers/questionsController.js");

const setup = () => {
  container.register({
    questionsController: awilix.asClass(QuestionsController).singleton()
  });
};

module.exports = { setup, container };
