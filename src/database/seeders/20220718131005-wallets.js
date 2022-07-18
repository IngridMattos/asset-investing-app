'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Wallets', [
      {
        clientId: 1,
        assetId: 1,
        amountCLientAssets: 2
      },
      {
        clientId: 1,
        assetId: 2,
        amountCLientAssets: 3
      },
      {
        clientId: 2,
        assetId: 1,
        amountCLientAssets: 5
      },
      {
        clientId: 3,
        assetId: 1,
        amountCLientAssets: 2
      },
      {
        clientId: 3,
        assetId: 2,
        amountCLientAssets: 2
      },
      {
        clientId: 3,
        assetId: 3,
        amountCLientAssets: 2
      },
      {
        clientId: 4,
        assetId: 2,
        amountCLientAssets: 5
      },
      {
        clientId: 4,
        assetId: 3,
        amountCLientAssets: 10
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wallets', null, {})
  }
};
