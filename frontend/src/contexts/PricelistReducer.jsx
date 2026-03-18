
export const initState = {
  items: [],
  pagination: { page: 1, limit: 25, totalPage: 1 },
  params: { search: { articleNo: '', name: '' }, orderBy: 'id', orderDict: 'DESC' },
  headers: [
      { id: 'id', text: '' },
      { id: 'articleNo', text: 'Article No.' },
      { id: 'name', text: 'Product/Service' },
      { id: 'inPrice', text: 'In Price' },
      { id: 'price', text: 'Price' },
      { id: 'unit', text: 'Unit' },
      { id: 'inStock', text: 'In Stock' },
      { id: 'description', text: 'Description' },
      { id: 'menu', text: '' },
    ]
}

export const PRICELIST_ACTIONS = {
  SET_ITEMS: 'SET_ITEMS',
  SET_PAGINATION: 'SET_PAGINATION',
  SET_PARAMS: 'SET_PARAMS'
}

export const reducer = (state, action) => {
  console.log('action.payload:', action.payload);
  
  switch (action.type) {
    case PRICELIST_ACTIONS.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case PRICELIST_ACTIONS.SET_PAGINATION:
      return {
        ...state,
        pagination: { ...state.pagination, pagination: action.payload }
      };
    case PRICELIST_ACTIONS.SET_PARAMS:
      return {
        ...state,
        params: { ...state.params, params: action.payload }
      };
    default:
      return state;
  }
}
