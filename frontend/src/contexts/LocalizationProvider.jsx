import  { createContext, useEffect, useContext, useReducer, useCallback } from 'react';
import { loadTranslations } from '../apiClient/translation'
import i18n from '../i18n'

import {reducer, initState, LOCALIZATION_ACTIONS } from './LocalizationReducer';

// eslint-disable-next-line react-refresh/only-export-components
export const LocalizationContext = createContext()

export const LocalizationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const loadLanguage = useCallback(async(lang)=> {
    try {
      const data = await loadTranslations(lang)
      console.log('fetch translation...', data);
      dispatch({
        type: LOCALIZATION_ACTIONS.SET_TRANSLATION,
        payload: data
      })

      i18n.addResourceBundle(lang, 'translation', data, true, true)
      await i18n.changeLanguage(lang)
    } catch (err) {
      console.log(err);
    }
  }, [])

   useEffect(() => {
    loadLanguage(state.language)
  }, [])

  return (
    <LocalizationContext.Provider value={{ state, dispatch, loadLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error("useLocalization haven't on LocalizationProvider");
  }
  return context;
};
