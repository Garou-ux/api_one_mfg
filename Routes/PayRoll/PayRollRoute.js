
const express = require('express');
const PayRollController = require('../../Controllers/PayRoll/PayRoll');
const router = express.Router();
const auth = require('../../middleware/auth');

//@get
router.get('/payroll/ListPayRoll', PayRollController.ListActivePayRoll);
router.get('/payroll/GetPayRoll', PayRollController.GetPayRoll);

//@post
router.post('/payroll/StorePayRoll', PayRollController.StorePayRoll);

module.exports = router;
