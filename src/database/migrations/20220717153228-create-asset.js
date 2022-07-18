'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameAsset: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amountAssets: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      assetValue: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Assets');
  }
};