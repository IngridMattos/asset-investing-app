const sinon = require('sinon');
const { expect } = require('chai');
const model = require('../../src/database/models');
const { bankDepositClientService } = require('../../src/services/bankDepositClientService');
const utils = require('../../src/utils/getBalanceClient');

describe('Testanto camada Service que realiza o depósito na conta do cliente', async () => {
  describe('Testando se o depósito foi realizado', async () => {
    before(async () => {
      sinon.stub(model.Client, 'update').resolves([1]);
      sinon.stub(utils, 'getBalanceClient').resolves(10);
    });

    after(async () => {
      model.Client.update.restore();
      utils.getBalanceClient.restore();
    });

    it("Testando se a função retorna 'Depósito realizado com sucesso'", async () => {
      const codCliente = 2;
      const valor = 120;
      const msg = 'Depósito realizado com sucesso';
      const status = 200;

      const response = await bankDepositClientService({ codCliente, valor });
      expect(response).to.be.a('object');
      expect(response).to.have.property('message');
      expect(response).to.have.property('status');
      expect(response.message).to.be.equal(msg);
      expect(response.status).to.be.equal(status);
    });
  });

  describe('Testando se o depósito não foi realizado', async () => {
    before(async () => {
      sinon.stub(model.Client, 'update').resolves([0]);
      sinon.stub(utils, 'getBalanceClient').resolves(10);
    });

    after(async () => {
      model.Client.update.restore();
      utils.getBalanceClient.restore();
    });

    it("Testando se a função retorna 'Algo deu errado, depósito não realizado'", async () => {
      const codCliente = 2;
      const valor = 100;
      const msg = 'Algo deu errado, depósito não realizado';

      const response = await bankDepositClientService({ codCliente, valor });
      expect(response).to.be.a('object');
      expect(response).to.have.property('message');
      expect(response).to.have.property('status');
      expect(response.message).to.be.equal(msg);
      expect(response.status).to.be.equal(404);
    });
  });
});
