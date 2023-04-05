const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');


router.post('/createproduct', ProductController.createProduct);
router.get('/getAll', ProductController.getAll)
router.get('/getById/:id', ProductController.getById)
router.get('/getByName/:name', ProductController.getByName)
router.get('/getByPrice/:price', ProductController.getByPrice)

module.exports = router;