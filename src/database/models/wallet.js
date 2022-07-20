const WalletShema = (sequelize, DataTypes) => {
  const WalletTable = sequelize.define(
    'Wallet',
    {
      codCliente: {
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      codAtivo: {
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      qtdeAtivo: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    },
  );

  WalletTable.associate = (models) => {
    WalletTable.belongsToMany(models.Asset, {
      as: 'Assets',
      through: 'Wallet',
      foreignKey: 'codCliente',
      otherKey: 'codAtivo',
    });
    WalletTable.belongsToMany(models.Client, {
      as: 'Clients',
      through: 'Wallet',
      foreignKey: 'codAtivo',
      otherKey: 'codCliente',
    });
  };

  return WalletTable;
};

module.exports = WalletShema;
