const model = require('../database/models');

const { generateJWTToken } = require('../utils/jwt');

// Simulando login para para obter token e implementar JWT:

async function loginGenerateJWTTokenService({ codCliente }) {
  const dataValues = await model.Client.findOne({
    attributes: ['nome'],
    where: { codCliente },
  });

  if (!dataValues) {
    return {
      status: 400,
      message: 'Cliente inexistente ',
    };
  }

  return {
    status: 200,
    message: generateJWTToken({ dataValues }),
  };
}

module.exports = {
  loginGenerateJWTTokenService,
};
