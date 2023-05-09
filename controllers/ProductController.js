const { Product, Category } = require('../models/index')

const ProductController = {
    async createProduct(req, res) {
        try {
          const { name, price ,CategoryId } = req.body;
          if (!name || !price || !CategoryId) {
            return res.status(400).send({ message: 'Missing required fields' });//se verifica que name, price y CategoryId estén presentes en req.body. Si alguno de ellos falta, se devuelve un mensaje de error con un código de estado 400 (Bad Request)
          }
          await Product.create({ name, price, CategoryId });
          res.status(201).send({ message: 'Product created' });
        } catch (error) {
          console.error(error);
          res.status(500).send(error);
        }
      },
    async getAll(req, res) {
        try {
            const products = await Product.findAll({
                 include:[{model: Category, attributes: ['name']}]
            })
            res.send(products)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    async getById(req, res) {
        try {
            const product = await Product.findByPk(req.params.id, { //método findPK de sequelize para que busque el   producto

                 include: [{model: Category, attributes: ['name']}]   
            })
            if (product) {
                res.send(product)
            } else {
                res.status(404).send({message: `No product with Id: ${req.params.id}`})
            }
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    async getByName(req, res) {
        try {
            const product = await Product.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%` // Op.like de sequelize para cogerlos a partir del name
                    }
                },
                include: [{model: Category, attributes: ['name']}]
            })
            if (product) {
                res.send(product)
            } else {
                res.status(404).send({message: `No product with name: ${req.params.name}`})
            }
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    async getByPrice(req, res) {
        try {
            const product = await Product.findOne({
                where: {
                    price: {
                        [Op.eq]: req.params.price  // Op.eq para que busque en los registros de products de la columna precio
                    }
                },
                include: [{model: Category, attributes: ['name']}]
            })
            console.log(req.params.price) 
            if (product) {
                res.send(product)
            } else {
                res.status(404).send({message: `No product with price: ${req.params.price}`})
            }
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    async deleteById(req, res)  {
        try {
          const productId = req.params.id;
          const product = await Product.findByPk(productId);
    
          if (!product) {
            return res.status(404).json({ message: 'Product not found' });
          }
    
          await Product.destroy({ where: { id: productId } });
    
          res.json({ message: 'Product deleted successfully', product });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
      async getProductsOrder(req, res) {
        try {
            const products = await Product.findAll({
                  include:[{model: Category, attributes: ['name']}],
                order: [['price', 'DESC']]
            })
            res.send(products)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    async updateById(req, res) {
        try {
            const productId = req.params.id;
            const { name, price, CategoryId } = req.body;
            const product = await Product.findByPk(productId);
    
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
    
            await product.update({ name, price, CategoryId });
    
            res.json({ message: 'Product updated successfully', product });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    
}
 

module.exports = ProductController
