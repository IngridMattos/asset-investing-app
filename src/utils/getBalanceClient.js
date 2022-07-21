const model = require('../database/models');

async function getBalanceClient(codCliente) {
  const amount = await model.Client.findOne({
    attributes: ['saldo'],
    where: { codCliente },
  });
  // O retorno do saldo volta como String, necessário tranformar em number.
  return +amount.dataValues.saldo;
}

module.exports = { getBalanceClient };
