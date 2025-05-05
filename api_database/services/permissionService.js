// api_database/services/permissionService.js
const Permission = require('../models/permissionModel');

const getAllPermissions = async () => {
  try {
    return await Permission.find({});
  } catch (error) {
    console.error('Error getting all permissions:', error);
    throw new Error('Error getting all permissions');
  }
};

const getPermissionById = async (id) => {
  try {
    const permission = await Permission.findById(id);
    if (!permission) {
      throw new Error('Permission not found');
    }
    return permission;
  } catch (error) {
    console.error('Error getting permission by ID:', error);
    throw new Error('Error getting permission by ID');
  }
};

const createPermission = async (permissionData) => {
  try {
    const newPermission = new Permission(permissionData);
    return await newPermission.save();
  } catch (error) {
    console.error('Error creating permission:', error);
    throw new Error('Error creating permission');
  }
};

const updatePermission = async (id, permissionData) => {
  try {
    return await Permission.findByIdAndUpdate(id, permissionData, {
      new: true,
    });
  } catch (error) {
    console.error('Error updating permission:', error);
    throw new Error('Error updating permission');
  }
};

const deletePermission = async (id) => {
    try {
        return await Permission.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error deleting permission');
    }
};

module.exports = {
    getAllPermissions,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
};