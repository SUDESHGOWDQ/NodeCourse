const express = require('express');
const router = express.Router();
const userController = require('../Controllers/controllers');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUserById);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
