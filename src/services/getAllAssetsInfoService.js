const model = require('../database/models');

async function getAllAssetsInfoService() {
  const allAssetsInfo = await model.Asset.findAll();
  return allAssetsInfo;
}

module.exports = {
  getAllAssetsInfoService,
};
