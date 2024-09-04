const express = require('express');
const router = express.Router();
const Cliente = require('../data/cliente');

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un cliente
router.post('/', async (req, res) => {
  const cliente = new Cliente({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    estado: req.body.estado
  });

  try {
    const nuevoCliente = await cliente.save();
    res.status(201).json(nuevoCliente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener un cliente por ID
router.get('/:id', getCliente, (req, res) => {
  res.json(res.cliente);
});

// Actualizar un cliente
router.put('/:id', getCliente, async (req, res) => {
  if (req.body.nombre != null) {
    res.cliente.nombre = req.body.nombre;
  }
  if (req.body.email != null) {
    res.cliente.email = req.body.email;
  }
  if (req.body.telefono != null) {
    res.cliente.telefono = req.body.telefono;
  }
  if (req.body.direccion != null) {
    res.cliente.direccion = req.body.direccion;
  }
  if (req.body.estado != null) {
    res.cliente.estado = req.body.estado;
  }

  try {
    const clienteActualizado = await res.cliente.save();
    res.json(clienteActualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un cliente
router.delete('/:id', getCliente, async (req, res) => {
  try {
    await res.cliente.remove();
    res.json({ message: 'Cliente eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware para obtener cliente por ID
async function getCliente(req, res, next) {
  let cliente;
  try {
    cliente = await Cliente.findById(req.params.id);
    if (cliente == null) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.cliente = cliente;
  next();
}

module.exports = router;
