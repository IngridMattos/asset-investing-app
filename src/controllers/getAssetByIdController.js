const service = require('../services/getAssetByIdService');

async function getAssetByIdController(req, res) {
  const { codAtivo } = req.params;
  const assetById = await service.getAssetByIdService(codAtivo);
  return res.status(200).send(assetById);
}

module.exports = {
  getAssetByIdController,
};
