module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Assets', [
      {
        nomeAtivo: 'NVDA',
        qtdeAtivo: 50,
        valor: 157.62,
      },
      {
        nomeAtivo: 'NU',
        qtdeAtivo: 50,
        valor: 3.85,
      },
      {
        nomeAtivo: 'JNJ',
        qtdeAtivo: 50,
        valor: 178.23,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Assets', null, {});
  },
};
