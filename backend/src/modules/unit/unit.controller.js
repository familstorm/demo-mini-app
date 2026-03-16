import UserService from './unit.service.js'

const UnitController = {
  create: async (req, res, next) => {
    try {
      const resp = await UserService.createUser()

      res.json({ message: 'respond with a create', resp });
    } catch (error) {
      res.json({ message: error.message, });
    } finally {
    }
  },

  getAll: (req, res, next) => {
    res.json({ message: 'respond with a all' });
  },

}

export default UnitController;
