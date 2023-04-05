const { Product } = require('../models/index')

const ProductController = {
    async createProduct(req, res) {
        try {
            const { name, price ,CategoryId } = req.body;
            await Product.create({ name, price, CategoryId });
            res.status(201).send({ message: 'Product created' });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}

module.exports = ProductController
