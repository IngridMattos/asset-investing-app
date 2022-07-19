const model = require('../database/models');

async function getClientAssets(codCliente, codAtivo) {
  const qtTotalDeAtivos = await model.Wallet.findOne({
    attributes: ['qtdeAtivo'],
    where: { codCliente, codAtivo },
  });
  return qtTotalDeAtivos.dataValues.qtdeAtivo;
}

module.exports = { getClientAssets };
