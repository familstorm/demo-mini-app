import { DataTypes, Model } from 'sequelize'
import database from '../../../configs/database.js'
import hashUtil from '../../../utils/hash.util.js'

class UserEntity extends Model { }

const UserSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false
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
  ],
  hooks: {
    // Hook tự động hash password — không cần làm thủ công trong controller
    beforeCreate: async (user) => {
      if (user.password) {
        user.password = await hashUtil.generateHash(user.password);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.generateHash(user.password);
      }
    },
  },
})

export default UserEntity;
