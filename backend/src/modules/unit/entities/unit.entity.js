import { DataTypes, Model } from 'sequelize'

const UnitSchema = {
  title: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING
  },
  symbol: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
}

class UnitEntity extends Model {
  static initModel(sequelize) {
    return UnitEntity.init(UnitSchema, {
      sequelize,
      modelName: 'UnitEntity',
      tableName: "units",
    })
  }
}

export default UnitEntity;
