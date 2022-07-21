const service = require('../services/bankDraftClientService');

async function bankDraftClientController(req, res) {
  const { status, message } = await service.bankDraftClientService(req.body);
  return res.status(status).send(message);
}

module.exports = {
  bankDraftClientController,
};
