const router = require('express').Router();
const { container } = require('../app-container');
const usersController = container.resolve('usersController');
router.post('/', async (req, res) => { usersController.addUser(req); res.send(200) });
router.get('/', async (req, res) => { const result = await usersController.getUsers(req); res.send(result).status(200) });
router.delete('/', async (req, res) => { usersController.deleteUser(req); res.send(200) });
router.put('/', async (req, res) => { const id = await usersController.updateUser(req); res.send(id.toString()).status(200); });
module.exports = router