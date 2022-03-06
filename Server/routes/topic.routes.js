const router = require('express').Router();
const { container } = require('../app-container');
const topicController = container.resolve('topicController');
router.get('/', async (req, res) => { res.send(JSON.stringify(await topicController.getDefaultTopic())); });
module.exports = router