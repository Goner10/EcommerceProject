'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products',[
      {
      name:'hoodie',
      price:88.5,
      CategoryId:2,
      updatedAt:new Date(),
      createdAt:new Date()
      },
      {
        name:'sunglasses',
        price:30.5,
        CategoryId:2,
        updatedAt:new Date(),
        createdAt:new Date()
        },
        {
          name:'gloves',
          price:20.5,
          CategoryId:1,
          updatedAt:new Date(),
          createdAt:new Date()
          },
          {
            name:'pants',
            price:50.5,
            CategoryId:4,
            updatedAt:new Date(),
            createdAt:new Date()
            },
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
