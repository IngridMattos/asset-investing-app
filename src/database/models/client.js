const ClientShema = (sequelize, DataTypes) => {
  const ClientTable = sequelize.define('Client', {
    id:{
      primaryKey:true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    balance: DataTypes.DECIMAL(10, 2),
    created: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  return ClientTable;
};

module.exports = ClientShema;