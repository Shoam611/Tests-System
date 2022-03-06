const router = require('express').Router();
const { container } = require('../app-container');
const testsController = container.resolve('testsController');

router.post('/', async (req, res) => { const id = testsController.addTest(req); res.send(id).status(200)  });
router.get('/', async (req, res) => { const result = await testsController.getTests(req); res.send(result).status(200) });
router.delete('/', async (req, res) => { testsController.deleteTest(req); res.send(200) });
router.put('/', async (req, res) => { const id = await testsController.updateTest(req); res.send(id.toString()).status(200); });

module.exports = router