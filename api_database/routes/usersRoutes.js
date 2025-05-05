const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authorize } = require('../middleware/authorize');

router.get('/', authorize, userController.getUsers);
router.get('/:id', authorize, userController.getUserById);
router.post('/', authorize, userController.createUser);
router.put('/:id', authorize, userController.updateUser);
router.delete('/:id', authorize, userController.deleteUser);

module.exports = router;