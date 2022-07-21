const model = require('../database/models');
const { getBalanceClient } = require('../utils/getBalanceClient');

async function getBalanceCLientService({ codCliente }) {
  const saldo = await getBalanceClient(codCliente);

  const clientBalance = {
    codCliente,
    saldo,
  };

  return {
    status: 200,
    clientBalance,
  };
}

module.exports = {
  getBalanceCLientService,
};
