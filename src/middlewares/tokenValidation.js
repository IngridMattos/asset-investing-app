const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const TOKENSECRET = process.env.JWT_SECRET;
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não foi encrontrado' });
  }

  try {
    jwt.verify(token, TOKENSECRET);
  } catch (err) {
    return res.status(401).json({ message: 'Token invalido ou expirado' });
  }
  next();
};
