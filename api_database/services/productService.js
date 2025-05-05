// api_database/services/productService.js
const Product = require('../models/productModel');

const getAllProducts = async () => {
  try {
    return await Product.find({});
  } catch (error) {
    console.error('Error getting all products:', error);
    throw new Error('Error getting all products');
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    console.error('Error getting product by ID:', error);
    throw new Error('Error getting product by ID');
  }
};

const createProduct = async (productData) => {
  try {
    const newProduct = new Product(productData);
    return await newProduct.save();
  } catch (error) {
    console.error('Error creating product:', error);
    throw new Error('Error creating product');
  }
};

const updateProduct = async (id, productData) => {
  try {
    const product = await Product.findByIdAndUpdate(id, productData, { new: true });
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    console.error('Error updating product:', error);
    throw new Error('Error updating product');
  }
};

const deleteProduct = async (id) => {
  try {
    return await Product.findByIdAndDelete(id);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw new Error('Error deleting product');
  }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};