import { DataTypes, Model } from 'sequelize'
import config from '../../../configs/database.js';
import PriceListEntity from './pricelist.entity.js';

class UnitEntity extends Model { }

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

UnitEntity.init(UnitSchema, {
  sequelize: config,
  modelName: 'UnitEntity',
  tableName: "units",
})

UnitEntity.Localization = UnitEntity.hasMany(PriceListEntity)

export default UnitEntity;
