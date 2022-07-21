const service = require('../services/getAllAssetsInfoService');

async function getAllAssetsInfoController(_req, res) {
  const allAssets = await service.getAllAssetsInfoService();
  return res.status(200).send(allAssets);
}

module.exports = {
  getAllAssetsInfoController,
};
