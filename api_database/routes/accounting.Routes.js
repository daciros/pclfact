const express = require('express');
const router = express.Router();
const accountingController = require('../controllers/accountingController');
const { authorize } = require('../middleware/authorize');

router.get('/',  accountingController.getAllAccountings);
router.get('/:id', accountingController.getAccountingById);
router.post('/',  accountingController.createAccounting);
router.put('/:id', accountingController.updateAccounting);
router.delete('/:id', accountingController.deleteAccounting);

module.exports = router;