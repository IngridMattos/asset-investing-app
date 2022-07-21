const service = require('../services/bankDepositClientService');

async function bankDepositClientController(req, res) {
  const { status, message } = await service.bankDepositClientService(req.body);
  return res.status(status).send(message);
}

module.exports = {
  bankDepositClientController,
};
