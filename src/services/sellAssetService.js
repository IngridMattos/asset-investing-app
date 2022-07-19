const model = require('../database/models');

const { getClientAssets } = require('../utils/getClientAssets');

async function updatingClientAssets(codCliente, codAtivo, qtdeAtivoVendido, qtTotal) {
  const [qtdUpdated] = await model.Wallet.update(
    {
      qtdeAtivo: qtTotal - qtdeAtivoVendido,
    },
    { where: { codCliente, codAtivo } },
  );

  return qtdUpdated;
}

async function sellAssetsService({ codCliente, codAtivo, qtdeAtivo }) {
  const qtTotal = await getClientAssets(codCliente, codAtivo);

  if (qtdeAtivo > qtTotal) {
    return {
      status: 400,
      message: 'A quantidade de ativos é insuficiente',
    };
  }

  const shopping = await updatingClientAssets(codCliente, codAtivo, qtdeAtivo, qtTotal);

  if (shopping === 1) {
    return {
      status: 200,
      message: 'venda efetuada',
    };
  }
  return {
    status: 400,
    message: 'Atualização não realizada',
  };
}

module.exports = {
  sellAssetsService,
};
