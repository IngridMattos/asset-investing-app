module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Wallets', [
      {
        codCliente: 1,
        codAtivo: 1,
        qtdeAtivo: 2,
      },
      {
        codCliente: 1,
        codAtivo: 2,
        qtdeAtivo: 3,
      },
      {
        codCliente: 2,
        codAtivo: 1,
        qtdeAtivo: 5,
      },
      {
        codCliente: 3,
        codAtivo: 1,
        qtdeAtivo: 2,
      },
      {
        codCliente: 3,
        codAtivo: 2,
        qtdeAtivo: 2,
      },
      {
        codCliente: 3,
        codAtivo: 3,
        qtdeAtivo: 2,
      },
      {
        codCliente: 4,
        codAtivo: 2,
        qtdeAtivo: 5,
      },
      {
        codCliente: 4,
        codAtivo: 3,
        qtdeAtivo: 10,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wallets', null, {});
  },
};
