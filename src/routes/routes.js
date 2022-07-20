const express = require('express');

const router = express.Router();

const depositValidation = require('../middlewares/depositValidation');
const { buyAssetsController } = require('../controllers/buyAssetsController');
const { sellAssetsController } = require('../controllers/sellAssetsController');
const { getAllAssetsByIdClientController } = require('../controllers/getAllAssetsByIdClientController');
const { getAssetByIdController } = require('../controllers/getAssetByIdController');
const { bankDepositClientController } = require('../controllers/bankDepositClientController');

router.post('/investimentos/comprar', buyAssetsController);
router.post('/investimentos/vender', sellAssetsController);
router.get('/ativos/:codCliente', getAllAssetsByIdClientController);
router.get('/investimentos/ativos/:codAtivo/', getAssetByIdController);
router.post('/conta/deposito', depositValidation, bankDepositClientController);

module.exports = router;
