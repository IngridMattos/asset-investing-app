const WalletShema = (sequelize, DataTypes) => {
  const WalletTable = sequelize.define('Wallet', {
      codCliente: {
        primaryKey:true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      codAtivo: {
        primaryKey:true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      qtdeAtivo: {
        type: DataTypes.INTEGER,
      }
  },
  {
      timestamps: false
    });

  WalletTable.associate = (models) => {
      models.Client.belongsToMany(models.Asset, {
          as: 'Assets',
          through: 'Wallet',
          foreignKey: 'codAtivo',
          otherKey: 'codCliente'
      });
      models.Asset.belongsToMany(models.Client, {
          as: 'categories',
          through: 'Wallet',
          foreignKey: 'codCliente',
          otherKey: 'codAtivo'
      });
  }

return WalletTable;
};

module.exports = WalletShema;