const Cliente = require('../data/cliente');

const getAllClientes = async () => {
  try {
    return await Cliente.find();
  } catch (error) {
    throw new Error(`Error getting all clientes: ${error.message}`);
  }
};

const createCliente = async (clienteData) => {
  try {
    const cliente = new Cliente(clienteData);
    return await cliente.save();
  } catch (error) {
    throw new Error(`Error creating cliente: ${error.message}`);
  }
};

const getClienteById = async (id) => {
  try {
    return await Cliente.findById(id);
  } catch (error) {
    throw new Error(`Error getting cliente by ID: ${error.message}`);
  }
};

const updateCliente = async (id, clienteData) => {
  try {
    return await Cliente.findByIdAndUpdate(id, clienteData, { new: true });
  } catch (error) {
    throw new Error(`Error updating cliente: ${error.message}`);
  }
};

const deleteCliente = async (id) => {
  try {
    return await Cliente.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error deleting cliente: ${error.message}`);
  }
};

module.exports = {
  getAllClientes,
  createCliente,
  getClienteById,
  updateCliente,
  deleteCliente,
};
