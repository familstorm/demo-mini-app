import UserService from './pricelist.service.js'

const PriceListController = {
  getAll: (req, res, next) => {
    res.json({ message: 'respond with a all' });
  },

  getItem: async (req, res, next) => {
    res.json({ message: 'respond with a get item' });

  },

  create: async (req, res, next) => {
    try {
      const resp = await UserService.createUser()

      res.json({ message: 'respond with a create', resp });
    } catch (error) {
      res.json({ message: error.message, });
    } finally {
    }
  },

  updateItem: async (req, res, next) => {
    res.json({ message: 'respond with a update' });
  },

  deleteItem: async (req, res, next) => {

  }

}

export default PriceListController;
