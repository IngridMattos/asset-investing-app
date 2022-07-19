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
