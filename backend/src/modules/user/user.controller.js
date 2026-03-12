import UserEntity from './entities/user.entity.js';

const userController = {
  create: async (req, res, next) => {
    try {

    } catch (error) {
      res.json({ message: 'respond with a profile' });
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
