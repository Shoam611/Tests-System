const router = require('express').Router();
const { container } = require('../app-container');
const topicController = container.resolve('topicController');
router.get('/', async (req, res) => {
    try { es.send(JSON.stringify(await topicController.getDefaultTopic())); }
    catch (err) { res.send(err.message).status(500); }
});
module.exports = router