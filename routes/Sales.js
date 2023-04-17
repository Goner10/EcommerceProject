const express = require('express');
const router = express.Router();

const SaleController = require('../controllers/SaleController');


router.post('/sales/createSale', SaleController.createSale)
router.get('/getSalesWithProducts', SaleController.getSalesWithProducts)


module.exports = router;