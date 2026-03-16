import { DataTypes, Model } from 'sequelize'
import config from '../../../configs/database.js';
import hashUtil from '../../../utils/hash.util.js'

class UserEntity extends Model { }

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  passwordHash: {
    allowNull: false,
    type: DataTypes.STRING,
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

UserEntity.init(UserSchema, {
  sequelize: config,
  modelName: 'UserEntity',
  tableName: "users",
  indexes: [
    {
      unique: true,
      fields: ['email'],
    },
  ],
  hooks: {
    beforeCreate: async (user) => {
      if (user.passwordHash) {
        user.passwordHash = await hashUtil.generateHash(user.passwordHash);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('passwordHash')) {
        user.passwordHash = await bcrypt.generateHash(user.passwordHash);
      }
    },
  },
})

export default UserEntity;
