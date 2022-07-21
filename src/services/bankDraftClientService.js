const model = require('../database/models');
const { getBalanceClient } = require('../utils/getBalanceClient');

async function updateBalanceClient(codCliente, valor, amountBalanceClient) {
  const [qtdUpdated] = await model.Client.update(
    {
      saldo: amountBalanceClient - Number(valor),
    },
    { where: { codCliente } },
  );
  return qtdUpdated;
}

