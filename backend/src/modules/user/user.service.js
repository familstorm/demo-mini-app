import UserEntity from './entities/user.entity.js'


const getByEmail = async (email) => {
  try {
    const user = await UserEntity.findOne({
      attributes: ['id', 'email', 'passwordHash'],
      where: { email },
    })
    return user.dataValues
  } catch (error) {
    return {
      messsage: 'Query errors',
      error
    }
  }
}

const createUser = async () => {
  try {
    const model = await UserEntity.create({
      email: 'admin@local',
      passwordHash: '123456'
    })

    return model
  } catch (error) {
    throw error
    // throw new Error('create user ...', error);
  }
}

const getUser = async () => {
  try {
    const model = new UserEntity()
    await model.save({
      email: 'admin@local',
      passwordHash: 'asdasdasd'
    })
  } catch (error) {
    throw new Error('get user ...');
  }
}

export default {
  getByEmail,
  createUser,
  getUser
};
