import PriceListEntity from './entities/pricelist.entity.js'


const getAll = async (queries = { rowOnPage: 25, page: 1 }) => {
  const selete = ['id', 'articleNo', 'product', 'inPrice', 'price', 'inStock', 'description', 'unitId']
  const where = queries?.where ? queries?.where : {}

  try {
    const items = await PriceListEntity.findAll({
      attributes: selete,
      where: where,

      limit: perPage,

    })
    return user.dataValues
  } catch (error) {

  }

}

const getItem = async (id) => {

}

const createItem = async () => {
  try {


    return {}
  } catch (error) {
    throw error
    // throw new Error('create user ...', error);
  }
}

const updateItem = async () => {

}

const deleteItem = async () => {

}

export default {
  getAll,
  getItem,
  createItem,
  updateItem,
  deleteItem
};
