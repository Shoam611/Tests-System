const router = require('express').Router();
const { container } = require('../app-container');
const testRecordsController = container.resolve('testRecordsController');

router.post('/', async (req, res) => {
    try { res.send(await testRecordsController.addTestReport(req)).status(200) }
    catch (err) { res.send(err.message).status(500) }
});

router.get('/', async (req, res) => {
    try {
        res.send(await testRecordsController.getTestReport(req)).status(200);
    }
    catch (err) { res.send(err.message).status(500) }
});

module.exports = router;