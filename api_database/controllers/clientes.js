const express = require("express");
const router = express.Router();
const Cliente = require("../data/cliente");

// Obtener todos los clientes
router.get("/", async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (err) {
    console.error("Error getting clients:", err);
    res.status(500).json({ message: "Error getting clients" });
  }
});

// Crear un cliente
router.post("/", async (req, res) => {
  try {
    const cliente = new Cliente({
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      estado: req.body.estado,
    });

    const nuevoCliente = await cliente.save();
    res.status(201).json(nuevoCliente);
  } catch (err) {
    console.error("Error creating client:", err);
    res.status(400).json({ message: "Error creating client" });
  }
});

// Obtener un cliente por ID
router.get("/:id", getCliente, (req, res) => {
  res.json(res.cliente);
});

// Actualizar un cliente
router.put("/:id", getCliente, async (req, res) => {
  try {
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

    const clienteActualizado = await res.cliente.save();
    res.json(clienteActualizado);
  } catch (err) {
    console.error("Error updating client:", err);
    res.status(400).json({ message: "Error updating client" });
  }
 
});

// Eliminar un cliente
router.delete("/:id", getCliente, async (req, res) => {
  try {
    await res.cliente.remove();
    res.json({ message: "Cliente eliminado" });
  } catch (err) {
    console.error("Error deleting client:", err);
    res.status(500).json({ message: "Error deleting client" });
  }
});

// Middleware para obtener cliente por ID
async function getCliente(req, res, next) {
  let cliente;
  try {cliente = await Cliente.findById(req.params.id);
    if (!cliente) {return res.status(404).json({ message: "Cliente no encontrado" });}
  } catch (err) {console.error("Error finding client:", err);
    return res.status(500).json({ message: "Error finding client" });
  }
  res.cliente = cliente;
  next();
}

module.exports = router;
