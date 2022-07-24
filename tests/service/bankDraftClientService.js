const sinon = require('sinon');
const { expect } = require('chai');
const model = require('../../src/database/models');
const service = require('../../src/services/bankDraftClientService');
const utils = require('../../src/utils/getBalanceClient');

describe('Testanto camada Service que realiza o Saque na conta do cliente', async () => {
  describe('Testando a função que realiza o update na conta do cliente, quando é realizado um saque', async () => {
    before(async () => {
      sinon.stub(model.Client, 'update').resolves([1]);
    });

    after(async () => {
      model.Client.update.restore();
    });

    it('Testando se o update do valor da conta, após um saque, é realizado', async () => {
      const codCliente = 2;
      const valor = 100;
      const amount = 300;

      const response = await service.updateBalanceClient(codCliente, valor, amount);
      expect(response).to.be.a('number');
      expect(response).to.be.equal(1);
    });
  });
  describe('Testando função que realiza o update quando é realizado um saque', async () => {
    before(async () => {
      sinon.stub(model.Client, 'update').resolves([0]);
    });

    after(async () => {
      model.Client.update.restore();
    });

    it('Testando se o update do valor da conta, após um saque, não é realizado', async () => {
      const codCliente = 2;
      const valor = 100;
      const amount = 300;

      const response = await service.updateBalanceClient(codCliente, valor, amount);
      expect(response).to.be.a('number');
      expect(response).to.be.equal(0);
    });
  });
  describe('Testando função que realiza o update quando é realizado um saque', async () => {
    before(async () => {
      sinon.stub(model.Client, 'update').resolves([0]);
    });

    after(async () => {
      model.Client.update.restore();
    });

    it('Testando se o update do valor da conta, após um saque, não é realizado', async () => {
      const codCliente = 2;
      const valor = 100;
      const amount = 300;

      const response = await service.updateBalanceClient(codCliente, valor, amount);
      expect(response).to.be.a('number');
      expect(response).to.be.equal(0);
    });
  });
});
