const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const {authorize} = require('../middleware/authorize');
const { getAllRoles, getRoleById, createRole, updateRole, deleteRole } = roleController;
router.get('/', authorize, getAllRoles);
router.get('/:id', authorize, getRoleById);
router.post('/', authorize, createRole);
router.put('/:id', authorize, updateRole);
router.delete('/:id', authorize, deleteRole);

module.exports = router;