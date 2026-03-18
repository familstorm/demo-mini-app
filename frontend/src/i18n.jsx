import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {},
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n

// export async function changeLanguage(lang) {
//   const translation = await loadTranslations(lang)
//   i18n.addResources(lang, translation)
//   await i18n.changeLanguage(lang)
//   Utils.setLocalStorage('lang', lang)
// }
