'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [
      {
        nome: "John Lennon",
        saldo: 326.79,
      },
      {
        nome: "Paul McCartney",
        saldo: 788.1,
      },
      {
        nome: "George Harrison",
        saldo: 678.94,
      },
      {
        nome: "Ringo Starr",
        saldo: 1.790,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Assets', null, {})
  }
};
