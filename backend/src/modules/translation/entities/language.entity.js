import { DataTypes, Model } from 'sequelize'

const LanguageSchema = {
  code: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}

class LanguageEntity extends Model {
  static initModel(sequelize) {
    return LanguageEntity.init(LanguageSchema, {
      sequelize,
      modelName: 'LanguageEntity',
      tableName: "languages",
      indexes: [{
        unique: true,
        fields: ['code'],
      }],
    })
  }
}

export default LanguageEntity;
