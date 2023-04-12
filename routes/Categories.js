const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/CategoryController');


router.post('/createCategory', CategoryController.createCategory)
router.get('/getAll', CategoryController.getAllCategories)
router.put('/categories/:id', CategoryController.updateCategory)
router.delete('/deleteCategories/:id', CategoryController.deleteCategory)
router.get('/getCategoriesWithProducts', CategoryController.getCategoriesWithProducts)
router.get('/getCategory/:id', CategoryController.getCategoryById);
router.get('getCategoryByName', CategoryController.getCategoryByName)

module.exports = router;
