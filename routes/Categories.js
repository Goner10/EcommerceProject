const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/CategoryController');


router.post('/createCategory', CategoryController.createCategory)
router.get('/getAll', CategoryController.getAllCategories)
router.put('/categories/:id', CategoryController.updateCategory)
router.delete('/deleteCategories/:id', CategoryController.deleteCategory)

module.exports = router;
