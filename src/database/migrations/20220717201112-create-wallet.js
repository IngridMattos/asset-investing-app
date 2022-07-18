'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Wallets', {
      clientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true
      },
      assetId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Assets',
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('wallets');
  }
};