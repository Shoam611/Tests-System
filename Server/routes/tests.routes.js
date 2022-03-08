const router = require('express').Router();
const { container } = require('../app-container');
const testsController = container.resolve('testsController');

router.post('/', async (req, res) => {
    try { res.send(await testsController.addTest(req)).status(200) }
    catch (err) { res.send(err.message).status(500) }
});
router.get('/', async (req, res) => {
    try { res.send(await testsController.getTests(req)).status(200) }
    catch (err) { res.send(err.message).status(500) }
});

router.delete('/', async (req, res) => {
    try { testsController.deleteTest(req); res.send(200) }
    catch (err) { res.send(err.message).status(500) }
});
router.put('/', async (req, res) => {
    try{res.send((await testsController.updateTest(req)).toString()).status(200);}
    catch (err) { res.send(err.message).status(500) }
});

module.exports = router