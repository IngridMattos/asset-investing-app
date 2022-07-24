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

async function bankDraftClientService({ codCliente, valor }) {
  const amountBalanceClient = await getBalanceClient(codCliente);
  if (valor > amountBalanceClient) {
    return {
      status: 400,
      message: 'Valor na conta é insuficiente',
    };
  }
  const qtdUpdated = await updateBalanceClient(codCliente, valor, amountBalanceClient);
  if (qtdUpdated !== 1) {
    return {
      status: 404,
      message: 'Algo deu errado, o saque não pode ser realizado',
    };
  }
  return {
    status: 200,
    message: 'Saque realizado com sucesso',
  };
}

module.exports = {
  bankDraftClientService,
  updateBalanceClient,
};
