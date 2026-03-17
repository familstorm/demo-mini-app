const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 25;

const toNumber = (value, defaultValue) => {
  return !Number.isNaN(value) ? defaultValue : Number(value)
}

export default {
  getPagination: (query = {}) => {
    let page = toNumber(query.page, DEFAULT_PAGE)
    let perPage = toNumber(query.perPage, DEFAULT_PER_PAGE)

    if (page < 1) page = DEFAULT_PAGE
    if (perPage < 1) perPage = DEFAULT_PER_PAGE
    console.log('page', page);
    console.log('perPage', perPage);

    const limit = perPage
    const offset = (page - 1) * perPage

    return {
      perPage: 25,
      page: page,
      limit,
      offset
    }
  },

  getPaginationMeta: (pagination, totalItem) => {
    const totalPage = Math.ceil(totalItem / pagination.perPage)
    if (totalPage < 1) totalPage = 1
    return {
      ...pagination,
      totalPage
    }
  }
}
