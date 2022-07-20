const model = require('../database/models');

async function getAssets(codAtivo) {
  const amount = await model.Asset.findOne({
    attributes: ['qtdeAtivo'],
    where: { codAtivo },
  });

  return amount.dataValues.qtdeAtivo;
}

module.exports = { getAssets };
