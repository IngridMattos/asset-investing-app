'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [
      {
        name: "John Lennon",
        balance: 326.79,
      },
      {
        name: "Paul McCartney",
        balance: 788.1,
      },
      {
        name: "George Harrison",
        balance: 678.94,
      },
      {
        name: "Ringo Starr",
        balance: 1.790,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Assets', null, {})
  }
};
