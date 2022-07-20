const service = require('../services/getAllAssetsByIdService');

async function getAllAssetsByIdController(req, res) {
  const { codCliente } = req.params;
  const teste = await service.getAllAssetsByIdService(codCliente);
  return res.status(200).send(teste);
}

module.exports = {
  getAllAssetsByIdController,
};
