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

/**
 * @swagger
 * tags:
 *     name: Ativos
 *     description: Endpoints para os Ativos.
 */
/**
 * @swagger
 * components:
 *     schemas:
 *        Ativos:
 *              type: object
 *              required:
 *                 -codAtivo
 *                 -nomeAtivo
 *                 -qtdeAtivo
 *                 -valor
 *              properties:
 *                 codAtivo:
 *                        type: INTEGER
 *                 nomeAtivo:
 *                        type: STRING
 *                 qtdeAtivo:
 *                        type: INTEGER
 *                 valor:
 *                        type: DECIMAL
 *              example:
 *                 codAtivo: 1
 *                 nomeAtivo: nomeDaAção
 *                 qtdeAtivo: 50
 *                 valor: 100.00
 */
/**
 * @swagger
 * /ativos:
 *   get:
 *     tags: [Ativos]
 *     description: Esse Endpoint retorna uma lista com todos os ativos e suas informações.
 *     summary: 'Lista todos os ativos da corretora'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ativos'
 */

router.get('/ativos', tokenValidation, getAllAssetsInfoController);
/**
 * @swagger
 * tags:
 *     name: Ativos
 *     description: Endpoints referente aos ativos.
 */
/**
 * @swagger
 * /investimentos/ativos/{codAtivo}:
 *      get:
 *         tags: [Ativos]
 *         description: Esse Endpoint retorna um ativos, pelo seu codAtivo que é o mesmo que id.
 *         security:
 *           - bearerAuth: []
 *         parameters:
 *           - in: path
 *             name: codAtivo
 *             type: integer
 *             required: true
 *         responses:
 *           200:
 *             content:
 *               application/json:
 *                 schema:
 *                   type: array
 *           401:
 *             description: 'Token não foi encrontrado'
 */

router.get('/investimentos/ativos/:codAtivo/', tokenValidation, getAssetByIdController);

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
