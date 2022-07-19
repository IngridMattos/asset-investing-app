const model = require('../database/models');

async function getClientAssets(codCliente, codAtivo) {
    const amount = await model.Wallet.findOne({
        attributes: ['qtdeAtivo'],
        where: { codCliente, codAtivo } });

    return amount.dataValues.qtdeAtivo;
}

module.exports = { getClientAssets };