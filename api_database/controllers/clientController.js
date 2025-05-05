const clienteService = require('../services/clienteService');

// Create a new client
exports.createClient = async (req, res) => {
  try {
    const client = await clienteService.createCliente(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Error creating client' });
  }
};

// Get all clients
exports.getClients = async (req, res) => {
  try {
    const clients = await clienteService.getAllClientes();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error retrieving clients' });
  }
};

// Get a client by ID
exports.getClientById = async (req, res) => {
  try {
    const client = await clienteService.getClienteById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error retrieving client' });
  }
};

// Update a client by ID
exports.updateClient = async (req, res) => {
  try {
    const client = await clienteService.updateCliente(req.params.id, req.body);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Error updating client' });
  }
};

// Delete a client by ID
exports.deleteClient = async (req, res) => {
  try {
    const client = await clienteService.deleteCliente(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error deleting client' });
  }
};
