const router = require('express').Router();
const { container } = require('../app-container');
const usersController = container.resolve('usersController');
router.post('/', async (req, res) => {
    try { res.send(await usersController.addUser(req)).status(200) }
    catch (err) { res.send(err.message).status(500) }
});
router.get('/', async (req, res) => {
    try {res.send(await usersController.getUsers(req)).status(200)}
    catch (err) { res.send(err.message).status(500) }
});
router.delete('/', async (req, res) => { 
    try{usersController.deleteUser(req); res.send(200);}
    catch (err) { res.send(err.message).status(500) }
});
router.put('/', async (req, res) => {
    try{res.send(( await usersController.updateUser(req)).toString()).status(200); }
    catch (err) { res.send(err.message).status(500) } });
module.exports = router