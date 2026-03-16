import { DataTypes, Model } from 'sequelize'
import config from '../../../configs/database.js';

class LanguageEntity extends Model { }

const LanguageSchema = {
  code: {
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

LanguageEntity.init(LanguageSchema, {
  sequelize: config,
  modelName: 'LanguageEntity',
  tableName: "languages",
  indexes: [{
    unique: true,
    fields: ['code'],
  }],
});

LanguageEntity.Localization = LanguageEntity.hasMany(LocalizationEntity)


export default LanguageEntity;
