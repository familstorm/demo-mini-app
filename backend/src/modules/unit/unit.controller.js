import UnitService from './unit.service.js';

/**
 * CURD for unit: list, detail, create, update, remove
 */
const UnitController = {
  async list(req, res, next) {
    try {
      const { data, meta } = await UnitService.list(req.query)
      res.json({ status: true, message: 'respond with a all', data, meta });
    } catch (error) {
      res.json({ status: false, message: 'respond with a all' });
    }
  },

  async detail(req, res, next) {
    const id = req.params.id
    try {
      const result = await UnitService.detail(id)
      res.json({ status: true, message: 'respond with a detail', data: result });
    } catch (error) {
      res.json({ status: false, message: 'respond with a detail', id });
    }
  },

  async create(req, res, next) {
    const formData = req.body
    try {
      const { status, data } = await UnitService.create(formData)
      res.json({ status, message: 'respond with a create', data });
    } catch (error) {
      res.json({ status: false, message: error.message, });
    }
  },

  async update(req, res, next) {
    const id = req.params.id
    const data = req.body
    try {
      console.log("Req:", id, data);

      await UnitService.update(id, data)
      res.json({ status: true, message: 'respond with a update', id });
    } catch (error) {
      res.json({ status: false, message: 'respond with a detail', id });
    }
  },

  async remove(req, res, next) {
    const id = req.params.id
    try {
      const status = await UnitService.remove(id)
      res.json({ status, message: 'respond with a remove' });
    } catch (error) {
      res.json({ status: false, message: 'respond with a remove' });
    }
  }
}

export default UnitController;
