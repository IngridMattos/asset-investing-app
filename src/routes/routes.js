const express = require('express');

const router = express.Router();

const { buyAssetsController } = require('../controllers/buyAssetsController');
const { sellAssetsController } = require('../controllers/sellAssetsController');
const { getAllAssetsByIdController } = require('../controllers/getAllAssetsByIdController');

router.post('/investimentos/comprar', buyAssetsController);
router.post('/investimentos/vender', sellAssetsController);
router.get('/ativos/:codCliente', getAllAssetsByIdController);

module.exports = router;
