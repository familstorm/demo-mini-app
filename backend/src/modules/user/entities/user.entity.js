import { DataTypes, Model } from 'sequelize'
import database from '../../../configs/database.js'


class UserEntity extends Model { }

const UserSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING
  },
  passwordHash: {
    type: DataTypes.STRING
  }
}

UserEntity.init(UserSchema, {
  sequelize: database,
  modelName: 'UserEntity',
  tableName: "users",
  indexes: [
    {
      unique: true,
      fields: ['email'],
    },
  ]
})

export default UserEntity;
