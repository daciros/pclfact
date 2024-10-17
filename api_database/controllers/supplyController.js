// controllers/supplyController.js

const Supply = require('../models/supplyModel');

// Crear un nuevo insumo
exports.createSupply = async (req, res) => {
  try {
    const supply = new Supply(req.body);
    await supply.save();
    res.status(201).json(supply);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los insumos
exports.getSupplies = async (req, res) => {
  try {
    const supplies = await Supply.find();
    res.status(200).json(supplies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un insumo por ID
exports.getSupplyById = async (req, res) => {
  try {
    const supply = await Supply.findById(req.params.id);
    if (!supply) return res.status(404).json({ message: 'Supply not found' });
    res.status(200).json(supply);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un insumo por ID
exports.updateSupply = async (req, res) => {
  try {
    const supply = await Supply.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!supply) return res.status(404).json({ message: 'Supply not found' });
    res.status(200).json(supply);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un insumo por ID
exports.deleteSupply = async (req, res) => {
  try {
    const supply = await Supply.findByIdAndDelete(req.params.id);
    if (!supply) return res.status(404).json({ message: 'Supply not found' });
    res.status(200).json({ message: 'Supply deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
