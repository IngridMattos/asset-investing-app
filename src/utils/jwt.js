const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const TOKENSECRET = process.env.JWT_SECRET;

const generateJWTToken = (payload) => jwt.sign({ payload }, TOKENSECRET, jwtConfig);

module.exports = {
  generateJWTToken,
};
