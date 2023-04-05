'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      
      Product.belongsTo(models.Category);
      Product.belongsToMany(models.Sale,{

        through:models.Saleproduct
        
        })

    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};