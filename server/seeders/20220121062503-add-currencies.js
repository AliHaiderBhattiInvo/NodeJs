'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
    $eq: Op.eq,
    $or: Op.or,
}
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Currencies', [
     {
       name: 'USD',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'EUR',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'PAK',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Currencies', {[Op.or]: [{name: 'USD'}, {name: 'EUR'}, {name: 'PAK'}]});
  }
};
