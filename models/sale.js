'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
  
    static associate(models) {
      
      Sale.belongsTo(models.Client);
      Sale.belongsToMany(models.Product,{

        through:models.Saleproduct
        
        })
        
        }
  }
  Sale.init({
    day: DataTypes.DATE,
    ClientID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};
