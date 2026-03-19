import { DataTypes, Model } from 'sequelize'

const LocalizationSchema = {
  key: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  value: {
    type: DataTypes.STRING
  },
  languageId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'languages',
      key: 'id',
    },
  }
}

class LocalizationEntity extends Model {
  static initModel(sequelize) {
    return LocalizationEntity.init(LocalizationSchema, {
      sequelize,
      modelName: 'LocalizationEntity',
      tableName: "localizations",
      indexes: [{
        unique: true,
        fields: ['key', 'languageId', 'value'],
      }],
    })
  }
}

export default LocalizationEntity;
