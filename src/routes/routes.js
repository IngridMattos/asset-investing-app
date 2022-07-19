const express = require('express');

const router = express.Router();

const { buyAssetsController } = require('../controllers/buyAssetsController');

router.post('/investimentos/comprar', buyAssetsController);

module.exports = router;