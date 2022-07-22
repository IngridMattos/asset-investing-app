const express = require('express');

const router = express.Router();

// ---- middleware ----

const depositValidation = require('../middlewares/depositValidation');
const tokenValidation = require('../middlewares/tokenValidation');

// ---- importações da camada de controller -----

const { buyAssetsController } = require('../controllers/buyAssetsController');
const { sellAssetsController } = require('../controllers/sellAssetsController');
const { getAllAssetsByIdClientController } = require('../controllers/getAllAssetsByIdClientController');
const { getAssetByIdController } = require('../controllers/getAssetByIdController');
const { bankDepositClientController } = require('../controllers/bankDepositClientController');
const { bankDraftClientController } = require('../controllers/bankDraftClientController');
const { getBalanceCLientController } = require('../controllers/getBalanceClientController');
const { getAllAssetsInfoController } = require('../controllers/getAllAssetsInfoController');
const { loginGenerateJWTTokenController } = require('../controllers/loginGenerateJWTTokenController');

//    ---- ROTAS ---

router.post('/investimentos/comprar', tokenValidation, buyAssetsController);
router.post('/investimentos/vender', tokenValidation, sellAssetsController);
router.get('/ativos/:codCliente', tokenValidation, getAllAssetsByIdClientController);

// Acrescentando o caminho /investimentos/ para a rota: /ativos/:codAtivo/  para que
// assim exista distinção entre o /ativos/:codCliente na leitura e execução da rota:

router.get('/investimentos/ativos/:codAtivo/', tokenValidation, getAssetByIdController);
router.post('/conta/deposito', depositValidation, tokenValidation, bankDepositClientController);
router.post('/conta/saque', depositValidation, tokenValidation, bankDraftClientController);
router.get('/conta/:codCliente', tokenValidation, getBalanceCLientController);

// Criando rota geral para o retorno de todos os ativos e informações:
router.get('/ativos', tokenValidation, getAllAssetsInfoController);

// Rota para simulação de login para gerar o token:
router.post('/login', loginGenerateJWTTokenController);

module.exports = router;
