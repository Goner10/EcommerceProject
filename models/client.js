'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Client extends Model {
  static associate(models) {
      Client.hasmany(models.Sale)
    }
  }

  Client.init({
    full_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    adress: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};