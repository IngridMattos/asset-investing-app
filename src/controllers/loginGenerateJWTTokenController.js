const service = require('../services/loginGenerateJWTTokenService');

async function loginGenerateJWTTokenController(req, res) {
  const { status, message } = await service.loginGenerateJWTTokenService(req.body);

  return res.status(status).send(message);
}

module.exports = {
  loginGenerateJWTTokenController,
};
