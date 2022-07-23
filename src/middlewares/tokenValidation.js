const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const TOKENSECRET = process.env.JWT_SECRET;
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ message: 'Token não foi encrontrado' });
  }
  const [, token] = auth.split(' ');
  try {
    jwt.verify(token, TOKENSECRET);
  } catch (err) {
    return res.status(401).json({ message: 'Token invalido ou expirado' });
  }
  next();
};
