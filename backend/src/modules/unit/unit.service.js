import UnitEntity from './entities/unit.entity.js'
import paginationUtil from '../../utils/pagination.util.js'

const list = async (queries = {}) => {
  const pagination = paginationUtil.getPagination(queries)
  console.log('pagination: ', pagination);

  try {
    const selete = ['id', 'title', 'symbol', 'description']
    const where = queries?.where ? queries?.where : {}

    const { count, rows } = await UnitEntity.findAndCountAll({
      attributes: selete,
      where,
      offset: pagination.offset,
      limit: pagination.limit
    });
    const result = rows.map(i => i.dataValues)
    console.log('result:', result);
    return {
      data: result,
      meta: paginationUtil.getPaginationMeta(pagination, count)
    }
  } catch (error) {
    return { data: [], meta: { ...pagination, totalPage: 1 } }
  }
}

const detail = async (id) => {
  try {
    const selete = ['id', 'title', 'symbol', 'description']
    const where = { id }

    const result = await UnitEntity.findOne({
      attributes: selete,
      where
    })
    return result ? result.dataValues : null
  } catch (error) {
    return null
  }
}

const create = async (body) => {
  try {
    const data = {
      title: body.title,
      symbol: body.symbol,
      description: body.description
    }
    const result = await UnitEntity.create(
      data,
      { fields: ['title', 'symbol', 'description'] }
    )
    if (!!result.id) {
      const item = (await UnitEntity.findOne({ where: { id: result.id } })).dataValues
      return { status: true, data: item }
    } else
      return { status: false, data: null }
  } catch (error) {
    return { status: false, data: null }
  }
}

const update = async (id, body) => {
  try {
    // Check item by id
    const unit = await UnitEntity.findByPk(id)
    if (!unit)
      return { status: false, data: null }

    const newValues = {
      title: body.title,
      symbol: body.symbol,
      description: body.description
    }
    const [updatedRows] = await UnitEntity.update(newValues, {
      where: { id }
    });
    if (updatedRows > 0)
      return { status: true }
    return { status: false, data: null }
  } catch (error) {
    return { status: false, data: null }
  }
}

const remove = async (id) => {
  try {
    const result = await UnitEntity.destroy({ where: { id } })
    return result > 0
  } catch (error) {
    return false
  }
}

export default {
  list,
  detail,
  create,
  update,
  remove
};
