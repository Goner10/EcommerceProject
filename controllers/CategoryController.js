const { Category, Product } = require('../models/index')


const CategoryController = {
    async createCategory(req, res){
        
            try {
              const { name } = req.body;
              const newCategory = await Category.create({ name });
              res.status(201).json(newCategory);
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Error al crear la categoría' });
            }
          },
          
    async getAllCategories(req, res) {
            try {
              const categories = await Category.findAll();
              res.status(200).json(categories);
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Error al obtener las categorías' });
            }
          },

    async updateCategory(req, res) {
            try {
              const { id } = req.params;
              const { name } = req.body;
              const category = await Category.findOne({ where: { id } });
              if (!category) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
              }
              category.name = name;
              await category.save();
              res.status(200).json({ message: 'Categoría actualizada correctamente' });
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Error al actualizar la categoría' });
            }
          },
      async deleteCategory(req, res) {
            try {
              const { id } = req.params;
              const category = await Category.findOne({ where: { id } });
              if (!category) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
              }
              await category.destroy();
              res.status(200).json({ message: 'Categoría eliminada correctamente' });
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Error al eliminar la categoría' });
            }
          },
      async getCategoriesWithProducts(req, res) {
            try {
              const categories = await Category.findAll({
                include: [{ model: Product, as: 'Products' }]
              });
              res.status(200).json(categories);
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Error al obtener las categorías con productos' });
            }
          },
      
      async getCategoryById(req, res) {
            try {
              const { id } = req.params;
              const category = await Category.findByPk(id, {
                include: [{ model: Product, as: 'Products' }]
              });
              if (!category) {
                return res.status(404).json({ message: 'Categoría no encontrada' });
              }
              res.status(200).json(category);
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Error al obtener la categoría' });
            }
          },
      async getCategoryByName(req, res) {
            try {
                const { name } = req.query;
                const category = await Category.findOne({ where: { name } });
                if (!category) {
                    return res.status(404).json({ message: 'Categoría no encontrada' });
                }
                res.status(200).json(category);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error al obtener la categoría' });
            }
        }
        
          
    }



module.exports = CategoryController