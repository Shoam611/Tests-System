const router = require('express').Router();
const { container } = require('../app-container');
const questionsController = container.resolve('questionsController');

router.post('/', async (req, res) => {
    try { res.send(JSON.stringify(await questionsController.addQuestion(req))).status(200) }
    catch (err) { res.send(err.message).status(500) }
});

router.get('/', async (req, res) => { res.send(await questionsController.getQuestions(req)).status(200); });

router.delete('/', async (req, res) => {
    try {
        questionsController.deleteQuestion(req); res.send(200)
    } catch (err) { res.send(err.message).status(500) }
});
router.put('/', async (req, res) => { questionsController.updateQuestion(req); res.send(200) });
module.exports = router;