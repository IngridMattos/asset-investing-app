'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Wallets', 'amountCLientAssets', {
      allowNull: false,
        type: Sequelize.INTEGER
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropColumn('Wallets', 'amountCLientAssets');
  }
};
