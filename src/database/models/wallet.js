const WalletShema = (sequelize, DataTypes) => {
  const WalletTable = sequelize.define('Wallet', {
      clientId: {
        primaryKey:true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      assetId: {
        primaryKey:true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      amountCLientAssets: {
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
          foreignKey: 'assetId',
          otherKey: 'clientId'
      });
      models.Asset.belongsToMany(models.Client, {
          as: 'categories',
          through: 'Wallet',
          foreignKey: 'clientId',
          otherKey: 'assetId'
      });
  }

return WalletTable;
};

module.exports = WalletShema;