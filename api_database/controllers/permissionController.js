// controllers/permissionController.js

const Permission = require('../models/permissionModel');

// Crear un nuevo permiso
exports.createPermission = async (req, res) => {
  try {
    const permission = new Permission(req.body);
    await permission.save();
    res.status(201).json(permission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los permisos
exports.getPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un permiso por ID
exports.getPermissionById = async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id);
    if (!permission) return res.status(404).json({ message: 'Permission not found' });
    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un permiso por ID
exports.updatePermission = async (req, res) => {
  try {
    const permission = await Permission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!permission) return res.status(404).json({ message: 'Permission not found' });
    res.status(200).json(permission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un permiso por ID
exports.deletePermission = async (req, res) => {
    try {
      const permission = await Permission.findByIdAndDelete(req.params.id);
      if (!permission) return res.status(404).json({ message: 'Permission not found' });
      res.status(200).json({ message: 'Permission deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };