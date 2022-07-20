const model = require('../database/models');

async function getValuesById(clientAssets) {
  const values = clientAssets.map(({
    Assets, codAtivo, qtdeAtivo, codCliente,
  }) => {
    const objAtivo = Assets.find((iten) => iten.dataValues.codAtivo === codAtivo);

    const assetCLient = {
      codCliente,
      codAtivo,
      qtdeAtivo,
      valor: objAtivo.valor,
    };
    return assetCLient;
  });
  return values;
}

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
