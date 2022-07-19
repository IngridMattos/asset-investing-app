const ClientShema = (sequelize, DataTypes) => {
  const ClientTable = sequelize.define('Client', {
    id:{
      primaryKey:true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nome: DataTypes.STRING,
    saldo: DataTypes.DECIMAL(10, 2),
    criado: DataTypes.DATE,
    atualizado: DataTypes.DATE,
  });

  return ClientTable;
};

module.exports = ClientShema;