
export const initState = {
  formData: {
    articleNo: '',
    product: '',
    inPrice: 0,
    price: 0,
    inStock: 0,
    description: '',
    unitId: ''
  },
  errors: {
    articleNo: '',
    product: '',
    inPrice: '',
    price: '',
    inStock: '',
    description: '',
    unitId: ''
  },
  submited: false,
  isValid: false
}

export const PRICELIST_CREATE_ACTIONS = {
  SET_INPUT: 'SET_INPUT',
  SET_ERRORS: 'SET_ERRORS',
  SET_VALIDATE: 'SET_VALIDATE',
  SUBMIT: 'SUBMIT',
  LOADING: 'LOADING',
}

export const reducer = (state, action) => {
  console.log('action.payload:', action.payload);
  
  switch (action.type) {
    case PRICELIST_CREATE_ACTIONS.SET_INPUT:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value
        }
      }
    
    case PRICELIST_CREATE_ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    case PRICELIST_CREATE_ACTIONS.SET_VALIDATE:
      return {
        ...state,
        isValid: action.payload
      }
    default:
      return state;
  }
}
