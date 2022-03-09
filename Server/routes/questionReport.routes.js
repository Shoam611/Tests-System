const router = require('express').Router();
const { container } = require('../app-container');
const questionReportsController = container.resolve('questionReportsController');

router.post('/', async (req, res) => {
    try { res.send(await questionReportsController.addQuestionReport(req)).status(200) }
    catch (err) { res.send(err.message).status(500) }
});

router.get('/', async (req, res) => {
    try {
        res.send(await questionReportsController.getQuestionReports(req)).status(200);
    }
    catch (err) { res.send(err.message).status(500) }
});

router.delete('/', async (req, res) => { questionReportsController.deleteQuestionReport(req); res.send(200) });

router.put('/', async (req, res) => {
    try {
        res.send(await questionReportsController.updateQuestionReport(req)).status(200);
    }
    catch (err) { res.send(err.message).status(500) }
});

module.exports = router;