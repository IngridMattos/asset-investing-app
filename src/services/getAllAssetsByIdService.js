const model = require('../database/models');

async function getAllAssetsByIdService(codCliente) {
  const allAssetsAndClients = await model.Wallet.findAll({
    include: [
      {
        model: model.Asset,
        as: 'Assets',
        attributes: ['valor', 'codAtivo'],
      },
    ],
    where: { codCliente },
  });
  const teste = await getValuesById(allAssetsAndClients);
  return teste;
}

module.exports = {
  getAllAssetsByIdService,
};
