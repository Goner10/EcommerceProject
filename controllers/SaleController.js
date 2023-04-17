const { Sale, Product } = require('../models/index')

const SaleController = {
    async createSale(req, res) {
        try {
            const newSale = await Sale.create(req.body)
            Sale.addProduct(req.body.SaleId)
            res.status(201).send({ msg: "Pedido realizado con éxito", newSale });
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async getSalesWithProducts(req, res) {
        try {
            const sales = await Sale.findAll({
                include: [Product],
            });
            res.status(200).json(sales);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}




module.exports = SaleController;
