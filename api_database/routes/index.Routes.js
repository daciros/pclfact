//index.Routes.js
const routes = require('express').Router();
const authorize = require('../middleware/authorize');
const accountingRoutes = require('./accounting.Routes');
const clientRoutes = require('./clientRoutes');
const usersRoutes = require('./usersRoutes');
const categoryRoutes = require('./categoryRoutes');
const inventoryRoutes = require('./inventoryRoutes');
const invoiceRoutes = require('./invoiceRoutes');
const orderRoutes = require('./orderRoutes');
const permissionRoutes = require('./permissionRoutes');
const stockRoutes = require('./stockRoutes');
const productRoutes = require('./productRoutes');
const roleRoutes = require('./roleRoutes');
const supplierRoutes = require('./supplierRoutes');
const supplyRoutes = require('./supplyRoutes');

// Usar las rutas
routes.use('/api/accounting',  accountingRoutes);
routes.use('/api/clients', clientRoutes);
routes.use('/api/categories', categoryRoutes);
routes.use('/api/users', usersRoutes);
routes.use('/api/inventory', inventoryRoutes);
routes.use('/api/invoices',invoiceRoutes);
routes.use('/api/orders', orderRoutes);
routes.use('/api/permissions', permissionRoutes);
routes.use('/api/products', productRoutes);
routes.use('/api/roles', roleRoutes);
routes.use('/api/stock', stockRoutes);
routes.use('/api/suppliers', supplierRoutes);
routes.use('/api/supplies', supplyRoutes);

// Otras rutas y configuración de tu aplicación

module.exports = routes;
