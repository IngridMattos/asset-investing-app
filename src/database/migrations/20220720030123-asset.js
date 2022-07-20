module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Assets', {
      codAtivo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nomeAtivo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      qtdeAtivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Assets');
  },
};
