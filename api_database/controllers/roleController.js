// controllers/roleController.js

const roleService = require('../services/roleService');

// Crear un nuevo rol
exports.createRole = async (req, res) => {
  try {
    const newRole = await roleService.createRole(req.body);
    res.status(201).json(newRole);
  } catch (error) {
    console.error("Error creating role:", error);
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los roles
exports.getAllRoles = async (req, res) => {
  try {
    const allRoles = await roleService.getAllRoles();
    res.status(200).json(allRoles);
  } catch (error) {
    console.error("Error getting all roles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Obtener un rol por ID
exports.getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const roleById = await roleService.getRoleById(id);
    if (!roleById) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(roleById);
  } catch (error) {
    console.error("Error getting role by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Actualizar un rol por ID
exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRole = await roleService.updateRole(id, req.body);
    if (!updatedRole) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(updatedRole);
  } catch (error) {
    console.error("Error updating role:", error);
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un rol por ID
exports.deleteRole = async (req, res) => {
  try {
    const deletedRole = await roleService.deleteRole(req.params.id);
    if (!deletedRole) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    console.error("Error deleting role:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
