import { DataTypes, Model } from 'sequelize'
import config from '../../../configs/database.js';

class PriceListEntity extends Model { }

const PriceListSchema = {
  articleNo: {
    unique: true,
    allowNull: false,
    type: DataTypes.BIGINT
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  inPrice: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2),
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2),
  },
  inStock: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  description: {
    type: DataTypes.STRING
  },
  unitId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'units',
      key: 'id',
    },
  }
}

PriceListEntity.init(PriceListSchema, {
  sequelize: config,
  modelName: 'PriceListEntity',
  tableName: "pricelists",
  indexes: [{
    unique: true,
    fields: ['article_no', 'name']
  }],
})

export default PriceListEntity;
