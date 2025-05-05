// controllers/supplyController.js

const supplyService = require('../services/supplyService');

// Crear un nuevo insumo
exports.createSupply = async (req, res) => {
  try {
    const newSupply = await supplyService.createSupply(req.body);
    res.status(201).json(newSupply);
  } catch (error) {
    console.error('Error creating supply:', error);
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los insumos.
exports.getAllSupplies = async (req, res) => {
  try {
    const supplies = await supplyService.getAllSupplies();
    res.status(200).json(supplies);
  } catch (error) {
    console.error('Error getting all supplies:', error);
    res.status(500).json({ message: 'Error getting supplies' });
  }
};

// Obtener un insumo por ID.
exports.getSupplyById = async (req, res) => {
  try {
    const supply = await supplyService.getSupplyById(req.params.id);
    if (!supply) {
      return res.status(404).json({ message: 'Supply not found' });
    }
    res.status(200).json(supply);
  } catch (error) {
    console.error('Error getting supply by ID:', error);
    res.status(500).json({ message: 'Error getting supply' });
  }
};

// Actualizar un insumo por ID.
exports.updateSupply = async (req, res) => {
  try {
    const updatedSupply = await supplyService.updateSupply(
      req.params.id,
      req.body
    );
    if (!updatedSupply) {
      return res.status(404).json({ message: 'Supply not found' });
    }
    res.status(200).json(updatedSupply);
  } catch (error) {
    console.error('Error updating supply:', error);
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un insumo por ID.
exports.deleteSupply = async (req, res) => {
  try {
    const result = await supplyService.deleteSupply(req.params.id);
    res.status(200).json({ message: 'Supply deleted successfully' });
  } catch (error) {
    console.error('Error deleting supply:', error);
    res.status(500).json({ message: 'Error deleting supply' });
  }
};
