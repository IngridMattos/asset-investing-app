const service = require('../services/getBalanceCLientService');

async function getBalanceCLientController(req, res) {
  const { status, clientBalance } = await service.getBalanceCLientService(req.params);
  return res.status(status).send(clientBalance);
}

module.exports = {
  getBalanceCLientController,
};
