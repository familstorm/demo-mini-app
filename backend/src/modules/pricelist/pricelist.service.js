import { Op } from 'sequelize';
import sanitizeTextUtil from '../../utils/sanitize-text.util.js'
import paginationUtil from '../../utils/pagination.util.js'
import UnitEntity from '../unit/entities/unit.entity.js';
import PriceListEntity from './entities/pricelist.entity.js'

const list = async (queries = {}) => {
  const { articleNo, name } = queries
  const pagination = paginationUtil.getPagination(queries)
  try {
    const selete = ['id', 'articleNo', 'name', 'inPrice', 'price', 'inStock', 'description', 'unitId']
    const where = queries?.where ? queries?.where : {}
    if (articleNo) where.articleNo = articleNo
    if (name) where.name = { [Op.like]: `%${sanitizeTextUtil(name)}%` }
    const { count, rows } = await PriceListEntity.findAndCountAll({
      attributes: selete,
      where,
      include: [{ model: UnitEntity, as: 'unit', attributes: ['id', 'title', 'symbol'] }],
      offset: pagination.offset,
      limit: pagination.limit,
    });
    return {
      data: rows.map(i => i.dataValues),
      meta: paginationUtil.getPaginationMeta(pagination, count)
    }
  } catch (error) {
    return { data: [], meta: { ...pagination, totalPage: 1 } }
  }
}

const detail = async (id) => {
  try {
    const selete = ['id', 'articleNo', 'name', 'inPrice', 'price', 'inStock', 'description', 'unitId']
    const result = await PriceListEntity.findOne({
      attributes: selete,
      where: { id },
      include: [{ model: UnitEntity, as: 'unit' }]
    })
    return result ? result.dataValues : null
  } catch (error) {
    return null
  }
}

const create = async (body) => {
  try {
    const data = {
      ...body,
    }
    const result = await PriceListEntity.create(data,
      { fields: ['articleNo', 'name', 'inPrice', 'price', 'inStock', 'description', 'unitId'] }
    )
    if (!!result.id) {
      const item = (await PriceListEntity.findOne({ where: { id: result.id } })).dataValues
      return { status: true, data: item }
    } else
      return { status: false, data: null }
  } catch (error) {
    console.error(error)
    return { status: false, data: null }
  }
}

const update = async (id, body) => {
  try {
    // Check item by id
    const unit = await PriceListEntity.findByPk(id, {
      include: [{ model: UnitEntity, as: 'unit' }]
    })
    if (!unit)
      return false

    const newValues = {
      ...body,
    }
    const [updatedRows] = await PriceListEntity.update(newValues, {
      where: { id },
      fields: ['articleNo', 'name', 'inPrice', 'price', 'inStock', 'description', 'unitId']
    });
    if (updatedRows > 0)
      return { status: true }
    return { status: false, data: null }
  } catch (error) {
    return { status: false, data: null }
  }
}

const editInline = async (id, body) => {
  const field = body.field
  const value = body.value
  try {
    const item = await PriceListEntity.findByPk(id, {
      include: [{ model: UnitEntity, as: 'unit' }]
    })
    if (!item) return false

    if (item.unit) {
      console.log('unit:', item);
    }
    const [updatedRows] = await PriceListEntity.update(
      { [field]: value },
      { where: { id }, fields: [field] }
    );
    return updatedRows > 0
  } catch (error) {
    return false
  }
}

const remove = async (id) => {
  try {
    const item = await PriceListEntity.findByPk(id)
    if (item) {
      const result = await PriceListEntity.destroy({ where: { id } })
      return result > 0
    } else
      return false
  } catch (error) {
    return false
  }
}

export default {
  list,
  detail,
  create,
  update,
  editInline,
  remove
};
