const router = require('express').Router();
const { container } = require('../app-container');
const usersController = container.resolve('usersController');
router.post('/', async (req, res) => {
    try { res.send(await usersController.addUser(req)).status(200) }
    catch (err) { res.send(err.message).status(500) }
});
router.get('/', async (req, res) => { const result = await usersController.getUsers(req); res.send(result).status(200) });
router.delete('/', async (req, res) => { usersController.deleteUser(req); res.send(200) });
router.put('/', async (req, res) => { const id = await usersController.updateUser(req); res.send(id.toString()).status(200); });
module.exports = router