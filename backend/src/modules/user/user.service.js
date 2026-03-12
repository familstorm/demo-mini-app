

const UserService = {

  createUser: () => {
    try {

    } catch (error) {
      throw new Error('create user ...');
    }
  },

  getUser: async () => {
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
}

export default UserService;
