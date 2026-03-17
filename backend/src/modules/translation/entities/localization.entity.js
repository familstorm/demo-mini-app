import { DataTypes, Model } from 'sequelize'
import config from '../../../configs/database.js';
import LanguageEntity from './language.entity.js';

class LocalizationEntity extends Model { }

const LocalizationSchema = {
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
  indexes: [{
    unique: true,
    fields: ['key', 'languageId', 'value'],
  }],
})


export default LocalizationEntity;
