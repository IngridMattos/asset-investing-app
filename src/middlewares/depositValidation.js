module.exports = async (req, res, next) => {
  const { valor } = req.body;
  if (Number(valor) <= 0) {
    return res.status(400)
      .send({ message: 'O Valor do depósito não pode ser negativo ou nulo' });
  }

  next();
};
