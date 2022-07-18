const AssetShema = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define('Asset', {
    id:{
      primaryKey:true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nameAsset: DataTypes.STRING,
    amountAssets: DataTypes.INTEGER,
    assetValue: DataTypes.DECIMAL(10, 2),
  },
  {
    timestamps: false
  });

  return AssetTable;
};

module.exports = AssetShema;