const service = require('../services/sellAssetService');

async function sellAssetsController(req, res) {
  const { status, message } = await service.sellAssetsService(req.body);
  return res.status(status).send(message);
}

module.exports = {
  sellAssetsController,
};
