// app.js
const config = require("./config/config");
const express = require("express");
const swaggerConfig = require("./config/swagger");
const accountingRoutes = require("./routes/accountingRoutes");
const clientRoutes = require("./routes/clientRoutes");
const usersRoutes = require("./routes/usersRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const orderRoutes = require("./routes/orderRoutes");
const permissionRoutes = require("./routes/permissionRoutes");
const productRoutes = require("./routes/productRoutes");
const roleRoutes = require("./routes/roleRoutes");
const stockRoutes = require("./routes/stockRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const supplyRoutes = require("./routes/supplyRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3090;

// Conectar a MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB conectado con Exito"))
  .catch((err) => console.log(err));
app.use(bodyParser.json());

// Configura Swagger UI en la ruta /api-docs
swaggerConfig(app);
// Usar las rutas
app.use("/api/accounting", accountingRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/products", productRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/supplies", supplyRoutes);
// Otras rutas y configuración de tu aplicación
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
