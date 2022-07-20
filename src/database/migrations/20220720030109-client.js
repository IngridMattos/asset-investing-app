module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      codCliente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(),
      },
      saldo: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        field: 'criado',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        field: 'atualizado',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients');
  },
};
