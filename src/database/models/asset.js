const AssetShema = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define(
    'Asset',
    {
      codAtivo: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      nomeAtivo: DataTypes.STRING,
      qtdeAtivo: DataTypes.INTEGER,
      valor: DataTypes.DECIMAL(10, 2),
    },
    {
      timestamps: false,
    },
  );

  return AssetTable;
};

module.exports = AssetShema;
