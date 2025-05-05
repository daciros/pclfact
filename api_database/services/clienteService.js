// api_database/services/clienteService.js
const Client = require('../models/clientModel');

// Function to get all clients
const getAllClientes = async () => {
  try {
    return await Client.find({});
  } catch (error) {
    console.error('Error getting all clients:', error);
    throw new Error('Error retrieving clients');
  }
};

// Function to get a client by ID
const getClienteById = async (id) => {
  try {
    return await Client.findById(id);
  } catch (error) {
    console.error('Error getting client by ID:', error);
    throw new Error('Error retrieving client by ID');
  }
};

// Function to create a new client
const createCliente = async (clienteData) => {
  try {
    const newClient = new Client(clienteData);
    return await newClient.save();
  } catch (error) {
    console.error('Error creating client:', error);
    throw new Error('Error creating client');
  }
};

// Function to update a client
const updateCliente = async (id, clienteData) => {
  try {
    return await Client.findByIdAndUpdate(id, clienteData, { new: true });
  } catch (error) {
    console.error('Error updating client:', error);
    throw new Error('Error updating client');
  }
};

// Function to delete a client
const deleteCliente = async (id) => {
  try {
    return await Client.findByIdAndDelete(id);
  } catch (error) {
    console.error('Error deleting client:', error);
    throw new Error('Error deleting client');
  }
};

module.exports = { getAllClientes, getClienteById, createCliente, updateCliente, deleteCliente };