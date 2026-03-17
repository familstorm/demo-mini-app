import PriceListService from './pricelist.service.js'

const PriceListController = {
  async list(req, res, next) {
    try {
      const { data, meta } = await PriceListService.list(req.query)
      res.json({ status: true, message: 'respond with a all', data, meta });
    } catch (error) {
      res.json({ status: false, message: 'respond with a all' });
    }
  },

  async detail(req, res, next) {
    const id = req.params.id
    try {
      const result = await PriceListService.detail(id)
      res.json({ status: true, message: 'respond with a detail', data: result });
    } catch (error) {
      res.json({ status: false, message: 'respond with a detail', id });
    }
  },

  async create(req, res, next) {
    const formData = req.body
    try {
      console.log('formData:', formData);

      const { status, data } = await PriceListService.create(formData)
      res.json({ status, message: 'respond with a create', data });
    } catch (error) {
      console.error(error);

      res.json({ status: false, message: error.message, });
    }
  },

  async update(req, res, next) {
    const id = req.params.id
    const data = req.body
    try {
      console.log("Req:", id, data);

      await PriceListService.update(id, data)
      res.json({ status: true, message: 'respond with a update', id });
    } catch (error) {
      res.json({ status: false, message: 'respond with a detail', id });
    }
  },

  async editableInline(req, res, next) {
    const id = req.params.id
    const data = req.body
    try {
      const status = await PriceListService.editInline(id, data)
      res.json({ status, message: 'respond with a update', id });
    } catch (error) {
      res.json({ status: false, message: 'respond with a detail', id });
    }
  },

  async remove(req, res, next) {
    const id = req.params.id
    try {
      const status = await PriceListService.remove(id)
      res.json({ status, message: 'respond with a remove' });
    } catch (error) {
      res.json({ status: false, message: 'respond with a remove' });
    }
  }
}

export default PriceListController;
