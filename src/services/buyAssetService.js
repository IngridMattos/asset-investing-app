const model = require('../database/models');

const { getAssets } = require('../utils/getAssets');
const { getClientAssets } = require('../utils/getClientAssets');

async function reduceAmountOfAssets(codAtivo, qtdeAtivoComprado, amountAssets) {
  const [qtdUpdated] = await model.Asset.update(
    {
      qtdeAtivo: amountAssets - qtdeAtivoComprado,
    },
    { where: { codAtivo } },
  );
  return qtdUpdated;
}

async function updatingClientAssets(codCliente, codAtivo, qtdeAtivoComprado) {
  const amount = await getClientAssets(codCliente, codAtivo);

  const [qtdUpdated] = await model.Wallet.update(
    {
      qtdeAtivo: amount + qtdeAtivoComprado,
    },
    { where: { codCliente, codAtivo } },
  );

  return qtdUpdated;
}

async function buyAssetsService({ codCliente, codAtivo, qtdeAtivo }) {
  const amountAssets = await getAssets(codAtivo);

  if (qtdeAtivo > amountAssets) {
    return {
      status: 400,
      message: 'A quantidade de ativos na corretora é insuficiente',
    };
  }
  const selling = await reduceAmountOfAssets(codAtivo, qtdeAtivo, amountAssets);
  const shopping = await updatingClientAssets(codCliente, codAtivo, qtdeAtivo);

  if (selling === 1 && shopping === 1) {
    return {
      status: 200,
      message: 'Compra efetuada',
    };
  }
  return {
    status: 400,
    message: 'Atualização não realizada',
  };
}

module.exports = {
  buyAssetsService,
};
