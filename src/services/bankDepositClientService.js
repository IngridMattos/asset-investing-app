const model = require('../database/models');
const { getBalanceClient } = require('../utils/getBalanceClient');

async function bankDepositClientService({ codCliente, valor }) {
  const amountBalanceClient = await getBalanceClient(codCliente);

  const [qtdUpdated] = await model.Client.update(
    {
      saldo: amountBalanceClient + Number(valor),
    },
    { where: { codCliente } },
  );
  if (qtdUpdated !== 1) {
    return {
      status: 400,
      message: 'Algo deu errado, depósito não realizado',
    };
  }
  return {
    status: 200,
    message: 'Depósito realizado com sucesso',
  };
}

module.exports = {
  bankDepositClientService,
};
