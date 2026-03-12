import UserService from './user.service.js'

const userController = {
  create: async (req, res, next) => {
    try {
      const resp = await UserService.createUser()

      res.json({ message: 'respond with a create', resp });
    } catch (error) {
      res.json({ message: error.message, });
    } finally {
      next()
    }
  },

  getAll: (req, res, next) => {
    res.json({ message: 'respond with a all' });
  },

  getProfile: (req, res, next) => {
    res.json({ message: 'respond with a profile' });
  },
}

export default userController;
