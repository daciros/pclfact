const userModel = require('../models/userModel');

const getAllUsers = async () => {
  try {
    return await userModel.find();
  } catch (error) {
    throw new Error(`Error getting all users: ${error.message}`);
  }

};

const getUserById = async (id) => {
  try {
    const user = await userModel.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(`Error getting user by ID: ${error.message}`);
  }

};

const createUser = async (userData) => {
  try {
    const newUser = new userModel(userData);
    return await newUser.save();
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

const updateUser = async (id, userData) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, userData, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    } catch (error) {
        throw new Error(`Error updating user: ${error.message}`);
    }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return deletedUser;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};