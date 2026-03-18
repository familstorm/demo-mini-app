import  { createContext, useContext, useReducer, useCallback } from 'react';
import { pricelistApi } from '../apiClient/pricelist'

import {reducer, initState, PRICELIST_ACTIONS } from './PricelistReducer';

// eslint-disable-next-line react-refresh/only-export-components
export const PricelistContext = createContext()

export const PricelistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const fetchApi = useCallback(async (params) => {
    try {
      console.log('fetch trigger...');
      
      const { data, meta } = await pricelistApi(params);
      console.log('fetchList', data, meta)

      dispatch({ type: PRICELIST_ACTIONS.SET_ITEMS, payload: data });
      dispatch({ type: PRICELIST_ACTIONS.SET_PAGINATION, payload: meta })

    } catch (err) {
      console.log(err);
    }
  }, [])

  return (
    <PricelistContext.Provider value={{ state, dispatch, fetchApi }}>
      {children}
    </PricelistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePricelist = () => {
  const context = useContext(PricelistContext);
  if (!context) {
    throw new Error("usePricelist haven't on PricelistProvider");
  }
  return context;
};