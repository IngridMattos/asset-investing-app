const sinon = require('sinon');
const { expect } = require('chai');
const service = require('../../src/services/bankDepositClientService');
const { bankDepositClientController } = require('../../src/controllers/bankDepositClientController');

describe('Testanto camada Controller que realiza o depósito na conta do cliente', async () => {
  describe('Testando se o depósito foi realizado', async () => {
    const response = {};
    const request = {};
    const data = {
      status: 200,
      message: 'Depósito realizado com sucesso',
    };
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(service, 'bankDepositClientService').resolves(data);
    });

    after(() => {
      service.bankDepositClientService.restore();
    });

    it("Testando se a função retorna 'Depósito realizado com sucesso'", async () => {
      await bankDepositClientController(request, response);
      expect(response.status.calledWith(data.status)).to.be.equal(true);
      expect(response.send.calledWith(data.message)).to.be.equal(true);
    });
  });
  describe('Testando se o depósito não foi realizado', async () => {
    const response = {};
    const request = {};
    const data = {
      status: 404,
      message: 'Algo deu errado, depósito não realizado',
    };
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(service, 'bankDepositClientService').resolves(data);
    });

    after(() => {
      service.bankDepositClientService.restore();
    });

    it("Testando se a função retorna 'Algo deu errado, depósito não realizado'", async () => {
      await bankDepositClientController(request, response);
      expect(response.status.calledWith(data.status)).to.be.equal(true);
      expect(response.send.calledWith(data.message)).to.be.equal(true);
    });
  });
});
