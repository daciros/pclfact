const categoryService = require('../services/categoryService');

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error('Error getting all categories:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    console.error(`Error getting category by ID ${req.params.id}:`, error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryService.createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(400).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await categoryService.updateCategory(
      req.params.id,
      req.body
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(updatedCategory);
  } catch (error) {
    console.error(`Error updating category ${req.params.id}:`, error);
    res.status(400).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const result = await categoryService.deleteCategory(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error(`Error deleting category ${req.params.id}:`, error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory}