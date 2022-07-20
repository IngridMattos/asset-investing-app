const model = require('../database/models');

async function getAssetByIdService(codAtivo) {
  const allAssetInf = await model.Asset.findOne({
    where: { codAtivo },
  });
  return allAssetInf;
}

module.exports = {
  getAssetByIdService,
};
