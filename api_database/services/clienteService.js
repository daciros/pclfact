const Cliente = require('../data/cliente');

const getAllClientes = async () => {
  return await Cliente.find();
};

const createCliente = async (clienteData) => {
  const cliente = new Cliente(clienteData);
  return await cliente.save();
};

const getClienteById = async (id) => {
  return await Cliente.findById(id);
};

const updateCliente = async (id, clienteData) => {
  return await Cliente.findByIdAndUpdate(id, clienteData, { new: true });
};

const deleteCliente = async (id) => {
  return await Cliente.findByIdAndDelete(id);
};

module.exports = {
  getAllClientes,
  createCliente,
  getClienteById,
  updateCliente,
  deleteCliente
};
