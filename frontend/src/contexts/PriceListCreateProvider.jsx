import  { createContext, useContext, useReducer, useCallback } from 'react';
import { createApi } from '../apiClient/pricelist'

import {reducer, initState, PRICELIST_CREATE_ACTIONS } from './PriceListCreateReducer';




const validateForm = (name, value) => {
  const strValue = value !== null && value !== undefined ? String(value).trim() : "";
  switch (name) {
    case 'articleNo':
      if (!strValue) return 'Article No is not empty';
      if (!/^\d+$/.test(strValue)) return 'Article No is must numeric';
      break;

    case 'name':
      if (!strValue) return 'Product/Service is not empty';
      if (typeof value !== 'string') return 'Product/Service is must string';
      break;
    case 'inPrice':
    case 'price':
      {
        const label = name === 'inPrice' ? 'In Price' : 'Price';
        if (!strValue) return `${label} is not empty`;
        if (isNaN(value) || value === "") return `${label} is must decimal`;
        if (parseFloat(value) < 0) return `${label} greater than 0`;
        break;
      }
    case 'inStock':
      if (strValue !== "") {
        const n = Number(value);
        if (!Number.isInteger(n) || n < 0) return 'In Stock is integer and greater than 0';
      }
      break;

    case 'description':
      if (value !== undefined && value !== null && typeof value !== 'string') {
        return 'Description is must text';
      }
      break;

    case 'unitId':
      if (!strValue) return 'Unit is not empty';
      if (!Number.isInteger(Number(value))) return 'Unit is must integer';
      break;

    default:
      return null;
  }
  return null;
}


// eslint-disable-next-line react-refresh/only-export-components
export const PricelistCreateContext = createContext()

export const PricelistCreateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const submitApi = useCallback(async(formData)=> {
     try {
          console.log('fetch trigger...');
          const data = await createApi(formData);
          console.log('fetchList', data?.errors)

          if (Array.isArray(data?.errors) &&  data?.errors.length > 0) {
            const payload = []
            data?.errors.map(i => {
              console.log('errors -> ', i)
              payload[i.path] = i.msg
            })

            dispatch({
              type: PRICELIST_CREATE_ACTIONS.SET_ERRORS,
              payload
            })
          }

        } catch (err) {
          console.log('fetchList errrors', err);
          // if (err.response && err.response.status === 400) {
        }
  }, [])

  const getValidates = (formData) => {
    const errors = {}

    for (const key in formData) {
      if (!Object.hasOwn(formData, key)) continue;
      const value = formData[key];
    
      const valid = validateForm(key, value)
      if (valid) errors[key] = valid
    }

    dispatch({
      type: PRICELIST_CREATE_ACTIONS.SET_ERRORS,
      payload: !(Object.keys(errors).length > 0)
    })
  }

  return (
    <PricelistCreateContext.Provider value={{ state, dispatch, submitApi, getValidates }}>
      {children}
    </PricelistCreateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePricelist = () => {
  const context = useContext(PricelistCreateContext);
  if (!context) {
    throw new Error("usePricelist haven't on PricelistProvider");
  }
  return context;
};
