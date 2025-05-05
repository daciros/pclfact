const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const {authorize} = require('../middleware/authorize');
//const auth = require('../middleware/authorize');
router.get('/', authorize, categoryController.getAllCategories);
router.get('/:id', authorize, categoryController.getCategoryById);
router.post('/', authorize, categoryController.createCategory);
router.put('/:id', authorize, categoryController.updateCategory);
router.delete('/:id', authorize, categoryController.deleteCategory);

module.exports = router;