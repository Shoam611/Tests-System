const router = require('express').Router();
const { container } = require('../app-container');
const questionsController = container.resolve('questionsController');

router.post('/', async (req, res) => {
    try { res.send(JSON.stringify(await questionsController.addQuestion(req))).status(200) }
    catch (err) { res.send(err.message).status(500) }
});

router.get('/', async (req, res) => {
    try {
        const result = await questionsController.getQuestions(req);
        res.send(result).status(200)
    } catch (err) { res.send(err.message).status(500) }
});

router.delete('/', async (req, res) => {
    try { questionsController.deleteQuestion(req); res.send(200) }
    catch (err) { res.send(err.message).status(500) }
});
router.put('/', async (req, res) => {
    try { questionsController.updateQuestion(req); res.send(200); }
    catch (err) { res.send(err.message).status(500) }
});
module.exports = router;