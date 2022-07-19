const service = require('../services/buyAssetService');

async function buyAssetsController(req, res) {
    const { status, message } = await service.buyAssetsService(req.body);
    return res.status(status).send(message);
}

module.exports = {
    buyAssetsController,
};