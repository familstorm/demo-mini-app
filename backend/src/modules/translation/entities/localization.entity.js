import { DataTypes, Model } from 'sequelize'
import config from '../../../configs/database.js';
import LanguageEntity from './language.entity.js';

class LocalizationEntity extends Model { }

const LocalizationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  key: {
    unique: true,
    type: DataTypes.STRING
  },
  value: {
    type: DataTypes.STRING
  },
  languageId: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

LocalizationEntity.init(LocalizationSchema, {
  sequelize: config,
  modelName: 'LocalizationEntity',
  tableName: "localizations",
  indexes: [
    {
      unique: true,
      fields: ['key', 'languageId', 'value'],
    },
  ],
})

LocalizationEntity.Language = LocalizationEntity.belongsTo(LanguageEntity)

export default LocalizationEntity;
