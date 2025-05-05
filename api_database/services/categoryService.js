// api_database/services/categoryService.js
const Category = require('../models/categoryModel');

const getAllCategories = async () => {
  try {
    return await Category.find({});
  } catch (error) {
    console.error('Error getting all categories:', error);
    throw new Error('Error getting all categories');
  }
};

const getCategoryById = async (id) => {
  try {
    return await Category.findById(id);
  } catch (error) {
    console.error('Error getting category by ID:', error);
    throw new Error('Error getting category by ID');
  }
};

const createCategory = async (categoryData) => {
  try {
    const newCategory = new Category(categoryData);
    return await newCategory.save();
  } catch (error) {
    console.error('Error creating category:', error);
    throw new Error('Error creating category');
  }
};

const updateCategory = async (id, categoryData) => {
  try {
    return await Category.findByIdAndUpdate(id, categoryData, { new: true });
  } catch (error) {
    console.error('Error updating category:', error);
    throw new Error('Error updating category');
  }
};

const deleteCategory = async (id) => {
  try {
    return await Category.findByIdAndDelete(id);
  } catch (error) {
    console.error('Error deleting category:', error);
    throw new Error('Error deleting category');
  }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};
