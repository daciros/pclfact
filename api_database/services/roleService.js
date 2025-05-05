// api_database/services/roleService.js
const Role = require('../models/roleModel');

const getAllRoles = async () => {
    try {
      return await Role.find({});
    } catch (err) {
      console.error('Error getting all roles:', err);
      throw new Error('Error getting roles');
    }
  };

  const getRoleById = async (id) => {
    try {
      const role = await Role.findById(id);
      if (!role) {
        throw new Error('Role not found');
      }
      return role;
    } catch (err) {
      console.error('Error getting role by ID:', err);
      throw new Error('Error getting role by ID');
    }
  };

  const createRole = async (roleData) => {
    try {
      const newRole = new Role(roleData);
      return await newRole.save();
    } catch (err) {
      console.error('Error creating role:', err);
      throw new Error('Error creating role');
    }
  };

  const updateRole = async (id, roleData) => {
    try {
      const role = await Role.findByIdAndUpdate(id, roleData, { new: true });
      if (!role) {
        throw new Error('Role not found');
      }
      return role;
    } catch (err) {
      console.error('Error updating role:', err);
      throw new Error('Error updating role');
    }
  };

  const deleteRole = async (id) => {
    try {
      return await Role.findByIdAndDelete(id);
    } catch (err) {
      console.error('Error deleting role:', err);
      throw new Error('Error deleting role');
    }
  };

  module.exports = { getAllRoles, getRoleById, createRole, updateRole, deleteRole };