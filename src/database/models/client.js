const ClientShema = (sequelize, DataTypes) => {
  const ClientTable = sequelize.define(
    'Client',
    {
      codCliente: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      nome: DataTypes.STRING,
      saldo: DataTypes.DECIMAL(10, 2),
    },
    {
      timestamps: false,
    },
  );

  return ClientTable;
};

module.exports = ClientShema;
