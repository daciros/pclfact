const permissionService = require('../services/permissionService');

exports.createPermission = async (req, res) => {
  try {
    const permission = await permissionService.createPermission(req.body);
    res.status(201).json(permission);
  } catch (error) {
    console.error('Error creating permission:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.getPermissions = async (req, res) => {
  try {
    const permissions = await permissionService.getAllPermissions();
    res.status(200).json(permissions);
  } catch (error) {
    console.error('Error getting permissions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPermissionById = async (req, res) => {
  try {
    const permission = await permissionService.getPermissionById(req.params.id);
    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }
    res.status(200).json(permission);
  } catch (error) {
    console.error('Error getting permission by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePermission = async (req, res) => {
  try {
    const permission = await permissionService.updatePermission(
      req.params.id,
      req.body
    );
    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }
    res.status(200).json(permission);
  } catch (error) {
    console.error('Error updating permission:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.deletePermission = async (req, res) => {
  try {
    const permission = await permissionService.deletePermission(req.params.id);
    if (!permission) return res.status(404).json({ message: 'Permission not found' });
    res.status(200).json({ message: 'Permission deleted successfully' });
  } catch (error) {
    console.error('Error deleting permission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};