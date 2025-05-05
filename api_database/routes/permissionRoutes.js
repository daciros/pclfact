const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController');
const { authorize } = require('../middleware/authorize');

router.get('/', authorize, permissionController.getPermissions);
router.get('/:id', authorize, permissionController.getPermissionById);
router.post('/', authorize, permissionController.createPermission);
router.put('/:id', authorize, permissionController.updatePermission);
router.delete('/:id', authorize, permissionController.deletePermission);

module.exports = router;
