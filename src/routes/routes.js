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

/**
 * @swagger
 * components:
 *     schemas:
 *        Ativos:
 *              type: object
 *              required:
 *                 -codCLiente,
 *                 -codAtivo,
 *                 -qtdeAtivo
 *              properties:
 *                 codCLiente:
 *                        type: INTEGER
 *                 codAtivo:
 *                        type: INTEGER
 *                 qtdeAtivo:
 *                        type: INTEGER
 *              example:
 *                 codCliente: 3
 *                 codAtivo: 2
 *                 qtdeAtivo: 16
 */
/**
 * @swagger
 * /investimentos/comprar:
 *      post:
 *         tags: [Ativos]
 *         description: Esse Endpoint realiza a compra de uma quantidade de ativos de um determinado cliente.
 *         security:
 *           - bearerAuth: []
 *         requestBody:
 *           required: true
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Ativos'
 *               example:
 *                 codCliente: 3
 *                 codAtivo: 2
 *                 qtdeAtivo: 15
 *         responses:
 *           200:
 *             description: 'Compra efetuada'
 *           400:
 *             description: 'A quantidade de ativos na corretora é insuficiente'
 *           401:
 *             description: 'Token não foi encrontrado'
 *           404:
 *             description: 'Compra não realizada'
 */
router.post('/investimentos/comprar', tokenValidation, buyAssetsController);

/**
 * @swagger
 * components:
 *     schemas:
 *        Ativos:
 *              type: object
 *              required:
 *                 -codCLiente,
 *                 -codAtivo,
 *                 -qtdeAtivo
 *              properties:
 *                 codCLiente:
 *                        type: INTEGER
 *                 codAtivo:
 *                        type: INTEGER
 *                 qtdeAtivo:
 *                        type: INTEGER
 *              example:
 *                 codCliente: 3
 *                 codAtivo: 2
 *                 qtdeAtivo: 16
 */
/**
 * @swagger
 * /investimentos/vender:
 *      post:
 *         tags: [Ativos]
 *         description: Esse Endpoint realiza a venda de uma quantidade de ativos de um determinado cliente.
 *         security:
 *           - bearerAuth: []
 *         requestBody:
 *           required: true
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Ativos'
 *               example:
 *                 codCliente: 3
 *                 codAtivo: 2
 *                 qtdeAtivo: 15
 *         responses:
 *           200:
 *             description: 'Venda efetuada'
 *           400:
 *             description: 'A quantidade de ativos é insuficiente'
 *           401:
 *             description: 'Token não foi encrontrado'
 *           404:
 *             description: 'Venda não realizada'
 */
router.post('/investimentos/vender', tokenValidation, sellAssetsController);

/**
 * @swagger
 * tags:
 *     name: AtivosDoCliente
 *     description: Endpoint dos Ativos de um cliente.
 */
/**
 * @swagger
 * components:
 *     schemas:
 *        AtivosDoCliente:
 *              type: object
 *              required:
 *                 -codCLiente
 *              properties:
 *                 codCLiente:
 *                        type: INTEGER
 *              example:
 *                 codCLiente: 1
 */
/**
 * @swagger
 * /ativos/{codCliente}:
 *      get:
 *         tags: [AtivosDoCliente]
 *         description: Esse Endpoint retorna uma lista com todos os ativos, de um determinado cliente.
 *         security:
 *           - bearerAuth: []
 *         parameters:
 *           - in: path
 *             name: codCLiente
 *             type: integer
 *             required: true
 *         responses:
 *           401:
 *             description: 'Token não foi encrontrado'
 *           200:
 *             content:
 *               application/json:
 *                 schema:
 *                   type: array
 */
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
