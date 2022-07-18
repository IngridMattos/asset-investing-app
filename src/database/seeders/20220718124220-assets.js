'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Assets', [
      {
        nameAsset: "NVDA",
        amountAssets: 50,
        assetValue: 157.62
      },
      {
        nameAsset: "NU",
        amountAssets: 50,
        assetValue: 3.85
      },
      {
        nameAsset: "JNJ",
        amountAssets: 50,
        assetValue: 178.23
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Assets', null, {})
  }
};
