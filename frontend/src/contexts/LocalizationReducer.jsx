
export const initState = {
  language: 'en',
  resources: {}
}

export const LOCALIZATION_ACTIONS = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  SET_TRANSLATION: 'SET_TRANSLATION'
}

export const reducer = (state, action) => {
  console.log('action.payload:', action.payload);
  
  switch (action.type) {
    case LOCALIZATION_ACTIONS.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    case LOCALIZATION_ACTIONS.SET_TRANSLATION:
      return {
        ...state,
        resources: action.payload,
      }
    default:
      return state;
  }
}
