// index.Routes.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
//const { authorize } = require('../middleware/authorize');
const accountingRoutes = require('./accounting.Routes');
const categoryRoutes = require('./category.Routes');
const clientRoutes = require('./client.routes');
const inventoryRoutes = require('./inventory.Routes');
const invoiceRoutes = require('./invoice.Routes');
const orderRoutes = require('./order.Routes');
const pagoRoutes = require('./pago.routes');
const permissionRoutes = require('./permission.Routes');
const productRoutes = require('./product.Routes');
const roleRoutes = require('./role.Routes');
const stockRoutes = require('./stock.Routes');
const supplierRoutes = require('./supplier.Routes');
const supplyRoutes = require('./supply.Routes');
const userRoutes = require('./user.routes');

// Routes

router.use('/api/clients', clientRoutes);
router.use('/api/products', productRoutes);
router.use('/api/invoices', invoiceRoutes);
router.use('/api/orders', orderRoutes);
router.use('/api/users', userRoutes);
router.use('/api/payments', pagoRoutes);
router.use('/api/accounting', accountingRoutes);
router.use('/api/inventory', inventoryRoutes);
router.use('/api/permissions', permissionRoutes);
router.use('/api/roles', roleRoutes);
router.use('/api/categories', categoryRoutes);
router.use('/api/stocks', stockRoutes);
router.use('/api/suppliers', supplierRoutes);
router.use('/api/supplies', supplyRoutes);


module.exports = router;
