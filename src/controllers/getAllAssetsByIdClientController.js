const service = require('../services/getAllAssetsByIdClientService');

async function getAllAssetsByIdClientController(req, res) {
  const { codCliente } = req.params;
  const allAssetsClient = await service.getAllAssetsByIdClientService(codCliente);
  return res.status(200).send(allAssetsClient);
}

module.exports = {
  getAllAssetsByIdClientController,
};
