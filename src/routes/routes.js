const express = require('express');

const router = express.Router();
// ---- middleware ----

const depositValidation = require('../middlewares/depositValidation');

// ---- importações da camada de controller -----
const { buyAssetsController } = require('../controllers/buyAssetsController');
const { sellAssetsController } = require('../controllers/sellAssetsController');
const { getAllAssetsByIdClientController } = require('../controllers/getAllAssetsByIdClientController');
const { getAssetByIdController } = require('../controllers/getAssetByIdController');
const { bankDepositClientController } = require('../controllers/bankDepositClientController');
const { bankDraftClientController } = require('../controllers/bankDraftClientController');
const { getBalanceCLientController } = require('../controllers/getBalanceClientController');

router.post('/investimentos/comprar', buyAssetsController);
router.post('/investimentos/vender', sellAssetsController);
router.get('/ativos/:codCliente', getAllAssetsByIdClientController);

// Acrescentando o caminho /investimentos/ para a rota: /ativos/:codAtivo/  para que
// assim exista distinção entre o /ativos/:codCliente na leitura e execução das rotas

router.get('/investimentos/ativos/:codAtivo/', getAssetByIdController);
router.post('/conta/deposito', depositValidation, bankDepositClientController);
router.post('/conta/saque', depositValidation, bankDraftClientController);
router.get('/conta/:codCliente', getBalanceCLientController);

module.exports = router;
