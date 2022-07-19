const model = require('../database/models');

const { getAssets } = require('../utils/getAssets.js')
const { getClientAssets } = require('../utils/getClientAssets.js')

async function reduceAmountOfAssets(codAtivo, qtdeAtivoComprado, amountAssets) {

    const [qtdUpdated] = await model.Asset.update({
        qtdeAtivo: amountAssets - qtdeAtivoComprado
    },
    { where: { codAtivo } });
    return qtdUpdated;
};

async function updatingClientAssets(codCliente, codAtivo, qtdeAtivoComprado) {

    const amount = await getClientAssets(codCliente, codAtivo)

    const [qtdUpdated] = await model.Wallet.update({
        qtdeAtivo: amount + qtdeAtivoComprado
    },
    { where: { codCliente, codAtivo } });

    return qtdUpdated;
};

